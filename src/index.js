import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import AppContainer from './appContainer';
import store from './redux/store';
import { Provider } from 'react-redux';

if (!localStorage.getItem('countBuy')){
  localStorage.setItem('countBuy',0)
}
if (!localStorage.getItem('countWish')){
  localStorage.setItem('countWish',0)
}

//wishList basketList

if (!localStorage.getItem('wishList')){
  localStorage.setItem('wishList', JSON.stringify([]))
}
if (!localStorage.getItem('basketList')){
  localStorage.setItem('basketList', JSON.stringify([]))
}

if (!localStorage.getItem('viewType')){
  localStorage.setItem('viewType','table')
}

export const ViewContext = createContext(undefined)
const ViewProvider = () => {
  const viewType = localStorage.getItem('viewType')
  return (
    <ViewContext.Provider value={viewType}>
      <Provider store={store}>
            <AppContainer/>
        </Provider>
    </ViewContext.Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ViewProvider/>    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
