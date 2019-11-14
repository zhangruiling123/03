import React from 'react';
import {connect} from 'dva';
import WrappedRegistrationForm from './froms.js'
const mapStateToProps = state=>{
  return {
    type: state.gov.type,
    info: state.gov.info
  }
}

@connect(mapStateToProps)
class NewGov extends React.Component{
  render(){
    console.log('props...', this.props);
    return <>
      <p>新增机构</p>
     <WrappedRegistrationForm />

    </>
  }
}

export default NewGov;
