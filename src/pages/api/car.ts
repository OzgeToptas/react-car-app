import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;
import mongodbConntect from "../../libs/mongodb";
import Car from "../../Models/Car";

export default async function handler(req: NextApiRequest, res: NextApiResponse<FormDataType | { error: string }>) {
    await mongodbConntect();
    if (req.method === "POST") {
        const { name, make, colour, code } = req.body;

        try {
            const newCar = await Car.create({ name, make, colour, code });
            res.status(200).json(newCar);

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Server error" });
        }
    } else if (req.method === 'GET') {
        try {
            let cars;
            if (req.query.id) {
                const objectId = new ObjectId(req.query.id as string);
                cars = await Car.findById(objectId);
            } else {
                cars = await Car.find();
            }
            res.status(200).json(cars);
        } catch (error) {
            res.status(500).json({ error: 'Server error' });
        }
    } else if (req.method === 'PUT') {
        try {
            const { id } = req.query;
            const { name, make, colour, code } = req.body;
            
            // ID'ye göre veriyi güncelle
            const updatedCar = await Car.findByIdAndUpdate(
              id as string,
              { name, make, colour, code },
              { new: true } // Yenilenmiş veriyi döndür
            );
            res.status(200).json(updatedCar);
        } catch (error) {
            res.status(500).json({ error: 'Server error' });
        }
    } else if (req.method === 'DELETE') {
        try {
            const { id } = req.query;
            const deletedCar = await Car.findByIdAndDelete(id as string);
            res.status(200).json(deletedCar);
        } catch (error) {
            res.status(500).json({ error: 'Server error' });
        }
  }
}
