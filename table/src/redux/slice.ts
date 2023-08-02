import { createSlice } from "@reduxjs/toolkit";
import { v4 } from 'uuid';
import dayjs from 'dayjs';

const slice = createSlice({
    name: "slice",
    initialState: {
        modalState: false,
        modalData:
        {
            key: undefined,
            name: '',
            date: '',
            numericalValue: undefined,
        },
        filtredData: [
        ],
        data: [
            {
                key: 1,
                name: 'John Brown',
                date: 1,
                numericalValue: 11,
            }],
    },
    reducers: {
        openModal(state) {
            state.modalState = true
        },
        closeModal(state, action) {
            state.modalState = false
            state.modalData = action.payload
        },
        addData(state, action) {
            const date = action.payload.date;
            action.payload.key = v4();
            action.payload.date = dayjs(new Date(date)).format('YYYY-MM-DD');
            state.data.push(action.payload)
        },
        deleteData(state, action) {
            state.data = action.payload;
        },
        editData(state, action) {
            // state.data.map(obj => {
            //     if (obj.key === action.payload.key) {
            //         obj.name = "action.payload.name"
            //     } else {
            //         return obj
            //     }
            // })
            state.modalData = action.payload
        },
        filterData(state, action) {
            state.filtredData = action.payload.key;
        },
    }
})

export default slice.reducer

export const { openModal, closeModal, addData, deleteData, editData, filterData } = slice.actions;
