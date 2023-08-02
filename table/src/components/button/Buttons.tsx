import { Button, Popconfirm, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { deleteData, editData, openModal } from '../../redux/slice';
import { InitialState } from '../../assets/types';

export function Buttons({ record }) {
    const data = useSelector((state: InitialState) => state.toolkit.data)

    const dispatch = useDispatch();

    const handleDelete = (key: React.Key) => {
        const newData = data.filter((item) => item.key !== key);
        dispatch(deleteData(newData));
    };

    const handleEdit = (key: React.Key) => {
        const newData = data.find((item) => item.key === key);
        dispatch(openModal())
        dispatch(editData(newData))
    };

    return (
        <div className="buttons">
            <Space size="small" >
                <Button onClick={() => handleEdit(record.key)} >Изменить</Button>
                <Popconfirm title="Удалить строку?" onConfirm={() => handleDelete(record.key)}>
                    <Button>Удалить</Button>
                </Popconfirm>
            </Space>
        </div >
    )
}