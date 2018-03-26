import { put as dispatch, takeLatest } from 'redux-saga/effects'
import listener, {
  apiHealthSaga,
} from '../../../src/client/redux/sagas/apiHealthSaga'


describe('API Health Saga Test', () => {
  it('listens for correct action fired', () => {
    const gen = listener()
    const step = lastYield => gen.next(lastYield).value
    const constants = [
      'apiHealth/SET_AGENCY_HEALTH',
      'apiHealth/SET_DATABASE_HEALTH',
      'apiHealth/SET_PING_HEALTH',
      'apiHealth/SET_PAPI_HEALTH',
      'apiHealth/SET_RULES_HEALTH',
    ]

    expect(step()).toEqual(takeLatest(constants, apiHealthSaga))
  })


  it('Fetches the health JSON from the API and calls the reducers', () => {
    const gen = apiHealthSaga()
    const step = lastYield => gen.next(lastYield).value

    const networkReturn = {
      error: false,
      payload: {
        agency: true,
        database: false,
        ping: true,
        papi: true,
        rules: true,
      },
    }

    const setAgencyHealth = {
      type: 'apiHealth/SET_AGENCY_HEALTH',
      payload: true,
    }

    const setDatabaseHealth = {
      type: 'apiHealth/SET_DATABASE_HEALTH',
      payload: false,
    }

    const setPingHealth = {
      type: 'apiHealth/SET_PING_HEALTH',
      payload: true,
    }

    const setPapiHealth = {
      type: 'apiHealth/SET_PAPI_HEALTH',
      payload: true,
    }

    const setRulesHealth = {
      type: 'apiHealth/SET_RULES_HEALTH',
      payload: true,
    }

    step()
    expect(step(networkReturn)).toEqual(dispatch(setAgencyHealth))
    expect(step()).toEqual(dispatch(setDatabaseHealth))
    expect(step()).toEqual(dispatch(setPingHealth))
    expect(step()).toEqual(dispatch(setPapiHealth))
    expect(step()).toEqual(dispatch(setRulesHealth))
    expect(gen.next().done).toBe(true)
  })


  it('Properly responds to network error, sending all falses', () => {
    const gen = apiHealthSaga()
    const step = lastYield => gen.next(lastYield).value

    const networkReturn = {
      error: true,
      payload: {
        agency: true,
        database: false,
        ping: true,
        papi: true,
        rules: true,
      },
    }

    const setAgencyHealth = {
      type: 'apiHealth/SET_AGENCY_HEALTH',
      payload: false,
    }

    const setDatabaseHealth = {
      type: 'apiHealth/SET_DATABASE_HEALTH',
      payload: false,
    }

    const setPingHealth = {
      type: 'apiHealth/SET_PING_HEALTH',
      payload: false,
    }

    const setPapiHealth = {
      type: 'apiHealth/SET_PAPI_HEALTH',
      payload: false,
    }

    const setRulesHealth = {
      type: 'apiHealth/SET_RULES_HEALTH',
      payload: false,
    }

    step()
    expect(step(networkReturn)).toEqual(dispatch(setAgencyHealth))
    expect(step()).toEqual(dispatch(setDatabaseHealth))
    expect(step()).toEqual(dispatch(setPingHealth))
    expect(step()).toEqual(dispatch(setPapiHealth))
    expect(step()).toEqual(dispatch(setRulesHealth))
    expect(gen.next().done).toBe(true)
  })
})
