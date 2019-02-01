var initialState = [
  {
    id: 1,
    text: "Go My Code  "
  },
  {
    id: 2,
    text: "This is a redux-react listtodo  "
  },
  {
    id: 3,
    text: "React-redux example "
  }
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return state.concat(action.item);

    case "UPDATE_ITEM":
      return state.map(el =>
        el.id === action.item.id ? (el = action.item) : el
      );

    case "DELETE_ITEM":
      return state.filter(el => el.id !== action.id);
    default:
      return state;
  }
};
export default reducer;
