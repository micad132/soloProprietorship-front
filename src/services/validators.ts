import {z} from 'zod';
import {LoginType, RegisterCreationType, RegisterType} from "../types/Authorization";
import {sanitize} from "dompurify";
import {
    CustomerAddRequestType,
    JobAddRequestType,
    ProductAddRequestType,
    TransactionAddRequestType
} from "../types/RequestTypes";



const RegistrationSchema = z.object({
    username: z.string().min(5).max(30).refine(val => /^[a-zA-Z0-9]+$/.test(val)),
    userFirstName: z.string().min(5).max(20).refine((val) => !val.includes('&') && !val.includes('<'), {
        message: 'Forbidden chars!',
        path: ['forbiddenName']
    }),
    userSecondName: z.string().min(5).max(15),
    email: z.string().email(),
    password: z.string().min(5).max(20),
    confirmPassword: z.string().min(5).max(20),
    postalCode: z.string().regex(/^\d{2}-\d{3}$/),
    phoneNumber: z.string().min(9).max(9).refine(val => /^[0-9]+$/.test(val)),
    address: z.string().min(5).max(20),
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
    name: z.string().min(5).max(15).refine(val => /^[a-zA-Z0-9]+$/.test(val)),
    surName: z.string().min(5).max(15).refine(val => /^[a-zA-Z0-9]+$/.test(val)),
    address: z.string().min(5).max(20).refine(val => /^[a-zA-Z0-9]+$/.test(val)),
    email: z.string().email(),
    phoneNumber: z.string().min(9).max(9),
})

const AddingProductSchema = z.object({
    name: z.string().min(5).max(30),
    price: z.number().refine(val => val > 0),
    weight: z.number().refine(val => val > 0),
})

const AddingJobSchema = z.object({
    name: z.string().min(5).max(20).refine(val => /^[a-zA-Z]+$/.test(val)),
    price: z.number().refine(val => val > 0)
})

const AddingOrderSchema = z.object({
    price: z.number().refine(val => val > 0),
    description: z.string().min(5).max(30).refine(val => !/^[0-9]+$/.test(val)),
    idCustomer: z.string().min(1).max(1),
    idOfProducts: z.array(z.string()).min(1),
    idOfJobs: z.array(z.string()).min(1),
})

const DeletingCodeSchema = z.string().min(6).max(6).refine(val => /^[0-9]+$/.test(val))

export const validateRegister = (registerValues: RegisterCreationType) => {
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

export const validateAddProduct = (values: ProductAddRequestType) => {
    const properData = {
        name: values.name,
        price: Number(values.price),
        weight: Number(values.weight),
    }
    return AddingProductSchema.safeParse(properData);
}

export const validateAddJob = (values: JobAddRequestType) => {
    const properData = {
        name: values.name,
        price: Number(values.price)
    }
    return AddingJobSchema.safeParse(properData);
}

export const validateAddUser = (values: CustomerAddRequestType) => {
    return AddingUserSchema.safeParse(values);
}

export const validateAddOrder = (values: TransactionAddRequestType) => {
    const properData = {
        price: Number(values.price),
        description: values.description,
        idCustomer: String(values.idCustomer),
        idOfJobs: values.idOfJobs.map(value => value.toString()),
        idOfProducts: values.idOfProducts.map(value => value.toString())
    }
    console.log(properData);
    return AddingOrderSchema.safeParse(properData);
}

export const validateCode = (code: string) => DeletingCodeSchema.safeParse(code);

export const sanitizeData = (value: string): string => sanitize(value, { USE_PROFILES: { html: false }});
