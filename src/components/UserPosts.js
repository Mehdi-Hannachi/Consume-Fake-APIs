import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useParams } from "react-router-dom";
import { getPosts } from "../redux/actions/userActions";
import Posts from "./Posts";

const UserPosts = () => {
  const dispatch = useDispatch();
  const { userI } = useParams();
  const posts = useSelector((state) => state.postsReducer.posts);

  useEffect(() => {
    dispatch(getPosts(userI));
  }, []);
  // const post= posts.find(el=>el.userId==userI)
  return (
    <div style={{ margin: "100px 12%" }}>
      <LinkContainer
        to={`/`}
        style={{
          width: 50,
          cursor: "pointer",
          display: "block",
          marginLeft: "auto",
        }}
      >
        <img src="http://cdn.onlinewebfonts.com/svg/img_68649.png"></img>
      </LinkContainer>
      <h4>Posts</h4>

      {posts.map((el) => (
        <Posts post={el} key={el.id} />
      ))}
      {/* {posts.map((el) =>
        el.userId == userI ? <Posts post={el} key={el.id} /> : null
      )} */}
    </div>
    // <div style={{margin:'100px'}}>
    //   {<div>{post.title}</div>}
    // </div>
  );
};

export default UserPosts;
