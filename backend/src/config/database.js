import mongoose from "mongoose"

const connectDB = async () => {
    try {
          console.log("URI:", process.env.MONGODB_URI); // DEBUG

        const connectionInstance = await mongoose.connect
        (`${process.env.MONGODB_URI}`)
        console.log(`MongooDB connected!!!
            ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log('MongoDB connection failed');
        process.exit(1)
        
    }
} 


export default connectDB