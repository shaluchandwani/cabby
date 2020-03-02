import express from 'express';
 import UsersController from '../controllers/signup_controller';
 import { signupValidator } from '../validation/auth.validation';

  const router = express.Router();

  router.post('/signup', signupValidator, UsersController.signUp);


export default router;
