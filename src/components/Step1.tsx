import React,{useState} from 'react'
import * as yup from 'yup';
import Alert from './Alert';

const validationSchema = yup.object().shape({
    make: yup.string().required('Make is required'),
    name: yup
      .string().required('Name is required')
      .test('is-valid-car-brand', 'Invalid car brand', (value) => {
      return ['AUDI', 'BMW', 'VAUXHAL', 'MERCEDES', 'PEUGEOT', 'RENAULT'].includes(value.toUpperCase());
    })
  });

function Step1({ handleNext,handleChange,formData: { name, make } }: StepPropsInterface) {
    const [errors, setErrors] = useState({
        name:"",
        make:"",
    });
    const validation = () =>{
        validationSchema.validate(
            { name,make},
            { abortEarly: false}
          )
          .then(() => {
            setErrors({ name: "", make: "" });
              handleNext()
          })
          .catch((err: yup.ValidationError) => {
            const newErrors: newErrors = {};
            err.inner.forEach((error) => {
                if (error.path !== undefined) {
                    newErrors[error.path] = error.message;
                }
            });
            setErrors((prevErrors) => ({...prevErrors,...newErrors}));
        });
    }
  return (
        <>
        <div className="col-span-1">
            <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                <input type="text" id="name" name="name" value={name} onChange={handleChange} placeholder="" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                { errors.name && <Alert message={errors.name} />}
            </div>
            <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">Make</label>
                <input type="text" id="make" name="make" value={make} onChange={handleChange} placeholder="" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                { errors.make && <Alert message={errors.make} />}
            </div>
        </div>
        <div className="col-span-1 p-4">
            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside">
                <li className="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className='text-green-500' width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                        <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    <span>AUDI</span>
                </li>
                <li className="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className='text-green-500' width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                        <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    <span>BMW</span>
                </li>
                <li className="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className='text-green-500' width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                        <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    <span>VAUXHAL</span>
                </li>
                <li className="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className='text-green-500' width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                        <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    <span>MERCEDES</span>
                </li>
                <li className="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className='text-green-500' width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                        <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    <span>PEUGEOT</span>
                </li>
                <li className="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className='text-green-500' width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                        <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    <span>RENAULT</span>
                </li>
            </ul>
            <button type="button" className="mt-2 text-white bg-sky-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" onClick={validation}>
                Next
                <svg xmlns="http://www.w3.org/2000/svg" className='text-slate-100' width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                    <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg> 
            </button>
        </div>
        </>
  )
}

export default Step1