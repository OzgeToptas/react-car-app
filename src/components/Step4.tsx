import React from "react";

function Step4({setCurrentStep,setFormData, formData: { name, make, colour, code } }: StepPropsInterface) {
    const handleGoHome = () => {
        setFormData({name: "",make: "",colour: "",code: "",_id: ""});
        setCurrentStep(1);
    };
    return (
        <div className="col-span-2">
            <h3 className="text-xl font-semibold text-slate-600 mb-4">Generated Text</h3>
            <p className="font-normal text-slate-600">
                I have a {name} and the colour is {colour}.
            </p>
            {colour == "RED" && <p className="font-normal text-slate-600 mb-2">THE CAR IS RED! NICE!!</p>}
            <p className="font-normal text-slate-600">REF: {code}</p>
            <button type="button" className="mt-2 text-white bg-sky-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" onClick={handleGoHome}>
                <svg xmlns="http://www.w3.org/2000/svg" className="text-slate-100" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    <path fillRule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg>
                Home
            </button>
        </div>
    );
}

export default Step4;
