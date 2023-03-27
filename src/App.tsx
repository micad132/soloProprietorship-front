import React from 'react';
import './App.css';
import Layout from "./layout/Layout";
import routes from "./routes";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
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
