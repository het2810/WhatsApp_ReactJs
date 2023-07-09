import React from "react";
import StatusUserCard from "./StatusUserCard";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Status = () => {
    const navigate=useNavigate();
    const { auth, chat, message } = useSelector((store) => store);

    const user=[
      {profile_picture:"https://cdn.pixabay.com/photo/2022/11/19/10/00/tiger-7601733__340.jpg",full_name:"lione"},
      {profile_picture:"https://cdn.pixabay.com/photo/2023/04/11/18/31/duck-7917949__340.jpg",full_name:"aman"}
    ]

  return (
    <div>
      {/* w-100vh flex items-center px-[14vw] py-[7vh] */}
      <div className="flex h-[100vh]">
        {/*-------------------------------Left Part------------------------------- */}
        <div className="left  bg-[#1e262c] lg:w-[30%] w-[30%] px-5">
          <div className="pt-5 h-[15%]">
            <StatusUserCard user={auth.reqUser} />
          </div>
          <hr />
          <div className=" overflow-y-scroll h-[84%] pt-2">
            {user.map((item) => (
              <StatusUserCard user={item} />
            ))}
            {/* <StatusUserCard /> */}
          </div>
        </div>
            {/* -------------------------------Right Part------------------------------- */}
        <div className="relative  w-[70%] bg-[#0b141a]">

        <AiOutlineClose onClick={()=>navigate(-1)} className="text-white cursor-pointer absolute top-5 right-10 text-xl"/>
        </div>
      </div>
    </div>
  );
};

export default Status;
