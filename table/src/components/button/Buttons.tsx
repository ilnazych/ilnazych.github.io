import { Button, Space } from 'antd';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/slice';

export function Buttons() {
    const dispatch = useDispatch();
    return (
        <div className="buttons">
            <Space size="small" >
                <Button onClick={() => dispatch(openModal())}>Изменить</Button>
                <Button>Удалить</Button>
            </Space>
        </div>
    )
}