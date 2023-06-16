import {CustomerAddRequestType} from "../../types/RequestTypes";
import axios from "axios";
import {API_REQUEST_PATH} from "../../utils/GlobalVariables";

const CUSTOMER_URL = `${API_REQUEST_PATH}/customer`;

const CustomerService = {

    addCustomer: (data: CustomerAddRequestType) =>
        axios({
            method: 'POST',
            url: CUSTOMER_URL,
            data,
            headers: {},
        })

}

export default CustomerService;