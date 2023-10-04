import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Reset } from "styled-reset";
import { Global } from "@emotion/react";
import { Common } from './styles/Global/Common';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Global styles={Common}/>
      <Reset/>
      <App />
    </BrowserRouter>  
  </QueryClientProvider>
);

reportWebVitals();
