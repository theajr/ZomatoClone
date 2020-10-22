/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import { Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { PersistGate } from 'redux-persist/integration/react';

import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import Layout from './components/Layout';
import RestaurantListView from './components/RestaurantListView';
import RestaurantSearch from './components/RestaurantSearch';
import theme from './config/theme';
import store, { persistor } from './store';
import SearchSideBar from './components/SearchSideBar';
import FilterBar from './components/FilterBar';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Layout>
              <RestaurantSearch style={{ marginTop: 30 }} />
              <RestaurantListView />
            </Layout>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default hot(App);
