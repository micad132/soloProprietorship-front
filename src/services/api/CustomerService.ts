import {CustomerAddRequestType} from "../../types/RequestTypes";
import axios from "axios";
import {API_REQUEST_PATH} from "../../utils/GlobalVariables";
import {CustomerType} from "../../types/ResponseTypes";

const CUSTOMER_URL = `${API_REQUEST_PATH}/customer`;

const CustomerService = {

    addCustomer: (data: CustomerAddRequestType) =>
        axios({
            method: 'POST',
            url: CUSTOMER_URL,
            data,
            headers: {},
        }),

    getAllCustomers: async (): Promise<CustomerType[]> => {
        const data = await axios.get(`${CUSTOMER_URL}/user`);
        console.log('DATA DATA', data.data);
        return data.data;
    }

}

export default CustomerService;