// 引入Mock的数据
import GovList from './mock/gov'

export default {
  'GET /api/main/govList': (req, res)=>{
    console.log('req...', req);
    res.send(GovList)
  },
  'POST /api/main/addGov':(req,res)=>{
    GovList.list.push({
      id:GovList.list.length+1,
      ...req.body
    })
    res.send({
      code:1,
      msg:'添加机构成功'
    })
  }
};

