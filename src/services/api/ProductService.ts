import axios from 'axios'
import { type DeletingType, type ProductAddRequestType, type ProductEditRequestType } from '../../types/RequestTypes'
import { API_REQUEST_PATH } from '../../utils/GlobalVariables'
import { type ProductResponseType } from '../../types/ResponseTypes'

axios.defaults.withCredentials = true

const PRODUCT_URL = `${API_REQUEST_PATH}/product`

const ProductService = {

  addNewProduct: async (data: ProductAddRequestType) => {
    return await axios({
      method: 'POST',
      url: PRODUCT_URL,
      data,
      headers: {}
    })
  },

  getAllProducts: async (): Promise<ProductResponseType[]> => {
    const data = await axios.get(`${PRODUCT_URL}/products`)
    return data.data
  },

  deleteProduct: async (deletingData: DeletingType) => {
    const res = await axios.delete(PRODUCT_URL, { params: { idProduct: deletingData.id, verifyCode: deletingData.code } })
    return res.data
  },

  editProduct: async (editProduct: ProductEditRequestType) => {
    return await axios({
      method: 'PATCH',
      url: `${PRODUCT_URL}`,
      data: editProduct
    })
  }

}

export default ProductService
