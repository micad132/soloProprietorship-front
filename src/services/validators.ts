import {z} from 'zod';
import {LoginType, RegisterType} from "../types/Authorization";
import {sanitize} from "dompurify";
import {ProductAddRequestType} from "../types/RequestTypes";



const RegistrationSchema = z.object({
    nick: z.string().min(5).max(30).refine(val => /^[a-zA-Z0-9]+$/.test(val)),
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
    nick: z.string().min(5).max(30).refine(val => /^[a-zA-Z0-9]+$/.test(val)),
    password: z.string().min(5).max(20).refine(val => /^[a-zA-Z0-9]+$/.test(val)),
    code: z.string(),
})
    // .refine((value) => /^[0-9]+$/.test(value))

const AddingUserSchema = z.object({
    name: z.string().min(5).max(15),
    surname: z.string().min(5).max(15),
    cityName: z.string().min(5).max(20),
    email: z.string().email(),
    phoneNumber: z.string().min(5).max(15),
})

const AddingProductSchema = z.object({
    name: z.string().min(5).max(30),
    price: z.string().refine(val => {
        const parsedValue = parseFloat(val);
        return parsedValue >= 0 && /^[0-9.]+$/.test(val);
    }),
    weight: z.string().refine(val => {
        const parsedValue = parseFloat(val);
        return parsedValue >= 0 && /^[0-9.]+$/.test(val);
    }),
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
    // loginValues.code2FA = Number(loginValues.code2FA);
    return LoginSchema.safeParse(loginValues);
}

export const validateAddProduct = (values: ProductAddRequestType) => AddingProductSchema.safeParse(values);

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

