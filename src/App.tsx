import React, {useEffect} from 'react';
import './App.css';
import Layout from "./layout/Layout";
import routes from "./routes";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useAppDispatch, useAppSelector} from "./utils/hooks";
import {fetchingAllProductsThunk, getAllProducts} from "./store/reducers/productReducer";

function App() {

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
  );
}

export default App;
