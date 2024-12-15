import {useEffect, useState } from "react";
import FormSection from "./components/FormSection";
import ResumePreview from "./components/ResumePreview";
import { ResumeInfoContext, ResumeInfoType } from "../context/ResumeInfoContext";
import dummy from "../data/dummy";


function EditResume() {

    const [resumeInfo, setResumeInfo] = useState<ResumeInfoType | null>(null);

    useEffect(() => {
        setResumeInfo(dummy);
    }, []);


    return (
        <ResumeInfoContext.Provider value={{resumeInfo, setResumeInfo}}>
            
            <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
                {/* Form section */}
                <FormSection />

                {/* Preview section */}
                <ResumePreview />
            </div>
        </ResumeInfoContext.Provider>
    );
}

export default EditResume;
