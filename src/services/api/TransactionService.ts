import { API_REQUEST_PATH } from '../../utils/GlobalVariables'
import { type TransactionAddRequestType } from '../../types/RequestTypes'
import axios from 'axios'

const TRANSACTION_URL = `${API_REQUEST_PATH}/transaction`

const TransactionService = {

  getAllTransactions: async () => {
    const res = await axios.get(`${TRANSACTION_URL}/transactions`)
    return res.data
  },
  addTransaction: async (data: TransactionAddRequestType) => {
    return await axios({
      method: 'POST',
      url: TRANSACTION_URL,
      data,
      headers: {}
    })
  },

  getTransaction: async (idTransaction: number) => {
    const res = await axios.get(`${TRANSACTION_URL}`, { params: { idTransaction } })
    return res.data
  }
}

export default TransactionService
