import React from "react";
import { useSelector, useDispatch } from "react-redux";

const CourserList = () => {
  const courses = useSelector(state => state.courses);
  const dispatch = useDispatch();

  const addCourse = () => {
    dispatch({
      type: "ADD_COURSE",
      courses: "GraphQL"
    });
  };
  return (
    <>
      <ul>
        {console.log(courses)}
        {courses?.map(el => (
          <li>{el}</li>
        ))}
      </ul>
      <button type="button" onClick={addCourse}>
        Add
      </button>
    </>
  );
};

export default CourserList;
