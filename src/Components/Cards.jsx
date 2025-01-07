import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {

  let courses = props.courses;
  let category = props.category;

  const [likedCourses, setLikedCourses] = useState([]);

  // ek array ke anadar ek or array hai usko access karne ke liye do baar foreach loop ka use karenge

function getCourses() {
  if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
          array.forEach((courseData) => {
              allCourses.push(courseData);
          });
      });
      return allCourses;
  }
  else
  {
      return courses[category];
  }
}


return (
  <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
          getCourses().map((course,index) => {
              return <Card key={index} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />;
          })
      }
  </div>
);
};

export default Cards;
