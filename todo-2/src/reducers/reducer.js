export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589,
  },
];

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
    case 'TOGGLE_TASK':
    case 'CLEAR_COMPLETE':
    default:
      return state;
  }
};
