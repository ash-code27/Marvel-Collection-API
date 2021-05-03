import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name : "root",
    initialState: {
        name: 'storm',
      description: "black female with white hair blue eyes",
        comics_appeared_in: "Giant-Size X-Men 1",
        super_power: 'controls the weather',
        date_created: 'May 1975'
    },
    
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseDescription: (state, action) => { state.description = action.payload}
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName, chooseDescription, } = rootSlice.actions;
    
