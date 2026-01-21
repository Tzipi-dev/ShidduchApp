import { Request, Response } from 'express';
import Girl from '../models/Girl'; // המודל שלך של Girl

/**
 * CREATE – יצירת בת חדשה
 */
export const createGirl = async (req: Request, res: Response) => {
  try {
    const girl = new Girl(req.body);
    const savedGirl = await girl.save();
    res.status(201).json(savedGirl);
  } catch (error: any) {
    res.status(400).json({
      message: 'Failed to create girl',
      error: error.message
    });
  }
};

/**
 * READ – כל הבנות
 */
export const getAllGirls = async (_req: Request, res: Response) => {
  try {
    const girls = await Girl.find()
      .populate('suggestionsNotRellevant')
      .populate('suggestionCurrent')
      .populate('meetInPast');

    res.json(girls);
  } catch (error: any) {
    res.status(500).json({
      message: 'Failed to fetch girls',
      error: error.message
    });
  }
};

/**
 * READ – לפי ID
 */
export const getGirlById = async (req: Request, res: Response) => {
  try {
    const girl = await Girl.findById(req.params.id)
      .populate('suggestionsNotRellevant')
      .populate('suggestionCurrent')
      .populate('meetInPast');

    if (!girl) {
      return res.status(404).json({ message: 'Girl not found' });
    }

    res.json(girl);
  } catch (error: any) {
    res.status(400).json({
      message: 'Invalid ID',
      error: error.message
    });
  }
};

/**
 * UPDATE – עדכון בת
 */
export const updateGirl = async (req: Request, res: Response) => {
  try {
    const updatedGirl = await Girl.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedGirl) {
      return res.status(404).json({ message: 'Girl not found' });
    }

    res.json(updatedGirl);
  } catch (error: any) {
    res.status(400).json({
      message: 'Failed to update girl',
      error: error.message
    });
  }
};

/**
 * DELETE – מחיקת בת
 */
export const deleteGirl = async (req: Request, res: Response) => {
  try {
    const deletedGirl = await Girl.findByIdAndDelete(req.params.id);

    if (!deletedGirl) {
      return res.status(404).json({ message: 'Girl not found' });
    }

    res.json({ message: 'Girl deleted successfully' });
  } catch (error: any) {
    res.status(400).json({
      message: 'Failed to delete girl',
      error: error.message
    });
  }
};
