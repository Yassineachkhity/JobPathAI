import { ResumeInfoType } from "../../../context/ResumeInfoContext";

interface PersonalDetailsPreviewProps {
    resumeInfo: ResumeInfoType | null; // Explicitly typing the resumeInfo prop
}


function SummaryPreview({resumeInfo}: PersonalDetailsPreviewProps) {
    return (
        <p className="text-xs">
            {resumeInfo?.summary}
        </p>
    )
}

export default SummaryPreview