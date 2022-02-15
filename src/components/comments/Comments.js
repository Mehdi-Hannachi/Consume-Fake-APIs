import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useParams } from "react-router-dom";
import { getComments } from "../../redux/actions/userActions";
import CommentsCard from "./CommentsCard";

const Comments = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments(postI));
  }, []);

  const { userI, postI } = useParams();
  const comment = useSelector((state) => state.commentsReducer.comments);
  return (
    <>
      <div style={{ margin: "150px 50px" }}>
        <LinkContainer
          to={`/userPosts/${userI}`}
          style={{
            width: 50,
            cursor: "pointer",
            display: "block",
            marginLeft: "auto",
          }}
        >
          <img src="http://cdn.onlinewebfonts.com/svg/img_68649.png"></img>
        </LinkContainer>
        {comment.map((el) => (
          <CommentsCard comments={el} key={el.id} />
        ))}
      </div>
    </>
  );
};

export default Comments;
