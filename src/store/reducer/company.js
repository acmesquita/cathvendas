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
  boxes: [
    {
      id: 1,
      title: 'Caixa 01',
      description: 'idfasdk dfaopsdh',
      saldo: 100,
      registries: [
        {
          id: 1,
          description: 'Teste Entrada',
          value: 1000,
          date: '01/11/2019',
          kind: 'in'
        },
        {
          id: 3,
          description: 'Teste Entrada',
          value: 1000,
          date: '01/11/2019',
          kind: 'in'
        },
        {
          id: 2,
          description: 'Teste Saída',
          value: 900,
          date: '01/11/2019',
          kind: 'out'
        },
        {
          id: 4,
          description: 'Teste Saída',
          value: 900,
          date: '01/11/2019',
          kind: 'out'
        },
      ]
    },
    {
      id: 2,
      title: 'Caixa 02',
      description: 'idfasdk dfaopsdh',
      saldo: 1000,
      registries: []
    },
  ]
}

const updateSaldo = (state = INITIAL_STATE, action) => {
  return { ...state, saldo: action.saldo }
}
// TODO - Refatorar
const addBox = (state = INITIAL_STATE, action) => {
  return { ...state, boxes: [ ...state.boxes, action.box ] }
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
