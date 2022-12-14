import React from "react";
import { Form, Button, Input } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const CheckboxForm = (props) => {
  const { checkboxcode, checkbox, updateCheckbox } = props;
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    values.code = checkboxcode;
    console.log(values);
    updateCheckbox(values);
  };
  if (checkbox.length > 0) {
    const found = checkbox.find((item) => item.code === checkboxcode);
    if (found) {
      form.setFieldsValue({ value: found.value, label: found.label });
    }
  }

  return (
    <div>
      <Form {...layout} name="basic" form={form} onFinish={onFinish}>
        <Form.Item
          name="value"
          label="Product ID"
          rules={[
            {
              required: true,
              message: "Vul Product ID in!",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="label"
          label="Omscrijving"
          rules={[
            {
              required: true,
              message: "Vul Omschrijving in!",
            },
            { type: "string" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CheckboxForm;
