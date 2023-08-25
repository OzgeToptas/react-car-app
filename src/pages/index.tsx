import { useState } from "react";
import ListView from "../components/ListView";
import WizardForm from "../components/WizardForm";

export default function Home() {
    const [currentStep, setCurrentStep] = useState(1);
    const [getFindFect, setGetFindFect] = useState(null);
    const [getFect, setGetFect] = useState(false);
    
    const triggerFindFetch = (id: any) => setGetFindFect(id)
    const triggerFetch = () => setGetFect(true);

    const WilzardProps = {
        getFindFect,
        currentStep,
        setCurrentStep,
        triggerFetch
    }
    return (
        <>
            <div className="grid grid-cols-12 m-10">
                <div className="col-span-5">
                    <WizardForm {...WilzardProps} />
                </div>
                <div className="col-span-7  ml-4">
                    <ListView triggerFindFetch={triggerFindFetch} getFect={getFect} setGetFect={setGetFect} />
                </div>
            </div>
        </>
    );
}
