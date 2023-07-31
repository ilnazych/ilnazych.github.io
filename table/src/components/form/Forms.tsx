import {
    DatePicker,
    Form,
    Input,
    InputNumber,
} from 'antd';
import { DataType } from '../../assets/types';

export function Forms({ form }) {

    const onFinish = (values: DataType) => {
        console.log(values);
        console.log(form);
    };

    return (
        <>
            <Form
                wrapperCol={{ span: 14 }}
                onFinish={onFinish}
                form={form}
            >
                <Form.Item label="Имя" name="name">
                    <Input />
                </Form.Item>
                <Form.Item label="Дата" name="date">
                    <DatePicker />
                </Form.Item>
                <Form.Item label="Числовое значение" name="numericalValue">
                    <InputNumber />
                </Form.Item>
            </Form >
        </>
    );
}