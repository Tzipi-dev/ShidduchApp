import { Router } from 'express';
import {
  createBoy,
  getAllBoys,
  getBoyById,
  updateBoy,
  deleteBoy
} from '../controllers/boyscController';

const router = Router();

router.post('/', createBoy);
router.get('/', getAllBoys);
router.get('/:id', getBoyById);
router.put('/:id', updateBoy);
router.delete('/:id', deleteBoy);

export default router;
