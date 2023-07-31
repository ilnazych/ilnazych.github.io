import { Button, Form, Modal } from 'antd';
import { Forms } from '../form/Forms';
import { useDispatch, useSelector } from 'react-redux';
import { addData, closeModal, openModal } from '../../redux/slice';
import { initialState } from '../../assets/types';

export function ModalWindow() {
    const modalState = useSelector((state: initialState) => state.toolkit.modalState)
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    return (
        <>
            <Button type="primary" onClick={() => dispatch(openModal())} >
                Добавить данные
            </Button >
            <Modal
                title="Title"
                open={modalState}
                onCancel={() => dispatch(closeModal())}
                cancelText="Отменить"
                okText="Сохранить"
                okButtonProps={{ htmlType: "submit" }}
                onOk={() => {
                    dispatch(closeModal())
                    form
                        .validateFields()
                        .then((values: initialState) => {
                            form.resetFields();
                            dispatch(addData(values));
                            dispatch(closeModal())
                        })
                        .catch((info) => {
                            console.log('Validate Failed:', info);
                        });
                }}
            >
                <Forms form={form} />
            </Modal>
        </>
    );
}