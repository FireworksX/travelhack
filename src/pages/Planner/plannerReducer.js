export const plannerReducer = (state, action) => {
  let newState = state;
  if (action.type === 'set-city') {
    newState = { ...state, city: action.payload };
  }
  if (action.type === 'set-dateFrom') {
    newState = { ...state, dateFrom: action.payload };
  }
  if (action.type === 'set-dateTo') {
    newState = { ...state, dateTo: action.payload };
  }
  if (action.type === 'set-categories') {
    newState = { ...state, categories: action.payload };
  }
  return newState;
};
