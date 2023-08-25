import React, { useEffect, useState } from "react";
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;
//components
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

function WizardForm({getFindFect,triggerFetch, currentStep,setCurrentStep}:WizardFormInterface) {

     useEffect(() => {
        if (getFindFect) findFetchCar(getFindFect)
    }, [getFindFect]);
      
    const [formData, setFormData] = useState<FormDataType>({
        name: "",
        make: "",
        colour: "",
        code: "",
        _id: "",
    });
    

    async function findFetchCar(carId:string) {
        try {
          const response = await fetch(`/api/car?id=${carId}`);
          const data = await response.json();

          setFormData(data);
        } catch (error) {
          console.error('Error fetching car details:', error);
        }
      }


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value.toUpperCase(),
        }));
    };

    const handleNext = () => {
        setCurrentStep((currentStep) => (currentStep >= 3 ? 4 : currentStep + 1));
    };

    const handlePrev = () => {
        setCurrentStep((currentStep) => (currentStep <= 1 ? 1 : currentStep - 1));
    };

    const props: StepPropsInterface = {
        currentStep,
        setCurrentStep,
        formData,
        setFormData,
        handleNext,
        handlePrev,
        handleChange,
        triggerFetch,
    };

    return (
        <div className="grid grid-cols-2 border rounded-md border-slate-300 p-4 shadow">
            {currentStep === 1 && <Step1 {...props} />}
            {currentStep === 2 && <Step2 {...props} />}
            {currentStep === 3 && <Step3 {...props} />}
            {currentStep === 4 && <Step4 {...props} />}
        </div>
    );
}

export default WizardForm;
