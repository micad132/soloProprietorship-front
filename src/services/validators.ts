import {z} from 'zod';
import {LoginType, RegisterType} from "../types/Authorization";
import {sanitize} from "dompurify";



const RegistrationSchema = z.object({
    name: z.string().min(5).max(20).refine((val) => !val.includes('&') && !val.includes('<'), {
        message: 'Forbidden chars!',
        path: ['forbiddenName']
    }),
    surname: z.string().min(5).max(15),
    email: z.string().email(),
    password: z.string().min(5).max(20),
    confirmPassword: z.string().min(5).max(20),
    postalCode: z.string().regex(/^\d{2}-\d{3}$/),
    cityName: z.string().min(5).max(20),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match"
});


const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(5).max(20),
})


const AddingUserSchema = z.object({
    name: z.string().min(5).max(15),
    surname: z.string().min(5).max(15),
    cityName: z.string().min(5).max(20),
    email: z.string().email(),
    phoneNumber: z.string().min(5).max(15),
})


export const validateRegister = (registerValues: RegisterType) => {
    // try {
    //     RegistrationSchema.parse(registerValues);
    // } catch (e: any) {
    //     if (e instanceof z.ZodError) {
    //         console.log(e.issues);
    //     }
    // }
    return RegistrationSchema.safeParse(registerValues);
}

export const validateLogin = (loginValues: LoginType) => {
    return LoginSchema.safeParse(loginValues);
}

export const sanitizeData = (value: string): string => sanitize(value, { USE_PROFILES: { html: false }});

// export const validateLogin = (loginValues: LoginType) => {
//     try {
//         LoginSchema.parse(loginValues);
//     } catch (e: any) {
//         if(e instanceof z.ZodError) {
//             throw e;
//         }
//     }
// }

