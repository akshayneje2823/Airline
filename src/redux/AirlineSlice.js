import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tableData:[],
    isLogin: false,
    userName: ""
}


const AirlineSlice = createSlice({
    "name": "Airline",
    initialState,
    reducers: {
        userLogin: (state, action) => {
            state.isLogin = action.payload
        },
        userName: (state, action) => {
            state.userName = action.payload
        },
        storeAirlineData: (state, action) => {
            state.tableData = action.payload
        },
        addNewRecord: (state, action) => {
            console.log(action.payload)
            state.tableData.unshift(action.payload)
        },
        updatedRecord: (state, action) => {
            let findIndex = state.tableData.findIndex(ele => ele.id === action.payload.id);
            state.tableData[findIndex] = action.payload
        },
        deleteRecord: (state, action) => {
            const updatedData = state.tableData.filter(newData => {
                return newData.id !== action.payload.id
            })
            state.tableData = updatedData
        },
    }
});


export const { addNewRecord, deleteRecord, updatedRecord, userLogin, userName, storeAirlineData } = AirlineSlice.actions;

export default AirlineSlice.reducer
