import mongoose from "mongoose";

const mongodbConntect = async () => {
    try {
        await mongoose.connect(`${process.env.NEXT_PUBLIC_MONGODB_URI}/${process.env.NEXT_PUBLIC_MONGODB_DB}`)
       
        console.log("DB connected");
    } catch (error) {
        console.log("DB Erros:",error)
    }
}

export default mongodbConntect;


