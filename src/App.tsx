import React from 'react';
import './App.css';
import Layout from "./layout/Layout";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <Layout>
          {routes}
      </Layout>
    </div>
  );
}

export default App;
