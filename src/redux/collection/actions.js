export const ADD_CARD = 'collection/ADD_CARD'
export const REMOVE_CARD = 'collection/REMOVE_CARD'

// search for keyword
export const addCard = (card) => {
  return {
    type: ADD_CARD,
    card,
  }
}
export const removeCard = (card) => {
  return {
    type: REMOVE_CARD,
    card,
  }
}