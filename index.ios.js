import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import App from './app'

const store = configureStore()

const ReduxingProject = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('ReduxingProject', () => ReduxingProject);
