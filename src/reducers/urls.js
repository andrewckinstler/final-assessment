export const urls = (state = [], action) => {
  switch (action.type) {
    case 'SET_URLS':
      return action.urls
    default:
      return state;
    case 'ADD_URL':
      return [...state, action.url]
  }
};
