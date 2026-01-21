import { z } from "zod";
const AddBoySchema=z.object({
     name: z.string().min(2),
     lastName: z.string().min(2),
     dateOfBirth: z.string(),
     city:z.string(),
     phoneForSuggestions: z.string().min(9).max(10),
     emailSuggestions: z.string().email(),
     fatherName: z.string().min(2),
     motherName: z.string().min(2),
     height: z.number().min(100).max(250),
     status: z.enum(['אלמן','מאורס', 'רווק', 'מבוטל', 'גרוש']),
     pictureUrl: z.string(),
     resumeUrl: z.string(),
     
})
export default AddBoySchema
