import { Router } from 'express';
import contactsRouter from './contacts.js';
import authRouter from './auth.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const homePage = (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Welcome to Contact App for GOIT hw-mongodb with node.js!',
  });
};

const router = Router();

router.get('/', ctrlWrapper(homePage));

router.use('/contacts', contactsRouter);
router.use('/auth', authRouter);

export default router;
