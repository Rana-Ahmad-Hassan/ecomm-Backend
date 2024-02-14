import { Router } from 'express';
import { registerController } from '../controllers/registerUser.controller.js';
import { loginController } from '../controllers/loginUser.controller.js';

const router = Router(); // Use const for defining the router

// Define the route for registering a user
router.post('/registerUser', registerController);
router.post("/loginUser", loginController)

export default router; 
