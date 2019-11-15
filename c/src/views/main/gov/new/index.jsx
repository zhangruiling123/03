import React from 'react';
import {connect} from 'dva';
import {
  Form,
  Input,
  Modal,
  Checkbox,
  Button,
} from 'antd';
const {confirm} =Modal
const mapStateToProps = state=>{
  return {
    type: state.gov.type,
    info: state.gov.info
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    addGov:payload=>{
      dispatch({
        type:'gov/addGov',
        payload
      })
    }
  }
}
@connect(mapStateToProps,mapDispatchToProps)
@Form.create()
class NewGov extends React.Component{
  // 提交表单
  handleSubmit = e=>{
    console.log('提交表单...');
    this.props.form.validateFields((err, vals)=>{
      console.log('errr...', err, vals);
      if(err){

      }else{
        confirm({
          title:`${this.props.type=='new'?'您确定要添加机构？':'您确定要修改机构信息吗？'}`,
          onOk(){
            console.log('vals...',vals)
            this.props.addGov(vals)
          }
        })
      }
    })
  }

  // 重置表单
  resetForm = e=>{
    this.props.form.resetFields();
  }

  componentDidMount(){
    let {id,...info} =this.props.info
    console.log('info...',info)
    if(!Object.keys(info).length){
      let storage = window.localStorage.getItem('info');
      if(storage){
        info = JSON.parse(storage)
      }
    }
      this.props.form.setFieldsValue(info);
  }
  componentWillUnmount(){
    let info =this.props.from.getFieldValue()
    window.localStorage.setItem('info',JSON.stringify(info))
  }

 get disabled(){
    return this.props.type==='detail'
  }

  render(){
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    console.log('props...', this.props);
    return <>
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="机构名称">
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: '请输入你的机构名称',
              },
            ],
          })(<Input disabled={this.disabled} />)}
        </Form.Item>
        <Form.Item label="机构地区">
          {getFieldDecorator('area', {
            rules: [
              {
                required: true,
                message: '请输入你的机构地区',
              },
            ],
          })(<Input disabled={this.disabled}  />)}
        </Form.Item>
        <Form.Item label="机构地址">
          {getFieldDecorator('address', {
            rules: [
              {
                required: true,
                message: '请输入你的机构地址',
              },
            ],
          })(<Input vdisabled={this.disabled}  />)}
        </Form.Item>
        <Form.Item label="校长姓名">
          {getFieldDecorator('master', {
            rules: [
              {
                required: true,
                message: '请输入校长姓名',
              },
            ],
          })(<Input disabled={this.disabled} />)}
        </Form.Item>
        <Form.Item label="校长手机号">
          {getFieldDecorator('phone', {
            rules: [
              {
                required: true,
                message: '请输入校长手机号',
              },
            ],
          })(<Input disabled={this.disabled}  />)}
        </Form.Item>
        <Form.Item >
          <span>合同信息</span>
        </Form.Item>
        <Form.Item label="合同编号">
          {getFieldDecorator('num')(<Input />)}
        </Form.Item>
        <Form.Item label="是否可用">
          {getFieldDecorator('enable', {
            valuePropName:'cheked'
          })(<Checkbox disabled={this.disabled}  />)}
        </Form.Item>
          {this.disabled?null:<Form.Item {...tailFormItemLayout}>
          <Button onClick={this.resetForm}>取消</Button>
          <Button type="primary" htmlType="submit" style={{marginLeft:'30px'}}>提交</Button>
        </Form.Item>}
      </Form>
    </>
  }
}

export default NewGov;
