import { CorsOptions } from 'cors';

const allowedOrigins: string[] = [
  'http://localhost:5173', 
  'http://localhost:8000', 
  'http://localhost:7000', 
  'http://localhost:5000',
  'http://localhost:3000' 
];

const corsOptions: CorsOptions = {
  origin: function (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
    if (allowedOrigins.indexOf(origin as string) !== -1 || !origin) { 
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, 
  optionsSuccessStatus: 200
};

export default corsOptions;




