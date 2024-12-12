import { ResumeInfoType } from "../../../context/ResumeInfoContext";

interface PersonalDetailsPreviewProps {
    resumeInfo: ResumeInfoType | null; // Explicitly typing the resumeInfo prop
}

function PersonalDetailsPreview({resumeInfo}: PersonalDetailsPreviewProps) {
    
    return (
        <div>
            <h2 className="font-bold text-xl text-center"
            style={{color:resumeInfo?.themeColor}}>
                {resumeInfo?.firstName} {resumeInfo?.lastName}</h2>
            <h2 className="text-center text-sm font-medium ">{resumeInfo?.jobTitle}</h2>
            <h2 className="text-center font-normal text-xs">{resumeInfo?.address}</h2>

            <div className="flex justify-between">
                <h2 className="font-normal text-xs"
                style={{color:resumeInfo?.themeColor}}>{resumeInfo?.phone}</h2>
                <h2 className="font-normal text-xs"
                style={{color:resumeInfo?.themeColor}}>{resumeInfo?.email}</h2>
            </div>
            <hr className="border-[1.5px] my-2 "style={{borderColor:resumeInfo?.themeColor}}  />
        </div>
    )
}

export default PersonalDetailsPreview