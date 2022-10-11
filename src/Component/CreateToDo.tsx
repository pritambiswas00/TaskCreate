import React, { useRef, useContext } from "react";
import { ToDoContext } from "../store/context.todo";
import { useDispatch, useSelector } from "react-redux";
import { Post, usersAction } from "../reduxStore/Chunks/user.slice";
import "./CreateToDo.scss";
import axios from "axios";

type Props = {};
const CreateToDo: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const titleText = useRef<HTMLInputElement>(null);
  const descriptionText = useRef<HTMLInputElement>(null);
  const formSubmitV2 = async (event: React.FormEvent) => {
    try {
      event.preventDefault();
      const enteredTitleText: string = titleText.current!.value;
      const enteredDescriptionText: string = descriptionText.current!.value;
      if (enteredTitleText.trim().length === 0){
        dispatch(usersAction.addPostError("Please provide valid title"));
        return;
      }
      else if (enteredDescriptionText.trim().length === 0) {
        dispatch(usersAction.addPostError("Please provide valid description"));
        return;
      }
      const post = {
        id: Math.floor(Math.random() * 12322),
        userId: Math.floor(Math.random() * 12322),
        title: enteredTitleText,
        body: enteredDescriptionText,
      } as Post;
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        post,
        { headers: { "Content-Type": "application/json" } }
      );
      dispatch(usersAction.addPost(response.data));
    } catch (error: any) {
      dispatch(usersAction.addPostError(error.message));
    }
  };
  return (
    <form className="createForm" onSubmit={formSubmitV2}>
      <label htmlFor="todo">Create Task</label>
      <input
        type={"text"}
        id="todo"
        placeholder="Enter Title"
        ref={titleText}
      />
      <input
        type={"text"}
        id="todo"
        placeholder="Enter Description"
        ref={descriptionText}
      />
      <button>Save</button>
    </form>
  );
};

export default CreateToDo;
