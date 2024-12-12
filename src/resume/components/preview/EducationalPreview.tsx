import { ResumeInfoType } from "../../../context/ResumeInfoContext";

interface PersonalDetailsPreviewProps {
    resumeInfo: ResumeInfoType | null; // Explicitly typing the resumeInfo prop
}



function EducationalPreview({resumeInfo}: PersonalDetailsPreviewProps) {
    return (
        <div className="my-6 ">
            <h2 className="text-center text-sm mb-2 font-bold"
            style={{color:resumeInfo?.themeColor}}>Education</h2>
            <hr style={{borderColor:resumeInfo?.themeColor}}/>

            {resumeInfo?.education.map((education, index) => (
                <div key={index} className="my-5">
                    <h2 className="text-sm font-bold" style={{color:resumeInfo?.themeColor}}>{education?.universityName}</h2>
                    <h2 className="text-xs flex justify-between">{education?.degree} in {education?.major}
                        <span>{education?.startDate} - {education?.endDate}</span>
                    </h2>

                    <p className="text-xs my-2">
                        {education?.description}
                    </p>

                </div>
            ))}
        </div>
    )
}

export default EducationalPreview