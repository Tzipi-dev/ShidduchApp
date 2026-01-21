import { Request, Response } from 'express';
import Matchmaker from '../models/Matchmaker';

/**
 * CREATE – יצירת שדכן חדש
 */
export const createMatchmaker = async (req: Request, res: Response) => {
  try {
    const matchmaker = new Matchmaker(req.body);
    const savedMatchmaker = await matchmaker.save();
    res.status(201).json(savedMatchmaker);
  } catch (error: any) {
    res.status(400).json({
      message: 'Failed to create matchmaker',
      error: error.message
    });
  }
};

/**
 * READ – כל השדכנים
 */
export const getAllMatchmakers = async (_req: Request, res: Response) => {
  try {
    const matchmakers = await Matchmaker.find()
      .populate('boysList')
      .populate('girlsList');

    res.json(matchmakers);
  } catch (error: any) {
    res.status(500).json({
      message: 'Failed to fetch matchmakers',
      error: error.message
    });
  }
};

/**
 * READ – לפי ID
 */
export const getMatchmakerById = async (req: Request, res: Response) => {
  try {
    const matchmaker = await Matchmaker.findById(req.params.id)
      .populate('boysList')
      .populate('girlsList');

    if (!matchmaker) {
      return res.status(404).json({ message: 'Matchmaker not found' });
    }

    res.json(matchmaker);
  } catch (error: any) {
    res.status(400).json({
      message: 'Invalid ID',
      error: error.message
    });
  }
};

/**
 * UPDATE – עדכון שדכן
 */
export const updateMatchmaker = async (req: Request, res: Response) => {
  try {
    const updatedMatchmaker = await Matchmaker.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedMatchmaker) {
      return res.status(404).json({ message: 'Matchmaker not found' });
    }

    res.json(updatedMatchmaker);
  } catch (error: any) {
    res.status(400).json({
      message: 'Failed to update matchmaker',
      error: error.message
    });
  }
};

/**
 * DELETE – מחיקת שדכן
 */
export const deleteMatchmaker = async (req: Request, res: Response) => {
  try {
    const deletedMatchmaker = await Matchmaker.findByIdAndDelete(req.params.id);

    if (!deletedMatchmaker) {
      return res.status(404).json({ message: 'Matchmaker not found' });
    }

    res.json({ message: 'Matchmaker deleted successfully' });
  } catch (error: any) {
    res.status(400).json({
      message: 'Failed to delete matchmaker',
      error: error.message
    });
  }
};
