import React from "react";
import PropTypes from "prop-types";

PostList.propTypes = {
  postList: PropTypes.array,
};
PostList.defaultProps = {
  postList: [],
};
function PostList(props) {
  let { postList, string } = props;
  console.log("check type", typeof postList);
  return (
    <>
      <ul>
        {postList.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <div>{string}</div>
    </>
  );
}

export default PostList;
