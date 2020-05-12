import {handleActions,  createActions } from 'redux-actions'

const defaultState = { spots: [] };

export const { fetchspots, fetchspot } = createActions({
    FETCHSPOTS: (data) => ({ data }),
    FETCHSPOT: (id) => ({id})
  });

const spotReducer = handleActions(
    {
        [fetchspots]: (state, { payload:  {data}  }) => { return { ...state, spots: state.spots = data };},
        [fetchspot]: (state, { payload:  {id}  }) => { return { ...state, spot: state.spots.find(element=>element.id == id) };}
    },
    defaultState
  );

export default spotReducer;