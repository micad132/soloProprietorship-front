import { type CustomerAddRequestType, type CustomerEditRequestType, type DeletingType } from '../../types/RequestTypes'
import axios from 'axios'
import { API_REQUEST_PATH } from '../../utils/GlobalVariables'
import { type CustomerType } from '../../types/ResponseTypes'

const CUSTOMER_URL = `${API_REQUEST_PATH}/customer`

const CustomerService = {

  addCustomer: async (data: CustomerAddRequestType) =>
    await axios({
      method: 'POST',
      url: CUSTOMER_URL,
      data,
      headers: {}
    }),

  getAllCustomers: async (): Promise<CustomerType[]> => {
    const data = await axios.get(`${CUSTOMER_URL}/user`)
    return data.data
  },

  editCustomer: async (editData: CustomerEditRequestType) => await axios({
    method: 'PATCH',
    url: CUSTOMER_URL,
    data: editData
  }),

  deleteCustomer: async (data: DeletingType) => {
    return await axios.delete(CUSTOMER_URL, { params: { idCustomer: data.id, verifyCode: data.code } })
  }

}

export default CustomerService
