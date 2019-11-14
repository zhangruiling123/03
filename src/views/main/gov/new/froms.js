import React, { Component } from 'react'
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
  } from 'antd';

  const { Option } = Select;
  const AutoCompleteOption = AutoComplete.Option;
  
  const residences = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];
  
  class RegistrationForm extends React.Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
  
    handleConfirmBlur = e => {
      const { value } = e.target;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
  
    compareToFirstPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    };
  
    validateToNextPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    };
  
    handleWebsiteChange = value => {
      let autoCompleteResult;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
      }
      this.setState({ autoCompleteResult });
    };
  
    render() {
      const { getFieldDecorator } = this.props.form;
      const { autoCompleteResult } = this.state;
  
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
      const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '86',
      })(
        <Select style={{ width: 70 }}>
          <Option value="86">+86</Option>
          <Option value="87">+87</Option>
        </Select>,
      );
  
      const websiteOptions = autoCompleteResult.map(website => (
        <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
      ));
  
      return (
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="机构名称">
            {getFieldDecorator('name', {
              rules: [
                {
                  type: 'name',
                  message: 'The input is not valid name!',
                },
                {
                  required: true,
                  message: 'Please input your name!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="机构缩写">
            {getFieldDecorator('name', {
              rules: [
                {
                  type: 'name',
                  message: 'The input is not valid name!',
                },
                {
                  required: true,
                  message: 'Please input your name!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="机构地区">
            {getFieldDecorator('name', {
              rules: [
                {
                  type: 'name',
                  message: 'The input is not valid name!',
                },
                {
                  required: true,
                  message: 'Please input your name!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="机构地址">
            {getFieldDecorator('name', {
              rules: [
                {
                  type: 'name',
                  message: 'The input is not valid name!',
                },
                {
                  required: true,
                  message: 'Please input your name!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="校长姓名">
            {getFieldDecorator('name', {
              rules: [
                {
                  type: 'name',
                  message: 'The input is not valid name!',
                },
                {
                  required: true,
                  message: 'Please input your name!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="校长手机号">
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: 'Please input your phone number!' }],
            })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
          </Form.Item>
          <Form.Item label="合同编号">
            {getFieldDecorator('name', {
              rules: [
                {
                  type: 'name',
                  message: 'The input is not valid name!',
                },
                {
                  required: true,
                  message: 'Please input your name!',
                },
              ],
            })(<Input />)}
          </Form.Item>
        
          <Form.Item {...tailFormItemLayout}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
            })(
              <Checkbox>
                I have read the <a href="">agreement</a>
              </Checkbox>,
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      );
    }
  }
  
  const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

  export default  WrappedRegistrationForm

