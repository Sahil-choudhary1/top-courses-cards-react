import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler(){
    //logic
    if(likedCourses.includes(course.id)){
        //pehle se like pada hua tha
        setLikedCourses((prev) => prev.filter( ((cid)=> cid !== course.id) ) );
        toast.warning("like removed");
    }
    else{
        //pehle se like nahi hua hai
        if(likedCourses.lenght === 0){
            setLikedCourses([course.id]);
        }
        else{
            //non-empty pehle se
            setLikedCourses((prev) => [...prev, course.id]);
        }
        toast.success("Liked successfully");
    }
  }

  return (
    <div className="w-[300px] rounded-md bg-slate-800 overflow-hidden">
      <div className="relative">
        <img src={course.image.url} alt="" />
        <div className="rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center">
          <button onClick={clickHandler}>
            {
                likedCourses.includes(course.id) ? 
                (<FcLike  fontSize={"1.65rem"}/>) : 
                (<FcLikePlaceholder  fontSize={"1.65rem"}/>)
            }
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
        <p className="text-white mt-2">
        {
          course.description.length > 100 ? (course.description.substring(0, 100) + "...") : (course.description)
        }
        </p>
      </div>
    </div>
  );
};

export default Card;
