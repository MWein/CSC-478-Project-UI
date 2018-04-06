import createSagaMiddleware from 'redux-saga'
import os from 'os'
import sagas from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const makeReduxMiddleware = () => {
  const middlewares = [ sagaMiddleware ]


  if (os.hostname() === 'localhost') {
    const { createLogger } = require('redux-logger') // eslint-disable-line
    const loggerMiddleware = createLogger({
      collapsed: true,
      duration: true,
      timestamp: true,
      logErrors: true,
    })

    middlewares.push(loggerMiddleware)
  }


  return middlewares
}

export const runSagas = () => sagaMiddleware.run(sagas)

export default makeReduxMiddleware()
