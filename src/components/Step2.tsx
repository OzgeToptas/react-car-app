import React,{useState} from 'react'
import * as yup from 'yup';
import Alert from './Alert'

const validationSchema = yup.object().shape({
    colour: yup
      .string().required('Colour is required')
      .test('is-valid-car-brand', 'Invalid colur', (value) => {
      return ['BLUE', 'RED', 'BLACK', 'ORANGE'].includes(value.toUpperCase());
    })
  });

function Step2({ handlePrev,handleNext,handleChange,formData: { colour } }: StepPropsInterface) {
    const [errors, setErrors] = useState({colour: ""});
    const validation = () =>{
        validationSchema.validate(
            { colour},
            { abortEarly: false}
          )
          .then(() => {
            setErrors({ colour: "" });
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
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">Colour</label>
                <input type="text" id="colour" name="colour" value={colour} onChange={handleChange} placeholder="" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                { errors.colour && <Alert message={errors.colour} />}
            </div>
        </div>
        <div className="col-span-1 p-2">
            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside">
                <li className="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className='text-green-500' width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                        <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    <span>BLUE</span>
                </li>
                <li className="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className='text-green-500' width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                        <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    <span>RED</span>
                </li>
                <li className="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className='text-green-500' width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                        <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    <span>BLACK</span>
                </li>
                <li className="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className='text-green-500' width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                        <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    <span>ORANGE</span>
                </li>
            </ul>
            <button type="button" className="mt-2 text-white bg-sky-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" onClick={handlePrev}>
                &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" className='text-slate-100' width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    <path fillRule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
                Prev
            </button>
            <button type="button" className="mt-2 ml-1 text-white bg-sky-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" onClick={validation}>
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

export default Step2