import { type CustomerAddRequestType, type CustomerEditRequestType } from '../../types/RequestTypes'
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
    console.log('DATA DATA', data.data)
    return data.data
  },

  editCustomer: async (editData: CustomerEditRequestType) => await axios({
    method: 'PATCH',
    url: CUSTOMER_URL,
    data: editData
  })

}

export default CustomerService
