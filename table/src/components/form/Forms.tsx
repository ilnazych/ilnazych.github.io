import {
    DatePicker,
    Form,
    Input,
    InputNumber,
} from 'antd';

export function Forms({ form }) {


    return (
        <>
            <Form
                wrapperCol={{ span: 14 }}
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