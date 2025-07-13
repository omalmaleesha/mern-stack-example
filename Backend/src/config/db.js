import mongoose from "mongoose";

const connectDB = async ()=> {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB Connected Succesfully");
    } catch (error) {
        console.error("Error in DB Connection" ,error);
        process.exit(1);
    }
};

export default connectDB;