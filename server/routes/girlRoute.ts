import { Router } from 'express';
import {
  createGirl,
  getAllGirls,
  getGirlById,
  updateGirl,
  deleteGirl
} from '../controllers/girlsController';

const router = Router();

router.post('/', createGirl);
router.get('/', getAllGirls);
router.get('/:id', getGirlById);
router.put('/:id', updateGirl);
router.delete('/:id', deleteGirl);

export default router;
