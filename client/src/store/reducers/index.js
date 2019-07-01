import { SEND_MESSAGE } from "../actions/index";

const initState = {
  messages: [
    {
      author: "AJ",
      message: "Yo!"
    },
    {
      author: "Tom",
      message: "Derp derp"
    }
  ]
};
// !! Reducer  ** work on deep copying state **
const messageReducer = (state = initState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    default:
      return state;
  }
};

export default messageReducer;
