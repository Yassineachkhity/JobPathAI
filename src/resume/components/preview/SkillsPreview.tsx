import { ResumeInfoType } from "../../../context/ResumeInfoContext";

interface PersonalDetailsPreviewProps {
    resumeInfo: ResumeInfoType | null; // Explicitly typing the resumeInfo prop
}

function SkillsPreview({resumeInfo}: PersonalDetailsPreviewProps) {
    return (
        <div className="my-6 ">
            <h2 className="text-center text-sm mb-2 font-bold"
            style={{color:resumeInfo?.themeColor}}>Skills</h2>
            <hr style={{borderColor:resumeInfo?.themeColor}}/>

            <div className="grid grid-cols-2 gap-3 my-4">
                {resumeInfo?.skills.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <h2 className="text-xs">{skill?.name}</h2>
                        <div className="h-2 bg-gray-200 w-[120px]">
                            <div className="h-2 " style={{backgroundColor:resumeInfo?.themeColor, width:skill?.rating +"%"}}>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default SkillsPreview