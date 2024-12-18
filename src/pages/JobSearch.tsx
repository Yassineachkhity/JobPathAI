import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import * as pdfjsLib from 'pdfjs-dist';
import Footer from '../components/Footer';
import { GoogleGenerativeAI } from "@google/generative-ai";


const JobSearch: React.FC = () => {
  const [cvText, setCvText] = useState<string>('');
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);



// ###############################################################################
// extract Text From PDF
pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';
  const extractTextFromPDF = async (file: File): Promise<string> => {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    const numPages = pdf.numPages;
  
    const textPromises: Promise<string>[] = [];
    for (let i = 1; i <= numPages; i++) {
      textPromises.push(pdf.getPage(i).then(page =>
        page.getTextContent().then(content =>
          content.items.map((item: any) => item.str).join(' ')
        )
      ));
    }
  
    const pageTexts = await Promise.all(textPromises);
    return pageTexts.join('\n'); // Combine all pages' text
  };
  
  // ####################################################################


  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setLoading(true);
      try {
        // Extract text from the uploaded PDF
        const extractedText = await extractTextFromPDF(file);
        setCvText(extractedText); // Set the extracted text into state

        // Simulate job suggestion API
        setTimeout(() => {
          setJobs([
            {
              title: 'Senior Front End Developer',
              company: 'TechCorp',
              location: 'Casablanca',
              match: '95%',
            },
            {
              title: 'Frontend Developer',
              company: 'InnovTech',
              location: 'Casablanca',
              match: '90%',
            },
            {
              title: 'React Developer',
              company: 'WebSolutions',
              location: 'Rabat',
              match: '85%',
            },
          ]);
          setSuggestions(['React', 'TypeScript', 'TailwindCSS']);
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error('Error extracting text from PDF:', error);
        setLoading(false);
      }
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] },
    maxFiles: 1,
  });

  
  // ######################################################################
  // GeminiAPI 
  const generate = async () => {
    try {
      const genAI = new GoogleGenerativeAI("AIzaSyABABNczyX75-jOVAv1a3iTpYgUG0sDvC0");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `Analyse the following CV and retrieve all hard skills keywords: ${cvText}`;
      const result = await model.generateContent(prompt);
      console.log(result.response.text());
    } catch (error) {
      console.error("Error generating content:", error);
    }
  };
// ###################################################################################
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
              ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}
          >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center">
              <svg
                className="w-12 h-12 text-gray-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <p className="text-lg text-gray-600">
                {isDragActive ? 'Drop your CV here' : 'Sélectionnez votre CV'}
              </p>
              <p className="text-sm text-gray-500 mt-2">PDF only</p>
            </div>
          </div>

          {loading && (
            <div className="mt-8 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">Analyzing your CV...</p>
            </div>
          )}

          {jobs.length > 0 && !loading && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Suggestions</h2>
              <div className="flex gap-2 mb-6">
                {suggestions.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="space-y-4">
                {jobs.map((job, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">{job.title}</h3>
                        <p className="text-gray-600">{job.company}</p>
                        <p className="text-gray-500 text-sm mt-1">
                          <span className="inline-flex items-center">
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            {job.location}
                          </span>
                        </p>
                      </div>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {job.match} Match
                      </span>
                    </div>
                    <button className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium">
                      View More →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-center">
        <button
          className="bg-blue-800 text-white hover:bg-blue-900 px-6 py-2 rounded-md font-medium transition-colors duration-200"
          type="button"
          onClick={generate}
        >
          Gemini
        </button>
      </div>

      </main>

      <Footer />
    </div>
  );
};

export default JobSearch;
