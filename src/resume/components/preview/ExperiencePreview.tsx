import { ResumeInfoType } from "../../../context/ResumeInfoContext";

interface PersonalDetailsPreviewProps {
    resumeInfo: ResumeInfoType | null; // Explicitly typing the resumeInfo prop
}


function ExperiencePreview({resumeInfo}: PersonalDetailsPreviewProps) {
    return (
        <div className="my-6 ">
            <h2 className="text-center text-sm mb-2 font-bold"
            style={{color:resumeInfo?.themeColor}}>Professional Experience</h2>
            <hr style={{borderColor:resumeInfo?.themeColor}}/>

            {resumeInfo?.experience.map((experience,index)=>(
                <div key={index} className="my-5">
                    <h2 className="text-sm font-bold" style={{color:resumeInfo?.themeColor}}>{experience?.title}</h2>
                    <h2 className="text-xs flex justify-between">{experience?.companyName},
                        {experience?.city}, 
                        {experience?.state}
                        <span>{experience?.startDate} {experience?.currentlyWorking?"present":experience?.endDate}</span>
                        </h2>
                        
                        <p className="text-xs my-2">
                            {experience?.worksummary}
                        </p>
                    
                </div>
            ))}
        </div>
    )
}

export default ExperiencePreview