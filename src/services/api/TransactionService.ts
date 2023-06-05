import axios from "axios/index";
import {API_REQUEST_PATH} from "../../utils/GlobalVariables";
import {TransactionAddRequestType} from "../../types/RequestTypes";

const TRANSACTION_URL = `${API_REQUEST_PATH}/transaction`;

const TransactionService = {

    getAllTransactions: async () => {
        const res = await axios.get(`${TRANSACTION_URL}/transactions`, {
            headers: {
                // Authorization: 'Bearer ' + test,
                'Content-Type': 'application/json',
            }
        })
        return res.data;
    },
    addTransaction: async (data: TransactionAddRequestType) => {
        return axios({
            method: 'POST',
            url: TRANSACTION_URL,
            data,
            headers: {},
        })
    }
}