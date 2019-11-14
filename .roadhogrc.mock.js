// 引入Mock的数据
import GovList from './mock/gov'

export default {
  'GET /api/main/govList': (req, res)=>{
    console.log('req...', req);
    res.send(GovList)}
};
