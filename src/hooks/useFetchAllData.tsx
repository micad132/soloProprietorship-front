import { useEffect } from 'react'
import { useAppDispatch } from '../utils/hooks'
import { fetchingAllProductsThunk } from '../store/reducers/productReducer'
import { fetchAllJobsThunk } from '../store/reducers/jobReducer'
import { fetchAllCustomersThunk } from '../store/reducers/customerReducer'
import { fetchingTransactionsThunk } from '../store/reducers/transactionReducer'

const useFetchAllData = (): [] => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    void dispatch(fetchingAllProductsThunk())
    void dispatch(fetchAllJobsThunk())
    void dispatch(fetchAllCustomersThunk())
    void dispatch(fetchingTransactionsThunk())
  }, [dispatch])

  return []
}

export default useFetchAllData
