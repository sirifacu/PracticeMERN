import express from 'express';
import UserController from '../controllers/UserController'

const router = express.Router();

router.get('/list', UserController.list)
router.post('/add', UserController.add)
router.delete('/delete/:id', UserController.delete)

export default router