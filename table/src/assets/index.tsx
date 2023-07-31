import { DataType } from "./types";
import type { ColumnsType } from 'antd/es/table';
import { Buttons } from "../components/button/Buttons";

export const columns: ColumnsType<DataType> = [
    { title: 'Имя', dataIndex: 'name', key: 'name' },
    { title: 'Дата', dataIndex: 'date', key: 'date' },
    { title: 'Числовое значение', dataIndex: 'numericalValue', key: 'numericalValue' },
    {
        title: 'Действия',
        key: 'action',
        render: () => (
            <Buttons />
        ),
    },
];

export const data: DataType[] = [
    {
        key: 1,
        name: 'John Brown',
        date: 4,
        numericalValue: 11,
    },
];
