import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: "1", message: "Hi, dasdasddasdaare you?", likesCount: 9},
                {id: "2", message: "Whattta", likesCount: 23}
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {id: "johnny", name: "Johnny"},
                {id: "123", name: "123"},
                {id: "456", name: "456"}
            ],
            messages: [
                {id: "1", message: "Hi"},
                {id: "2", message: "Hi2"}
            ],
            newMessageBody: ""
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //pattern observer
    },

    dispatch(action) { // { type: 'ADD-POST' }

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);  
    }
}


export default store;
window.store = store;

//OOP store

