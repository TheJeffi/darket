const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'


let store = {
  _state: {
    ProfilePage: {
      posts: [
        { id: 1, message: "привет, как дела?", likesCount: 14 },
        { id: 2, message: "hello world", likesCount: 12 },
        { id: 3, message: "hello world", likesCount: 12 },
      ],
      newPostText: "",
    },
    dialogsPage: {
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
    },
    NavbarElement: {
      friends: [
        { id: 1, name: "Богдан", avatar: "https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg" },
        { id: 2, name: "Ильсаф", avatar: "https://games.mail.ru/hotbox/content_files/gallery/2020/12/11/d49a024e7ade40858a10df3b8976625d.png" },
        { id: 3, name: "Саша", avatar: "https://placepic.ru/wp-content/uploads/2018/01/art-krasivyie-kartinki-Putin-politika-1331294.jpeg" },
      ],
    },
  },
  _CallSubscriber() {
    console.log("State изменен")
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._CallSubscriber = observer;
  },


  dispatch(action) {
    if (action.type === ADD_POST) {
      debugger;
      let newPost = {
        id: 4,
        message: this._state.ProfilePage.newPostText,
        likesCount: 0
      }
      this._state.ProfilePage.posts.push(newPost);
      this._state.ProfilePage.newPostText = "";
      this._CallSubscriber(this._state);
    }

    else if (action.type === UPDATE_NEW_POST_TEXT) {
      debugger;
      this._state.ProfilePage.newPostText = action.newText;
      this._CallSubscriber(this._state);
    }
    else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 1,
        message: this._state.dialogsPage.newMessageText,
      }
  
      this._state.dialogsPage.messages.push(newMessage);
  
      this._CallSubscriber(this._state);
    }
    else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newText;
      this._CallSubscriber(this._state);
    }


    else {
      alert("none type")
    }
  },

}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextActionCreator = (text) =>
  ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default store;
window.store = store;