import { constants as lookupActions } from '../../../src/redux/actions/movieLookupActions'
import reducer from '../../../src/redux/reducers/movieLookupReducer'


const initialState = {
  callbackFunction: null,
  open: false,
  mode: '',
  upc: '',
  copyID: '',
  selectedMovie: {},
  movieList: [],
  newMovieCopy: '',
  selectedCopy: '',
  copiesList: [],
}

describe('Movie Lookup reducer spec', () => {
  it('Exports the default state', () => {
    const actual = reducer()
    expect(actual).toEqual(initialState)
  })

  it('Responds to SET_MODE', () => {
    const action = {
      type: lookupActions.SET_MODE,
      payload: 'edna mode',
    }

    const expected = {
      ...initialState,
      mode: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to OPEN_MOVIE_LOOKUP', () => {
    const action = {
      type: lookupActions.OPEN_MOVIE_LOOKUP,
      payload: null,
    }

    const expected = {
      ...initialState,
      open: true,
      callbackFunction: null,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })


  it('Responds to CLOSE_MOVIE_LOOKUP', () => {
    const action = {
      type: lookupActions.CLOSE_MOVIE_LOOKUP,
      payload: null,
    }

    const mockState = {
      callbackFunction: null,
      mode: 'asdfl;kj',
      open: false,
      upc: 'asdfasdf',
      copyID: 'asdfasdf',
      selectedMovie: {
        title: 'Harry Twotter'
      },
      movieList: [
        'some',
        'list',
      ],
      newMovieCopy: 'asdfasdf',
      selectedCopy: 'asdfasdf',
      copiesList: [
        'hello',
        'goodbye',
      ],
    }

    const expected = {
      ...initialState,
      movieList: mockState.movieList,
      copiesList: mockState.copiesList,
      mode: mockState.mode,
    }

    const actual = reducer(mockState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_UPC', () => {
    const action = {
      type: lookupActions.SET_UPC,
      payload: '564654654654654',
    }

    const expected = {
      ...initialState,
      upc: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_COPY_ID, turns to lowercase', () => {
    const action = {
      type: lookupActions.SET_COPY_ID,
      payload: 'dfsadFdfsAfd',
    }

    const expected = {
      ...initialState,
      copyID: 'dfsadfdfsafd',
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_SELECTED_MOVIE', () => {
    const action = {
      type: lookupActions.SET_SELECTED_MOVIE,
      payload: {
        title: 'Fat and Furious 42',
      },
    }

    const expected = {
      ...initialState,
      selectedMovie: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_MOVIE_LIST', () => {
    const action = {
      type: lookupActions.SET_MOVIE_LIST,
      payload: [
        'movie 1',
        'movie 2',
      ]
    }

    const expected = {
      ...initialState,
      movieList: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_NEW_MOVIE_COPY, converts to lowercase', () => {
    const action = {
      type: lookupActions.SET_NEW_MOVIE_COPY,
      payload: 'ffffffFFFFFFFfffff',
    }

    const expected = {
      ...initialState,
      newMovieCopy: 'ffffffffffffffffff',
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_SELECTED_COPY', () => {
    const action = {
      type: lookupActions.SET_SELECTED_COPY,
      payload: '777444111',
    }

    const expected = {
      ...initialState,
      selectedCopy: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })

  it('Responds to SET_COPIES_LIST', () => {
    const action = {
      type: lookupActions.SET_COPIES_LIST,
      payload: [
        'asdfasdf',
        'dggfdhhjgfh',
      ],
    }

    const expected = {
      ...initialState,
      copiesList: action.payload,
    }

    const actual = reducer(initialState, action)
    expect(actual).toEqual(expected)
  })
})
