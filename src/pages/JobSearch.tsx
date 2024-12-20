import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { GoogleGenerativeAI } from '@google/generative-ai';
import axios from 'axios';
import Footer from '../components/Footer';
import { extractTextFromPDF } from '../utils/pdfjs';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI('AIzaSyDwztTGZTJGE2gJeMdQxg4DywxzHS1J5ag');

const JobSearch: React.FC = () => {
  const [pdfText, setPdfText] = useState<string>('');
  const [skills, setSkills] = useState<string[]>([]);
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // Analyze skills using Gemini AI
  const analyzeSkills = async (text: string) => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = `Extract and list only the technical skills and hard skills from the following resume text. Format the output as a comma-separated list of keywords: ${text}`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const skillsList = response.text().split(',').map(skill => skill.trim());
      return skillsList.filter(skill => skill.length > 0);
    } catch (error) {
      console.error('Error analyzing skills:', error);
      throw new Error('Failed to analyze skills');
    }
  };

  // Search for jobs using the skills
  const searchJobs = async (skills: string[]) => {
    try {
      // Using a mock API call for demonstration
      // Replace with your actual job search API
      const response = await axios.get(`https://api.jobs.example.com/search?skills=${skills.join(',')}`);
      return response.data.jobs;
    } catch (error) {
      console.error('Error fetching jobs:', error);
      // For demonstration, return mock data
      return [
        {
          id: 1,
          title: 'Senior Software Engineer',
          company: 'Tech Corp',
          location: 'Paris, France',
          applyUrl: '#'
        },
        {
          id: 2,
          title: 'Full Stack Developer',
          company: 'Startup Inc',
          location: 'Remote',
          applyUrl: '#'
        }
      ];
    }
  };

  // Handle file drop
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setLoading(true);
    setError('');
    
    try {
      const file = acceptedFiles[0];
      if (file && file.type === 'application/pdf') {
        const text = await extractTextFromPDF(file);
        setPdfText(text);
        
        const extractedSkills = await analyzeSkills(text);
        setSkills(extractedSkills);
        
        const jobResults = await searchJobs(extractedSkills);
        setJobs(jobResults);
      } else {
        throw new Error('Please upload a PDF file');
      }
    } catch (err: any) {
      setError(err.message);
      console.error('Error processing file:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
    multiple: false
  });

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Job Search</h1>
        
        {/* PDF Upload Zone */}
        <div
          {...getRootProps()}
          className={`p-10 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors
            ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}
        >
          <input {...getInputProps()} />
          <div className="space-y-2">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-lg text-gray-600">
              {isDragActive
                ? 'Drop your resume here...'
                : 'Drag and drop your resume, or click to select'}
            </p>
            <p className="text-sm text-gray-500">PDF files only</p>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="mt-8 text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
            <p className="mt-2 text-gray-600">Analyzing your resume...</p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mt-8 p-4 bg-red-50 rounded-lg">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {/* Skills Section */}
        {skills.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Identified Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Jobs Section */}
        {jobs.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Matching Jobs</h2>
            <div className="space-y-4">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                  <p className="mt-2 text-gray-600">{job.company}</p>
                  <p className="text-gray-500">{job.location}</p>
                  <div className="mt-4">
                    <a
                      href={job.applyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default JobSearch;