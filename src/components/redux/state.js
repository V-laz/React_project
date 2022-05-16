import { rerenderEntireTree } from "../../render";



let state = {

  profilePage: {
    newPost : [
      { id: 1, message: "hello gyver", likesCount: 5 },
      { id: 2, message: "hello natali", likesCount: 9 },
      { id: 3, message: "hello lexa", likesCount: 7 },
      { id: 4, message: "hello vajs", likesCount: 25 },
      { id: 5, message: "hello gjojoi", likesCount: 5 },
      { id: 6, message: "hello mumu", likesCount: 5 },
    ]
  },
  messagePage: {

    dialogsData: [
      { id: 1, name: 'Gyver' },
      { id: 2, name: "Vajs" },
      { id: 3, name: "Natasha" },
      { id: 4, name: "Lexa" },
      { id: 5, name: "Zaicr" },
      { id: 6, name: "Avtobus" }
    ],

    messagesData: [
      { id: 1, message: 'hi' },
      { id: 2, message: "how are you" },
      { id: 4, message: "ypo" },
      { id: 5, message: "Zby" },
      { id: 6, message: "bngj" }
    ],
  }
}
export let addPost = (postMessage) => {
  let newsPost= {
    id: 5, 
    message: postMessage,
    likeCount: 9
  };
  state.profilePage.newPost.push(newsPost);
  rerenderEntireTree(state);

}
 export default state;