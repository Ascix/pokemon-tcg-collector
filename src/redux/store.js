import { applyMiddleware, createStore } from 'redux'
import { collectionReducer } from './collection/reducer'
import { composeWithDevTools } from '@redux-devtools/extension';


const localCache = (store) => (next) => (action) => {
    next(action)
    const state = store.getState()
    localStorage.setItem('pokemon-tcg-collector', JSON.stringify(state))
}

export const store = createStore(
    collectionReducer,
    JSON.parse(localStorage.getItem('pokemon-tcg-collector')) || {ownedCards: []},
    composeWithDevTools(applyMiddleware(localCache))
    )