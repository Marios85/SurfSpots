import {handleActions,  createActions } from 'redux-actions'

const defaultState = { spots: [] };

export const { fetchspots, fetchspot, addspot } = createActions({
    FETCHSPOTS: (data) => ({data}),
    FETCHSPOT: (id) => ({id}),
    ADDSPOT: (spot) => ({spot})
  });

const spotReducer = handleActions(
    {
        [fetchspots]: (state, { payload:  {data}  }) => { return { ...state, spots: state.spots = data };},
        [fetchspot]: (state, { payload:  {id}  }) => { return { ...state, spot: state.spots.find(element=>element.id == id) };},
        [addspot]: (state, { payload:  {spot}  }) => { return { ...state, spots:state.spots.concat(spot) };}
    },
    defaultState
  );

export default spotReducer;