
export default {

  namespace: 'num',

  state: {
    num:1000
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    changeNum(state,{payload:{type}}){
      return {
        ...state,num:type==='+'?++state.num:--state.num
      }
    }
  },

};
