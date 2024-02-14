import mongoose from "mongoose";


export const connection = async () => {
    try {
        const connec = await mongoose.connect(process.env.MONGO_URL)
        console.log("Connect", connec.connection.host)
    } catch (error) {
        console.log("error while connecting database", error)
    }
}