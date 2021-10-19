import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ViewDayIcon from "@mui/icons-material/ViewDay";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import {
addDoc,
onSnapshot,
orderBy,
query,
collection,
} from "firebase/firestore";
const Feed = () => {
const [posts, setPosts] = useState([]);
const [input, setInput] = useState("");
useEffect(() => {
onSnapshot(collection(db, "posts"), (snapshot) =>
setPosts(
snapshot.docs.map((doc) => ({
id: doc.id,
data: doc.data(),
}))
)
);
}, []);

const sendPost = (e) => {
e.preventDefault();
addDoc(collection(db, "posts"), {
name: "Muke Jb",
description: "This is the decrisption from firebase database",
message: input,
photoUrl: "",
timestamp: firebase.firestore.FieldValue.serverTimestamp(),
});
setInput("");
};
return (
<div className="feed">
<div className="feed__inputContainer">
<div className="feed__input">
<CreateIcon />
<form>
<input
onChange={(e) => setInput(e.target.value)}
value={input}
type="text"
/>
<button onClick={sendPost} type="submit">
Send
</button>
</form>
</div>
<div className="feed__inputOptions">
<InputOption Icon={ImageIcon} title="photo" color="#70B5F9" />
<InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
<InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
<InputOption
            Icon={ViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
</div>
</div>
{/_ Posts _/}
{posts.map(({ id, data: { name, description, message, photoUrl } }) => (
<Post
          key={id}
          name={name}
          decription={description}
          message={message}
          photoUrl={photoUrl}
        />
))}
</div>
);
};

export default Feed;
