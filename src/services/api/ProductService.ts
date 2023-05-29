import axios from "axios";
import {ProductAddRequestType} from "../../types/RequestTypes";
import {API_REQUEST_PATH} from "../../utils/GlobalVariables";

axios.defaults.withCredentials = true;

const ProductService = {

    addNewProduct: (data: ProductAddRequestType) => {
        return axios({
            method: 'POST',
            url: `${API_REQUEST_PATH}/product/`,
            data,
            headers: {},
        })
    },

    getAllProducts: async (token?: string) => {
        const test = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkYW5pZWwiLCJpYXQiOjE2ODUzODQ3ODgsImV4cCI6MTY4NTQ3MTE4OH0.LzY7u5GixAhnjaqYgpD2jIXQWHmH3SzJurl5BzrywMNtHzcpFY-h1Bxs4CX0ZREOva4kON9lKBN-6cNZl5Nz4g';
        const res = await axios.get(`${API_REQUEST_PATH}/product/products`, {
            headers: {
                 // Authorization: 'Bearer ' + test,
                'Content-Type': 'application/json',
            }
        })
        console.log('HALO');
       // const res = await axios({
       //      method: 'GET',
       //      url: `${API_REQUEST_PATH}/product/products`,
       //      data: null,
       //      headers: {
       //          Authorization: `Bearer ${token}`
       //      }
       //  })
        return res.data;
    },

}

export default ProductService;
