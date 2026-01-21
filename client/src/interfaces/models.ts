
export enum StatusBoy {
  רווק = 'רווק',
  נשוי = 'נשוי',
  גרוש = 'גרוש',
  אלמן = 'אלמן',
  מאורס = 'מאורס'
}
export enum StatusGirl {
  רווקה = 'רווקה',
  נשואה = 'נשואה',
  גרושה = 'גרושה',
  אלמנה = 'אלמנה',
  מאורסת = 'מאורסת'
}
export interface Girl {
  _id?: string; // אופציונלי, כי נוצרת אחרי שמירה בבסיס
  name: string;
  lastName: string;
  phoneForSuggestions: string;
  emailSuggestions: string;
  dateOfBirth: Date;
  city: string;
  status: StatusGirl;
  height: number;
  fatherName: string;
  motherName: string;
  YeshivaName: string;
  suggestionsNotRellevant: Boy[]; 
  suggestionCurrent: Boy[];
  meetInPast: Boy[];
}
export interface Boy {
  _id?: string; 
  name: string;
  lastName: string;
  phoneForSuggestions: string;
  emailSuggestions: string;
  dateOfBirth: Date;
  city: string;
  status: StatusGirl;
  height: number;
  fatherName: string;
  motherName: string;
  YeshivaName: string;
  suggestionsNotRellevant: Girl[]; 
  suggestionCurrent: Girl[];
  meetInPast: Girl[];
}
export interface Matchmaker {
  _id?: string;              
  name: string;
  password: string;
  phone: string;
  email: string;
  boysList: Boy[];
  girlsList: Girl[];
}

