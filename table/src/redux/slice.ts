import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "slice",
    initialState: {
        modalState: false,
        data: [
            {
                key: 1,
                name: 'John Brown',
                date: 1,
                numericalValue: 11,
            }]
    },
    reducers: {
        openModal(state) {
            state.modalState = true
        },
        closeModal(state) {
            state.modalState = false
        },
        addData(state, action) {
            state.data.push(action.payload)
        },
        state(state) {
            state.data.pop()
        }
    }
})

export default slice.reducer

export const { openModal, closeModal, addData, state } = slice.actions;
