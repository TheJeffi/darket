const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
   messages: [
      { id: 1, message: "ку как дела" },
      { id: 2, message: "ку че делаешь" },
      { id: 3, message: "ку ку" },
   ],
   dialogs: [
      { id: 1, name: "Богдан" },
      { id: 2, name: "Ильсаф" },
      { id: 3, name: "Саша" },
      { id: 4, name: "ливнула" },
   ],
   newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_MESSAGE: 
      let text = state.newMessageText;
         return {
            ...state,
            newMessageText: '',
            messages: [...state.messages, {id: 4, message: text}],
         };
      case UPDATE_NEW_MESSAGE_TEXT: 
      debugger;
         return {
            ...state,
            newMessageText: action.newText
         }
      default:
         return state;

   }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextActionCreator = (text) =>
   ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default dialogsReducer;