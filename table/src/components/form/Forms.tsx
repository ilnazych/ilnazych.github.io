import {
    DatePicker,
    Form,
    Input,
    InputNumber,
} from 'antd';
import { useSelector } from 'react-redux';
import { InitialState } from '../../assets/types';
import { useEffect } from 'react';
import dayjs from 'dayjs';


export function Forms({ form }) {
    const modalData = useSelector((state: InitialState) => state.toolkit.modalData)


    useEffect(() => {
        form.setFieldsValue({ ...modalData, date: modalData.date ? dayjs(modalData.date) : null });
    }, [form, modalData]);
    return (
        <>
            <Form
                wrapperCol={{ span: 14 }}
                form={form}
                name='form'
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