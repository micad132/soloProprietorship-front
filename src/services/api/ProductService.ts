import axios from "axios";
import {DeletingType, ProductAddRequestType, ProductEditRequestType} from "../../types/RequestTypes";
import {API_REQUEST_PATH} from "../../utils/GlobalVariables";
import {ProductResponseType} from "../../types/ResponseTypes";

axios.defaults.withCredentials = true;

const PRODUCT_URL = `${API_REQUEST_PATH}/product`;

const ProductService = {

    addNewProduct: (data: ProductAddRequestType) => {
        return axios({
            method: 'POST',
            url: PRODUCT_URL,
            data,
            headers: {},
        })
    },

    getAllProducts: async (token?: string): Promise<ProductResponseType[]> => {
        const res = await axios.get(`${PRODUCT_URL}/products`, {
            headers: {
                 // Authorization: 'Bearer ' + test,
                'Content-Type': 'application/json',
            }
        })
        return res.data;
    },

    deleteProduct: async (deletingData: DeletingType) => {
        const res = await axios.delete(PRODUCT_URL);
        return res.data;
    },

    editProduct: async (editProduct: ProductEditRequestType) => {
        return axios({
            method: 'PUT',
            url: `${PRODUCT_URL}`,
            data: editProduct,
        })
    }

}

export default ProductService;
