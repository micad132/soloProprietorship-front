import axios from "axios";
import {ProductAddRequestType} from "../../types/RequestTypes";
import {API_REQUEST_PATH} from "../../utils/GlobalVariables";

const ProductService = {

    addNewProduct: (data: ProductAddRequestType) => {
        return axios({
            method: 'POST',
            url: `${API_REQUEST_PATH}/product/`,
            data,
            headers: {},
        })
    },

    getAllProducts: async () => {
        const res = await axios.get(`${API_REQUEST_PATH}/product/user`)
        return res.data;
    },

}

export default ProductService;
