var firebaseConfig = {
    apiKey: "AIzaSyCAnsy0BdOBZjFMpf5vNuz7xFRqh3GVWY8",
    authDomain: "kwitter-38a2c.firebaseapp.com",
    databaseURL: "https://kwitter-38a2c-default-rtdb.firebaseio.com",
    projectId: "kwitter-38a2c",
    storageBucket: "kwitter-38a2c.appspot.com",
    messagingSenderId: "211002307720",
    appId: "1:211002307720:web:31377b92112d4b90281b3d"
};
firebase.initializeApp(firebaseConfig);

Username = localStorage.getItem("username");
roomName = localStorage.getItem("room_name");

function Send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(roomName).push({
          name: username,
          message: msg,
          like: 0
    });
}