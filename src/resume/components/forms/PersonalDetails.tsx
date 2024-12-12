import { useContext } from "react";
import { ResumeInfoContext } from "../../../context/ResumeInfoContext";
import { Input } from "@/components/Input";
import Button from "@/components/Button";
import { toast } from "sonner";


interface PersonalDetailsProps {
    enableNext: (isValid: boolean) => void;  // This will accept a boolean to enable/disable the "Next" button
}


function PersonalDetails({enableNext} : PersonalDetailsProps) {
    const context = useContext(ResumeInfoContext);

    if (!context) {
        return <div>Loading...</div>;
    }

    const {resumeInfo, setResumeInfo} = context;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        enableNext(false);
        const { name, value } = e.target;
    
        if (resumeInfo) {
            setResumeInfo({
                ...resumeInfo,
                [name]: value,
            });
        }
    };

    const onSave = (e: React.FormEvent) => {
        e.preventDefault();
        enableNext(true);
        toast("Changes saved !!!");
    };


    return (
        <div className="p-5 shadow-lg rounded-lg border-t-blue-900 border-t-4 mt-10">
            <h2 className="font-bold text-lg">Personal Details</h2>
            <p>Get started with the basic information</p>

            <form onSubmit={onSave}>
                <div className="grid grid-cols-2 mt-5 gap-3 ">
                    <div>
                        <label className="text-sm">First Name</label>
                        <Input name="firstName" onChange={handleInputChange} required defaultValue={resumeInfo?.firstName}/>
                    </div>
                    <div>
                        <label className="text-sm">Last Name</label>
                        <Input name="lastName" onChange={handleInputChange} required defaultValue={resumeInfo?.lastName}/>
                    </div>
                    <div className="col-span-2">
                        <label className="text-sm">Job Title</label>
                        <Input name="jobTitle" onChange={handleInputChange} required defaultValue={resumeInfo?.jobTitle}/>
                    </div>
                    <div className="col-span-2">
                        <label className="text-sm">Address</label>
                        <Input name="address" onChange={handleInputChange} required defaultValue={resumeInfo?.address}/>
                    </div>
                    <div>
                        <label className="text-sm">Phone</label>
                        <Input name="phone" onChange={handleInputChange} required defaultValue={resumeInfo?.phone}/>
                    </div>
                    <div>
                        <label className="text-sm">Email</label>
                        <Input name="email" onChange={handleInputChange} required defaultValue={resumeInfo?.email}/>
                    </div>
                </div>
                <div className="mt-3 flex justify-end">
                    <Button type="submit">Save</Button>
                </div>
            </form>
        </div>
    )
}

export default PersonalDetails