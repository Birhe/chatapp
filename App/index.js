import React from 'react'
import { Provider } from 'react-redux'

import { configureStore } from './store'

import Upload from './components/ChatApp'

const store = configureStore()

const App = () =>
  <Provider store={store}>
    <Upload />
  </Provider>

export default App
