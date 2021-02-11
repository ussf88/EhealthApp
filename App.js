import React, { useState } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font';
import ReduxThunk from 'redux-thunk';
import { Ionicons } from '@expo/vector-icons';
import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import ordersReducer from './store/reducers/orders';
import authReducer from './store/reducers/auth';
import NavigationContainer from './navigation/NavigationContainer';
console.disableYellowBox = true; 
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer
});
console.log("====================================================================================");
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
window.store = store;


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  );
}
