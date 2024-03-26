import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styled from "styled-components";

const CommentEditor = () => {
  const [comments, setComments] = useState([]);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleSubmit = () => {
    const contentState = editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    const commentText = rawContent.blocks
      .map((block) => (!block.text.trim() && "\n") || block.text)
      .join("\n");

    setComments((prevComments) =>
      commentText.trim() ? [...prevComments, commentText] : [...prevComments]
    );
    setEditorState(EditorState.createEmpty());
  };

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  return (
    <StyleComment>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
      />
      <button className="send-comment" onClick={handleSubmit}>
        Gửi bình luận
      </button>
      <section className="session-comments">
        <h3>Bình luận</h3>
        <div className="list-review">
          {comments.map((comment, index) => (
            <div className="comment" key={index}>
              <div className="comment-header">
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.X-t3wS_UWWVxI7L3MJKVWAHaLH&pid=Api&P=0&h=180"
                  alt="Profile Picture"
                  className="profile-picture"
                />
                <div>
                  <span className="author-name">Baymax Henry</span>
                  <div className="comment-rating">
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="comment-time">2 mins ago</span>
                  </div>
                </div>
              </div>
              <div className="comment-body">{comment}</div>
            </div>
          ))}
        </div>
        <div className="view-more-review">view more</div>
        {/* render comments  */}
      </section>
    </StyleComment>
  );
};

export default CommentEditor;
const StyleComment = styled.div`
  .demo-wrapper {
    width: 95%;
  }
  .demo-editor {
    padding: 0 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-top: none;
    height: 140px;
    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background: #ccc;
    }

    &::-webkit-scrollbar-thumb {
      background: #12ab7f;
      border-radius: 10px;
    }
  }

  .send-comment {
    border: none;
    padding: 10px 20px;
    background-color: #12ab7f;
    margin: 20px 42px;
    color: white;
    border-radius: 3px;
    float: right;
    &:hover {
      cursor: pointer;
    }
  }
  .session-comments {
    margin-top: 100px;
  }
  .list-review {
    .comment:nth-last-child(1) {
      border-bottom: none;
    }
  }
  .comment {
    border-bottom: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }

  .comment-header {
    display: flex;
    margin-bottom: 10px;
  }

  .profile-picture {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover;
  }

  .author-name {
    font-weight: bold;
  }

  .comment-rating {
    display: flex;
    align-items: center;
  }

  .star {
    color: gold;
  }

  .comment-time {
    margin-left: 5px;
    color: #888;
  }

  .comment-body {
    line-height: 1.4;
  }
  .view-more-review {
    margin: auto;
    font-weight: 600;
    border-bottom: 1px solid blue;
    width: 73px;
    text-align: center;
  }
`;
