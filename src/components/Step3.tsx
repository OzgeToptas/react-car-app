import React, { useState } from "react";
import * as yup from "yup";
import Alert from "./Alert";

const validationSchema = yup.object().shape({
    code: yup.string().required("Code is required"),
});
function Step3({ handlePrev, handleNext, handleChange,triggerFetch, formData: { name,make,colour,code,_id } }: StepPropsInterface) {
    const [errors, setErrors] = useState({});
    const validation = () => {
        validationSchema
            .validate({ code }, { abortEarly: false })
            .then(async () => {
                const method = _id ? "PUT" : "POST"
                try {
                    const res = await fetch(`http://localhost:3000/api/car${_id ? `?id=${_id}` : ''}`, {
                        method: method,
                        headers: {
                            "Content-type": "application/json",
                        },
                        body: JSON.stringify({ name, make, colour, code }),
                    });
            
                    if (res.ok) {
                        setErrors({ code: "" });
                        triggerFetch();
                        handleNext();
                    } else {
                        throw new Error("Failed to create a Car");
                    }
                } catch (error) {
                    console.log(error);
                }
                
            })
            .catch((err: yup.ValidationError) => {
                const newErrors: newErrors = {};
                err.inner.forEach((error) => {
                    if (error.path !== undefined) {
                        newErrors[error.path] = error.message;
                    }
                });
                setErrors((prevErrors) => ({ ...prevErrors, ...newErrors }));
            });
    };
    return (
        <>
            <div className="col-span-2">
                <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">
                        Code
                    </label>
                    <input
                        type="text"
                        id="code"
                        name="code"
                        value={code}
                        onChange={handleChange}
                        placeholder=""
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                </div>
            </div>
            <div className="col-span-2 p-2 flex justify-end">
                <button type="button" className="mt-2 text-white bg-sky-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" onClick={handlePrev}>
                    &nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-slate-100" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        <path fillRule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>
                    Prev
                </button>
                <button type="button" className="mt-2 ml-1 text-white bg-sky-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" onClick={validation}>
                    Next
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-slate-100" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                        <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>
            </div>
        </>
    );
}

export default Step3;
