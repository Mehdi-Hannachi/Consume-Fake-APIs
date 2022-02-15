import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getComments, getPosts, getUsers } from "./redux/actions/userActions";
import UsersList from "./components/UsersList";
import Header from "./components/Header";
import { Route, Router, Routes } from "react-router-dom";
import UserPosts from "./components/UserPosts";
import Comments from "./components/comments/Comments";
import MyMap from "./components/MyMap";

function App() {
  const [searchText, setsearch] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <Header setsearch={setsearch} />
      <Routes>
        <Route path="/" element={<UsersList searchText={searchText} />} />
        <Route path="/userPosts/:userI" element={<UserPosts />} />
        <Route path="userPosts/:userI/:postI" element={<Comments />} />
        <Route path="/map/:lat/:lng" element={<MyMap />} />
      </Routes>
    </>
  );
}

export default App;
