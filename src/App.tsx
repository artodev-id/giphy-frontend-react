import React from 'react';
import { RouterProvider, Routes } from 'react-router-dom';
import Router from './router';
import './App.scss';
import { ThemeProvider } from './components';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';


function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={Router} />
    </ThemeProvider>
   </Provider>
  );
}

export default App;
