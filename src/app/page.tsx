'use client';

import {inject, observer} from "mobx-react";
import {TestStore} from "@/stores/TestStore";
import {useFormik} from "formik";
import {Button, Form, Input, Select} from "antd";

import * as Yup from 'yup';
import React from "react";

interface HomeProps {
    testStore: TestStore;
}

const SignupSchema = Yup.object().shape({
    title: Yup.string().required('Please input your Title!'),
    userId: Yup.string().required('Please input your User ID!'),
    password: Yup.string().required('Please input your Password!')
})

const Home = (props: HomeProps) => {
    const {Option} = Select;

    const form = useFormik({
        initialValues: props.testStore.initForm(),
        validationSchema: SignupSchema,
        onSubmit: (form, {setSubmitting}) => {
            props.testStore.onAdd(form);

            setTimeout(() => {
                alert(JSON.stringify(form, null, 2));
                setSubmitting(false);
            }, 400);
        }
    });

    return (
        <div>
            <h1 style={{color: 'black'}}>Sign In</h1>
            <Form
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                style={{maxWidth: 600}}
                onFinish={form.handleSubmit}
            >
                <Form.Item
                    label="Title"
                    name="title"
                    help={form.touched.title && form.errors.title ? form.errors.title : ''}
                    validateStatus={form.touched.title && form.errors.title ? 'error' : undefined}
                >
                    <Select
                        style={{width: 120}}
                        value={form.values.title}
                        onChange={(val) => form.setFieldValue('title', val)}
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>
                            Disabled
                        </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="User ID"
                    name="userId"
                    help={form.touched.userId && form.errors.userId ? form.errors.userId : ''}
                    validateStatus={form.touched.userId && form.errors.userId ? 'error' : undefined}
                >
                    <Input
                        value={form.values.userId}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    help={form.touched.password && form.errors.password ? form.errors.password : ''}
                    validateStatus={form.touched.password && form.errors.password ? 'error' : undefined}
                >
                    <Input
                        value={form.values.password}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    />
                </Form.Item>

                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button type="primary" htmlType="reset">
                        Reset
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default inject('testStore')(observer(Home));
