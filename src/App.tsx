import React, { type ReactElement } from 'react'
import './App.css'
import Layout from './layout/Layout'
import routes from './routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App (): ReactElement {
  // const dispatch = useAppDispatch();
  // const products = useAppSelector(getAllProducts);
  // useEffect(() => {
  //     dispatch(fetchingAllProductsThunk());
  // })
  // console.log('PRODUKTY', products);
  return (

    <div className="App">
      <Layout>
          {routes}
      </Layout>
      <ToastContainer />
    </div>
  )
}

export default App
