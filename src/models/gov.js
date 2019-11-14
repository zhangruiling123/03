import {govList} from '@/services'

export default {
  // 命名空间
  namespace: 'gov',

  // 原始数据
  state: {
    list: [],
    type: '', //new 表示新增，eidt 表示编辑，detail 表示详情
    info: {}
  },

  // 异步操作
  effects: {
    *getGovList({payload}, {call, put}) {
      let res = yield call(govList, 1, 2);
      console.log('data...', res);
      yield put({
        type: 'changeList',
        payload: res.data.list
      })
    }
  },

  // 同步操作
  reducers: {
    changeList(state, {payload}){
      return {...state, list: payload}
    },
    goDetail(state, {payload}){
      let {type, info} = payload;
      return {...state, type, info}
    }
  }
};
