import React from 'react';
import { connect } from 'dva';


class IndexPage extends React.Component{
  render(){
    let {changeNum} = this.props
    console.log('props...',this.props)
    return (
      <div>
        <button onClick={()=>changeNum('+')}>+</button>
        <span>{this.props.num}</span>
        <button onClick={()=>changeNum('-')}>-</button>
      </div>
    )
  }
}

IndexPage.propTypes = {
  num:Number
};
IndexPage.dafaultProps={
  num:1000
}
const mapStateToProps = state=>{
  console.log('state...',state)
  return {
    num:state.num.num
  }
}
const mapDispatchToProps = dispatch=>{
  return {
    changeNum:type=>dispatch({
      type:'num/changeNum',
      payload:{type}
    })
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(IndexPage);
