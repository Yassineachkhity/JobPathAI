import Button from "@/components/Button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useContext } from "react";

function Summary() {
    const context = useContext(ResumeInfoContext);

    if (!context) {
        return <div>Loading...</div>;
    }

    const { resumeInfo, setResumeInfo } = context;

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (resumeInfo) {
            setResumeInfo({
                ...resumeInfo,
                [name]: value,
            });
        }
    };

    return (
        <div className="p-5 shadow-lg rounded-lg border-t-blue-900 border-t-4 mt-10">
            <h2 className="font-bold text-lg">Summary</h2>
            <p>Add Summary for your Job title</p>

            <div className="mt-7">
                <div className="flex justify-between items-end">
                    <label htmlFor="summary-textarea">Add summary</label>
                    <Button variant="secondary">Generate from AI</Button>
                </div>
                <Textarea
                    id="summary-textarea"
                    name="summary"
                    className="mt-5"
                    onChange={handleInputChange}
                />
            </div>
        </div>
    );
}

export default Summary;
