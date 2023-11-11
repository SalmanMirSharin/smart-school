import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux'
import { store } from './rtkq/app/store'
const queryClient = new QueryClient();



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
    <App /> 
    </Provider>
  </QueryClientProvider>
  </React.StrictMode>
);

export default root;