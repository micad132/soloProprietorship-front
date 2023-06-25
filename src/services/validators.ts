import { z } from 'zod'
import { type LoginType, type RegisterCreationType } from '../types/Authorization'
import { sanitize } from 'dompurify'
import {
  type CustomerAddRequestType,
  type JobAddRequestType,
  type ProductAddRequestType,
  type TransactionAddRequestType
} from '../types/RequestTypes'
import { type SafeParseReturnType } from 'zod/lib/types'

const isLettersOnly = (val: string): boolean => /^[a-zA-Z]+$/.test(val)
const isDigitsOnly = (val: string): boolean => /^[0-9]+$/.test(val)
const isLettersOrDigitsOnly = (val: string): boolean => /^[a-zA-Z0-9]+$/.test(val)

const RegistrationSchema = z.object({
  username: z.string().min(5).max(30).refine(isLettersOrDigitsOnly),
  userFirstName: z.string().min(5).max(20).refine((val) => !val.includes('&') && !val.includes('<'), {
    message: 'Forbidden chars!',
    path: ['forbiddenName']
  }),
  userSecondName: z.string().min(5).max(15),
  email: z.string().email(),
  password: z.string().min(5).max(20),
  confirmPassword: z.string().min(5).max(20),
  postalCode: z.string().regex(/^\d{2}-\d{3}$/),
  phoneNumber: z.string().min(9).max(9).refine(isDigitsOnly),
  pesel: z.string().min(11).max(11).refine(isDigitsOnly),
  address: z.string().min(5).max(20)
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match"
})

const LoginSchema = z.object({
  nick: z.string().min(5).max(30).refine(isLettersOrDigitsOnly),
  password: z.string().min(5).max(20).refine(isLettersOrDigitsOnly),
  code: z.string()
})
// .refine((value) => /^[0-9]+$/.test(value))

const AddingUserSchema = z.object({
  name: z.string().min(5).max(15).refine(isLettersOrDigitsOnly),
  surName: z.string().min(5).max(15).refine(isLettersOrDigitsOnly),
  address: z.string().min(5).max(20).refine(isLettersOrDigitsOnly),
  email: z.string().email(),
  phoneNumber: z.string().min(9).max(9)
})

const AddingProductSchema = z.object({
  name: z.string().min(5).max(30).refine(isLettersOnly),
  price: z.number().refine(val => val > 0),
  weight: z.number().refine(val => val > 0)
})

const AddingJobSchema = z.object({
  name: z.string().min(5).max(20).refine(isLettersOnly),
  price: z.number().refine(val => val > 0)
})

const AddingOrderSchema = z.object({
  price: z.number().refine(val => val > 0),
  description: z.string().min(5).max(30).refine((val) => !isDigitsOnly(val)),
  idCustomer: z.string().min(1).max(1),
  idOfProducts: z.array(z.string()).min(1),
  idOfJobs: z.array(z.string()).min(1)
})

const DeletingCodeSchema = z.string().min(6).max(6).refine(isDigitsOnly)

export const validateRegister = (registerValues: RegisterCreationType): SafeParseReturnType<any, any> => {
  // try {
  //     RegistrationSchema.parse(registerValues);
  // } catch (e: any) {
  //     if (e instanceof z.ZodError) {
  //         console.log(e.issues);
  //     }
  // }
  return RegistrationSchema.safeParse(registerValues)
}

export const validateLogin = (loginValues: LoginType): SafeParseReturnType<any, any> => {
  // loginValues.code2FA = Number(loginValues.code2FA);
  return LoginSchema.safeParse(loginValues)
}

export const validateAddProduct = (values: ProductAddRequestType): SafeParseReturnType<any, any> => {
  const properData = {
    name: values.name,
    price: Number(values.price),
    weight: Number(values.weight)
  }
  return AddingProductSchema.safeParse(properData)
}

export const validateAddJob = (values: JobAddRequestType): SafeParseReturnType<any, any> => {
  const properData = {
    name: values.name,
    price: Number(values.price)
  }
  return AddingJobSchema.safeParse(properData)
}

export const validateAddUser = (values: CustomerAddRequestType): SafeParseReturnType<any, any> => {
  return AddingUserSchema.safeParse(values)
}

export const validateAddOrder = (values: TransactionAddRequestType): SafeParseReturnType<any, any> => {
  const properData = {
    price: Number(values.price),
    description: values.description,
    idCustomer: String(values.idCustomer),
    idOfJobs: values.idOfJobs.map(value => value.toString()),
    idOfProducts: values.idOfProducts.map(value => value.toString())
  }
  return AddingOrderSchema.safeParse(properData)
}

export const validateCode = (code: string): SafeParseReturnType<any, any> => DeletingCodeSchema.safeParse(code)

export const sanitizeData = (value: string): string => sanitize(value, { USE_PROFILES: { html: false } })
