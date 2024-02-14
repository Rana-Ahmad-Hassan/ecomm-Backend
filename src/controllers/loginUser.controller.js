import { User } from "../models/user.model.js";
import { bcryptComparePassword } from "../utils/authUser.js";
import jwt from "jsonwebtoken";

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ status: "error", message: "User is not registered." });
        }


        const isPasswordMatch = await bcryptComparePassword(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ status: "error", message: "Invalid credentials." });
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            message: "Login successful",
            token
        });
    } catch (error) {
        console.error("Error occurred while logging in", error);
        res.status(500).json({
            status: "error",
            message: "An error occurred during the login process."
        });
    }
};
