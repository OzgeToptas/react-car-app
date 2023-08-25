import React from 'react';
import { Document } from 'mongoose';
import { Server as NetServer, Socket } from "net";
import { NextApiResponse } from "next";
import { Server as SocketIOServer } from "socket.io";

export {};

declare global {
    interface AppInterface {
        getFindFect:any;
        setGetFindFect: React.Dispatch<React.SetStateAction<any>>;
        findFetchCar: (carId:string) => void;
    }   

    interface ListViewInterface {
        triggerFindFetch: (id: string) => void;
        getFect: boolean;
        setGetFect: React.Dispatch<React.SetStateAction<boolean>>;
    }

    

    interface WizardFormInterface {
        getFindFect: any;
        triggerFetch: () => void;
        currentStep: number;
        setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    }
    

    interface StepPropsInterface {
        currentStep: number;
        setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
        formData: FormDataType;
        setFormData:React.Dispatch<React.SetStateAction<FormDataType>>;
        handleNext: () => void;
        handlePrev: () => void;
        handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
        triggerFetch: () => void;
    }
    //? form interface
    interface FormDataType {
        name : string;
        make : string;
        colour : string;
        code : string;
        _id: string
        status?:number
    };
    //? mongodb 
    var mongoose: {
        promise: Promise<Mongoose> | null;
        conn: Mongoose | null;
    };

    interface CarModel extends Document {
        name: string;
        make: string;
        colour: string;
        code: string;
    }
    //? Validation
    type AlertProps = {
        message: string;
    }
    type newErrors ={ 
        [key: string]: string 
    } 
}
