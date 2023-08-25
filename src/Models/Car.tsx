import { Schema, model, models } from "mongoose";

const carSchema = new Schema({
    name: String,
    make: String,
    colour: String,
    code: String,
}, { timestamps: true });

const Car = models.Car || model("Car", carSchema);

export default Car;
