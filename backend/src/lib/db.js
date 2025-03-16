// import mongoose from "mongoose";

// export const connectDB = async()=>{
//     try{
//         const conn = await mongoose.connect(process.env.MONGODB_URI);
//         console.log(`MongoDB connected: ${conn.connection.host}`);
//     }catch(error){
// console.log("MongoDB connection error:", error);
//     }
// }; 

import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000 // Timeout after 5s instead of waiting forever
        });

        console.log(`✅ MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("❌ MongoDB connection error:", error.message);
        process.exit(1);
    }
};
