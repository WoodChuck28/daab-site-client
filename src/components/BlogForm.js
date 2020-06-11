import React from "react";
import { useForm } from "react-hook-form";

export default function BlogForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label name="blogTitleLabel" style={{marginLeft:"30px"}}>Blog Title:</label>
      <input name="blogTitle" ref={register} />
      <label name="blogTopicLabel" style={{marginLeft:"30px"}}>Choose Topic:</label>
      <select name="Topic" ref={register}>
        <option value="Science">Science</option>
        <option value="Computer">Computer</option>
        <option value="Fix It">Fix It</option>
      </select>
      <input name="blogContent" ref={register} ></input>
      <input type="submit" />
    </form>
  );
}