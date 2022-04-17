let state = {
  ProfilePage: {
    posts: [
      { id: 1, message: "привет, как дела?", likesCount: 14 },
      { id: 2, message: "hello world", likesCount: 12 },
      { id: 3, message: "hello world", likesCount: 12 },
    ],
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
      { id: 4, name: "Настя" },
    ],
  },

  NavbarElement: {
    friends: [
      {id: 1, name: "Богдан", avatar: "https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg"},
      {id: 2, name: "Ильсаф", avatar: "https://games.mail.ru/hotbox/content_files/gallery/2020/12/11/d49a024e7ade40858a10df3b8976625d.png"},
      {id: 3, name: "Саша", avatar: "https://placepic.ru/wp-content/uploads/2018/01/art-krasivyie-kartinki-Putin-politika-1331294.jpeg"},
    ],
  },

}

export default state;