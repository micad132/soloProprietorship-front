import {z} from 'zod';
import {RegisterType} from "../types/authorization";

const RegistrationSchema = z.object({
    name: z.string().min(5).max(20),
    surname: z.string().min(5).max(15),
    email: z.string().email(),
    password: z.string().min(5).max(20),
    confirmPassword: z.string().min(5).max(20),
    postalCode: z.string().regex(/^\d{2}-\d{3}$/),
    cityName: z.string().min(5).max(20),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match"
});


export const validateRegister = (registerValues: RegisterType) => {
    try {
        RegistrationSchema.parse(registerValues);
    } catch (e: any) {
        if (e instanceof z.ZodError) {
            console.log(e.issues);
        }
    }
}

