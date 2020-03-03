import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SteckLogSign} from "./navigation/AppSteck"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware } from "redux"
import { authReducer } from "./store/reducers/authReducer"
import thunk from 'redux-thunk';
import firebase from "./congif/fireBase"
import {styles} from './style.js'
import { TabSecondSteck } from "./navigation/SecondSteck"
import {Stecks} from "./src/Project"


const rootReducer = combineReducers({
  authReducer: authReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))




export default function App() {
  return (
    <Provider store={store}>
      {/* <SteckLogSign/> */}
      <Stecks/>
    </Provider>
  )
}
