import { useContext } from "react"
import { ResumeInfoContext } from "../../context/ResumeInfoContext";
import PersonalDetailsPreview from "./preview/PersonalDetailsPreview";
import SummaryPreview from "./preview/SummaryPreview";
import ExperiencePreview from "./preview/ExperiencePreview";
import EducationalPreview from "./preview/EducationalPreview";
import SkillsPreview from "./preview/SkillsPreview";


function ResumePreview() {
    const context = useContext(ResumeInfoContext);

    if (!context) {
        return <div>Loading...</div>;
    }

    const { resumeInfo} = context;

    return (
        <div className="shadow-lg h-full p-14 border-t-[20px]" style={{borderColor:resumeInfo?.themeColor}}>
            {/*Personal Details */}
                <PersonalDetailsPreview resumeInfo={resumeInfo}/>
            {/*Summary */}
                <SummaryPreview resumeInfo={resumeInfo}/>
            {/*Professional Experience */}
                <ExperiencePreview resumeInfo={resumeInfo}/>
            {/*Educational Details */}
                <EducationalPreview resumeInfo={resumeInfo}/>
            {/*Skills */}
                <SkillsPreview resumeInfo={resumeInfo}/>


        </div>
    )
}

export default ResumePreview