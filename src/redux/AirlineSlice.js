import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tableData: [
        {
            "id": 1,
            "name": "Sri Lankan Airways",
            "country": "Sri Lanka",
            "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
            "slogan": "From Sri Lanka",
            "head_quaters": "Katunayake, Sri Lanka",
            "website": "www.srilankaairways.com",
            "established": "1990"
        },
        {
            "id": 2,
            "name": "Air India",
            "country": "India",
            "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/Air_India_Logo.svg/250px-Air_India_Logo.svg.png",
            "slogan": "Your Palace in the Sky",
            "head_quaters": "Airlines House, New Delhi, India",
            "website": "https://www.airindia.in",
            "established": "1990"
        },
        {
            "id": 12,
            "name": "Alas La Rioja",
            "country": "Argentina",
            "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
            "slogan": "From Argentina",
            "head_quaters": "La Rioja, Argentina",
            "website": "www.alasairways.com",
            "established": "1990"
        },

        {
            "id": 78767887137,
            "name": "Quatar Airways",
            "country": "Quatar",
            "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/300px-Qatar_Airways_Logo.svg.png",
            "slogan": "Going Places Together",
            "head_quaters": "Qatar Airways Towers, Doha, Qatar",
            "website": "www.qatarairways.com",
            "established": "1994"
        },
        {
            "id": 128116,
            "name": "Rwanda Airways",
            "country": "Rwanda",
            "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
            "slogan": "From Rwanda",
            "head_quaters": "Rwanda",
            "website": "www.tzairways.com",
            "established": "1979"
        },
        {
            "name": "Sri Lankan Airways",
            "country": "Sri Lanka",
            "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
            "slogan": "From Sri Lanka",
            "head_quaters": "Katunayake, Sri Lanka",
            "website": "www.srilankaairways.com",
            "established": "1990"
        },
        {
            "name": "Sri Lankan Airways",
            "country": "Sri Lanka",
            "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
            "slogan": "From Sri Lanka",
            "head_quaters": "Katunayake, Sri Lanka",
            "website": "www.srilankaairways.com",
            "established": "1990"
        },
        {
            "name": "Sri Lankan Airways",
            "country": "Sri Lanka",
            "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
            "slogan": "From Sri Lanka",
            "head_quaters": "Katunayake, Sri Lanka",
            "website": "www.srilankaairways.com",
            "established": "1990"
        },
        {
            "name": "John"
        },
        {
            "id": 124,
            "name": "Sri Lankan Airwayss",
            "country": "Sri Lankaa",
            "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka1.png",
            "slogan": "From Sri Lanka",
            "head_quaters": "Katunayake, Sri Lanka",
            "website": "www.srilankaairways.com"
        },
        {
            "id": 1243,
            "name": "Sri Lankan Airwayss",
            "country": "Sri Lankaa",
            "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka1.png",
            "slogan": "From Sri Lanka",
            "head_quaters": "Katunayake, Sri Lanka",
            "website": "www.srilankaairways.com",
            "established": "1991"
        },
        {
            "id": 23478,
            "name": "qwertyu",
            "country": "asdfghj",
            "logo": "sdfgh",
            "slogan": "zxcvbnm",
            "head_quaters": "hsdfghj",
            "website": "zxcvbnm,",
            "established": "45645"
        },
        {
            "id": 999999,
            "name": "qwertyu",
            "country": "asdfghj",
            "logo": "sdfgh",
            "slogan": "zxcvbnm",
            "head_quaters": "hsdfghj",
            "website": "zxcvbnm,",
            "established": "45645"
        },
        {
            "id": 44444,
            "name": "Sri Lankan Airways",
            "country": "Sri Lanka",
            "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
            "slogan": "From Sri Lanka",
            "head_quaters": "Katunayake, Sri Lanka",
            "website": "www.srilankaairways.com",
            "established": "567890"
        },
        {
            "id": 1787434987,
            "name": "Quatar Airways",
            "country": "Quatar",
            "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/300px-Qatar_Airways_Logo.svg.png",
            "slogan": "Going Places Together",
            "head_quaters": "Qatar Airways Towers, Doha, Qatar",
            "website": "www.qatarairways.com",
            "established": "1994"
        },
        {
            "id": 4874443,
            "name": "Sri Lankan Airways",
            "country": "Sri Lanka",
            "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
            "slogan": "From Sri Lanka",
            "head_quaters": "Katunayake, Sri Lanka",
            "website": "www.srilankaairways.com",
            "established": "1990"
        },
        {
            "id": 48744431,
            "name": "Sri Lankan Airways",
            "country": "Sri Lanka",
            "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
            "slogan": "From Sri Lanka",
            "head_quaters": "Katunayake, Sri Lanka",
            "website": "www.srilankaairways.com",
            "established": "1990"
        },

        {
            "id": 48744421,
            "name": "Sri Lankan Airways",
            "country": "Sri Lanka",
            "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
            "slogan": "From Sri Lanka",
            "head_quaters": "Katunayake, Sri Lanka",
            "website": "www.srilankaairways.com",
            "established": "1990"
        },
        {
            "id": 888888,
            "name": "qwertyu",
            "country": "asdfghj",
            "logo": "sdfgh",
            "slogan": "zxcvbnm",
            "head_quaters": "hsdfghj",
            "website": "zxcvbnm,",
            "established": "45645"
        },
        {
            "id": 121232,
            "name": "Sri Lankan Airways",
            "country": "Sri Lanka",
            "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
            "slogan": "From Sri Lanka",
            "head_quaters": "Katunayake, Sri Lanka",
            "website": "www.srilankaairways.com",
            "established": "1990"
        },
        {
            "id": 12453245,
            "name": "ABC Airlines",
            "country": "IN",
            "logo": "ABC",
            "slogan": "ABC Slogan",
            "head_quaters": "Mumbai",
            "website": "abc.in",
            "established": "2023"
        },
        {
            "id": 1245245,
            "name": "ABC Airlines",
            "country": "IN",
            "logo": "ABC",
            "slogan": "ABC Slogan",
            "head_quaters": "Mumbai",
            "website": "abc.in",
            "established": "2023"
        },
        {
            "id": 487444251,
            "name": "Sri Lankan Airways",
            "country": "Sri Lanka",
            "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
            "slogan": "From Sri Lanka",
            "head_quaters": "Katunayake, Sri Lanka",
            "website": "www.srilankaairways.com",
            "established": "1990"
        },

        {
            "id": 487444261,
            "name": "Sri Lankan Airways",
            "country": "Sri Lanka",
            "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
            "slogan": "From Sri Lanka",
            "head_quaters": "Katunayake, Sri Lanka",
            "website": "www.srilankaairways.com",
            "established": "1990"
        },
        {
            "id": 314,
            "name": "AirIndia",
            "country": "India",
            "logo": "Delhi, India",
            "slogan": "for best experience",
            "head_quaters": "Delhi, India",
            "website": "www.airIndia.com",
            "established": "1990"
        },
        {
            "id": 315,
            "name": "qAir",
            "country": "Qatar",
            "logo": "Qatar",
            "slogan": "for best experience",
            "head_quaters": "Qatar",
            "website": "www.qatarairways.com",
            "established": "1990"
        },
        {
            "id": 487444271,
            "name": "Sri Lankan Airways",
            "country": "Sri Lanka",
            "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
            "slogan": "From Sri Lanka",
            "head_quaters": "Katunayake, Sri Lanka",
            "website": "www.srilankaairways.com",
            "established": "1990"
        },
    ],
    oldRecord: {}
}


const AirlineSlice = createSlice({
    "name": "Airline",
    initialState,
    reducers: {
        addNewRecord: (state, action) => {
            console.log(action.payload)
            state.tableData.push(action.payload)
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


export const { addNewRecord, deleteRecord, updatedRecord } = AirlineSlice.actions;

export default AirlineSlice.reducer
