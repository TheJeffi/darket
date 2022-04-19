import dialogsReducer from "./dialogs-reducer"
import navbarReducer from "./navbar-reducer"
import profileReducer from "./profile-reducer"

let store = {
  _state: {
    profilePage: {
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
    navbarElement: {
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
      this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
      this._state.dialogsPage = profileReducer(this._state.dialogsPage, action);
      this._state.navbarElement = profileReducer(this._state.navbarElement, action);
      
      this._CallSubscriber(this._state);
    }
}

export default store;
window.store = store;