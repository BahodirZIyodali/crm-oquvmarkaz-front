import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";


const CardLesson = (props) => {
  let [student, studentState] = useState([]);
  let location = useLocation();
  let navigate = useNavigate();
  let loc='';
  function locFunc(params) {
    for (let index = 1; index < location.pathname.length; index++) {
      if(location.pathname[index]!=='/'){
        loc += location.pathname[index];
      }
      else{
        return
      }
    }   
  }
  locFunc()
  
  useEffect(() => {
    const getGroups = async () => {
      let data = await axios.get(`/student/${props.groupData.group_id}`);
      studentState(data.data);
    };
    getGroups()
  }, []);
  const handleLok=()=>{
    console.log(123);
   navigate(`/${loc}/${props.groupData.group_id}`);
  }
  return (
    <div onClick={handleLok}  className="dv-card mb-4 text-decoration-none w-100">
      <div className="p-2 text-center text-light dv-card-header">
        <h3>{props.groupData.group_title}</h3>
      </div>
      <div className=" pt-2  ps-3 pe-3 pb-5 ">
        <div className="d-flex pb-4  justify-content-between align-items-center">
          <img
            style={{ objectFit: "cover" }}
            src={props.groupData.teacher_img}
            alt="user img"
          />
          <div>
            <div className="d-flex justify-content-between">
              <h5 className="me-5 fs-5 fw-bold card-p">O'qituvchi:</h5>
              <span>
                <p className="m-0 text-end fs-6 fw-semibold">
                  {props.groupData.teacher_surname}
                </p>
                <p className="m-0 text-end fs-6 fw-semibold">
                  {props.groupData.teacher_name}
                </p>
              </span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0 fs-5 fw-bold card-p">Tell raqam:</h5>
              <p className="m-0 text-end fs-6 fw-semibold">
                +998{props.groupData.teacher_tell}
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex pb-3  justify-content-between">
          <h5 className="m-0 fs-5 fw-bold card-p">Dars kunlari:</h5>
          <p className="m-0 text-end fs-6 fw-semibold">
            {props.groupData.day_lesson}
          </p>
        </div>
        <div className="d-flex pb-3  justify-content-between">
          <h5 className="m-0 fs-5 fw-bold card-p">Dars vaqti:</h5>
          <p className="m-0 text-end fs-6 fw-semibold">
            {props.groupData.time_lesson}
          </p>
        </div>
        <div className="d-flex pb-3  justify-content-between">
          <h5 className="m-0 fs-5 fw-bold card-p">O'quvchilar soni:</h5>
          <p className="m-0 text-end fs-6 fw-semibold">{student?.length}ta</p>
        </div>
        <div className="d-flex pb-3  justify-content-between">
          <h5 className="m-0 fs-5 fw-bold card-p">To'lov qilganlar:</h5>
          <p className="m-0 text-end fs-6 fw-semibold">10 ta</p>
        </div>
      </div>
    </div>
  );
}

export default CardLesson
