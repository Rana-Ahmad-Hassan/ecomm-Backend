import { User } from "../models/user.model.js";
import { becryptHashPassword } from "../utils/authUser.js";

export const registerController = async (req, res) => {
    try {
        const { name, email, password, location } = req.body;

      
        if (!name || !email || !password || !location) {
            return res.status(400).json({ status: "error", message: "Please provide all required fields: name, email, password, and location." });
        }

      
        const hashPassword = await becryptHashPassword(password);

        
        const user = await User.create({
            name,
            email,
            password: hashPassword,
            location
        });

        // Send success response
        res.status(201).json({
            status: "success",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                location: user.location
            },
        });
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({
            status: "error",
            message: "Server error during user registration."
        });
    }
};
