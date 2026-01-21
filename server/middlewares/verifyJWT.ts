import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';

interface CustomRequest extends Request {
  user?: JwtPayload;
}

const verifyJWT = (req: CustomRequest, res: Response, next: NextFunction): void => {
  const authHeader = (req.headers.authorization || req.headers.Authorization) as string;
  
  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }
  
  const token = authHeader.split(' ')[1];
  
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err: Error | null, decoded: any) => {
    if (err) {
      res.status(403).json({ message: 'Forbidden' });
      return;
    }
    req.user = decoded;
    next();
  });
};

export default verifyJWT;