import { Request, Response } from 'express';
import Boy from '../models/Boy'

/**
 * CREATE
 */
export const createBoy = async (req: Request, res: Response) => {
  try {
    const boy = new Boy(req.body);
    const savedBoy = await boy.save();
    res.status(201).json(savedBoy);
  } catch (error: any) {
    res.status(400).json({
      message: 'Failed to create boy',
      error: error.message
    });
  }
};

/**
 * READ – כל הבנים
 */
export const getAllBoys = async (_req: Request, res: Response) => {
  try {
    const boys = await Boy.find()
      .populate('suggestionsNotRellevant')
      .populate('suggestionCurrent')
      .populate('meetInPast');

    res.json(boys);
  } catch (error: any) {
    res.status(500).json({
      message: 'Failed to fetch boys',
      error: error.message
    });
  }
};

/**
 * READ – לפי ID
 */
export const getBoyById = async (req: Request, res: Response) => {
  try {
    const boy = await Boy.findById(req.params.id)
      .populate('suggestionsNotRellevant')
      .populate('suggestionCurrent')
      .populate('meetInPast');

    if (!boy) {
      return res.status(404).json({ message: 'Boy not found' });
    }

    res.json(boy);
  } catch (error: any) {
    res.status(400).json({
      message: 'Invalid ID',
      error: error.message
    });
  }
};

/**
 * UPDATE
 */
export const updateBoy = async (req: Request, res: Response) => {
  try {
    const updatedBoy = await Boy.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedBoy) {
      return res.status(404).json({ message: 'Boy not found' });
    }

    res.json(updatedBoy);
  } catch (error: any) {
    res.status(400).json({
      message: 'Failed to update boy',
      error: error.message
    });
  }
};

/**
 * DELETE
 */
export const deleteBoy = async (req: Request, res: Response) => {
  try {
    const deletedBoy = await Boy.findByIdAndDelete(req.params.id);

    if (!deletedBoy) {
      return res.status(404).json({ message: 'Boy not found' });
    }

    res.json({ message: 'Boy deleted successfully' });
  } catch (error: any) {
    res.status(400).json({
      message: 'Failed to delete boy',
      error: error.message
    });
  }
};
