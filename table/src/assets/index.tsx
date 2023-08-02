import { DataType } from "./types";
import type { ColumnsType } from 'antd/es/table';

import { Buttons } from "../components/button/Buttons";


export const columns: ColumnsType<DataType> = [
    {
        title: 'Имя', dataIndex: 'name', key: 'name', sorter: (a, b) => a.name.localeCompare(b.name),
    },
    { title: 'Дата', dataIndex: 'date', key: 'date', sorter: (a, b) => a.date.localeCompare(b.date) },
    {
        title: 'Числовое значение', dataIndex: 'numericalValue', key: 'numericalValue', sorter:
            (a, b) => a.numericalValue - b.numericalValue,
    },
    {
        title: 'Действия',
        key: 'action',
        render: (_, record: { key: React.Key }) =>
        (
            <Buttons record={record} />
        )
    },
];