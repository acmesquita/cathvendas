import { createActions, createReducer } from 'reduxsauce';

/**
 *  Criando os Types e Creators
 *  Ex.: Type.ADD e add = { type: Type.ADD, params }
 */
export const { Types, Creators } = createActions({
  updateSaldo: ["saldo"],
  addBox: ["description"]
})

const INITIAL_STATE = {
  saldo: 0,
  boxes: []
}

const updateSaldo = (state = INITIAL_STATE, action) => {
  return { ...state, saldo: action.saldo }
}
// TODO - Refatorar
const addBox = (state = INITIAL_STATE, action) => {
  return { ...state, boxes: [ ...state.boxes, action.description ] }
}

/**
 * Criando os reducers
 * Ex.: [Types.ADD]: add == switch actions.type
 *                            case Type.ADD
 *                               return add(state, action)
 *                             default
 *                                return state
 */

export default createReducer(INITIAL_STATE, {
  [Types.UPDATE_SALDO]: updateSaldo,
  [Types.ADD_BOX]: addBox,
})
