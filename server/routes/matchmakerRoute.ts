import { Router } from 'express';
import {
  createMatchmaker,
  getAllMatchmakers,
  getMatchmakerById,
  updateMatchmaker,
  deleteMatchmaker
} from '../controllers/matchMakerController';

const router = Router();

router.post('/', createMatchmaker);
router.get('/', getAllMatchmakers);
router.get('/:id', getMatchmakerById);
router.put('/:id', updateMatchmaker);
router.delete('/:id', deleteMatchmaker);

export default router;
