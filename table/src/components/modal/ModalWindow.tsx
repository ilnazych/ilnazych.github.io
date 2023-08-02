import { Button, Form, Modal } from 'antd';
import { Forms } from '../form/Forms';
import { useDispatch, useSelector } from 'react-redux';
import { addData, addEditData, closeModal, openModal } from '../../redux/slice';
import { DataType, InitialState } from '../../assets/types';
import dayjs from 'dayjs';

export function ModalWindow() {
    const data = useSelector((state: InitialState) => state.toolkit.data)
    const modalData = useSelector((state: InitialState) => state.toolkit.modalData)
    const modalState = useSelector((state: InitialState) => state.toolkit.modalState)
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
                onCancel={() => dispatch(closeModal([]))}
                cancelText="Отменить"
                okText="Сохранить"
                okButtonProps={{ htmlType: "submit" }}
                onOk={() => {
                    form
                        .validateFields()
                        .then((values: DataType) => {
                            const formatDate = dayjs(new Date(values.date)).format('YYYY-MM-DD');
                            if (data.filter(i => i.key === modalData.key).length > 0) {
                                const newData = data.map((item) => (
                                    item.key === modalData.key
                                        ? { ...item, name: values.name, date: formatDate, numericalValue: values.numericalValue, key: modalData.key }
                                        : item
                                ));
                                dispatch(addEditData(newData))
                                dispatch(closeModal([]))
                            } else {
                                dispatch(addData(values));
                                dispatch(closeModal([]));
                            }
                        })
                        .catch((info) => {
                            console.log('Validate Failed:', info);
                        });
                }}
            >
                <Forms form={form} />
            </Modal >
        </>
    );
}