import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react"
import Button from "../../components/Button"
import PersonalDetails from "./forms/PersonalDetails"
import { useState } from "react"
import Summary from "./forms/Summary";


function FormSection() {
    const [activeFormIndex, setActiveFormIndex] = useState(1);
    const [enableNext, setEnableNext] = useState(false);


    return (
        <div>
            <div className="flex justify-between items-center">
                <Button variant="secondary" className="flex gap-2"> <LayoutGrid/>Theme</Button>
                <div className="flex justify-between items-center gap-2">
                    {activeFormIndex>1 && <Button  onClick={()=>setActiveFormIndex(activeFormIndex-1)}><ArrowLeft/></Button>}
                    <Button className="flex gap-2" onClick={()=>setActiveFormIndex(activeFormIndex+1)}
                        disabled={!enableNext}
                        >Next <ArrowRight/></Button>
                </div>
            </div>
            {/*Personal Details */}
                {activeFormIndex == 1 ? <PersonalDetails enableNext={(v)=>setEnableNext(v)}/>: null}
            {/*Summary */}
                {activeFormIndex == 2 ? <Summary/>: null}
            {/* Experience */}
        
            {/*Educational Details */}
        
            {/*Skills */}
        
        </div>
    )
}

export default FormSection