import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const DavomatTable = () => {
  let { group_id } = useParams();
  let [student, studentsState] = useState([]);
  let [checkBtn, checksBtnState] = useState(true);
  let [Check, setCheck] = useState(true);

  useEffect(() => {
    const getStudents = async () => {
      let data = await axios.get(`/student/${group_id}`);
      studentsState(data.data);
    };
    getStudents();
  }, []);
  console.log(student);

  let handleClick = (e) => {
    checksBtnState(!checkBtn);
    console.log(e);
    console.log(123);
  };

  return (
    <>
      <table className="table table-hover">
        <thead className="bg-primary text-white">
          <tr>
            <th>N^</th>
            <th>O'quvchi FISH</th>
            <th>Davomat</th>
          </tr>
        </thead>
        <tbody>
          {console.log(Check)}
          {student?.map((s, idx) => {
            let id = s.student_id;

            return (
              <tr>
                <td>{idx + 1}</td>
                <td>
                  {/* {setCheck({ [s.student_id]: false })} */}
                  {s.student_name} {s.student_surname}
                </td>
                <button
                  onClick={() => setCheck({ ...Check, [s.student_id]: false })}
                >
                  {console.log(Check?.id)}
                  {Check?.id ? (
                    <i className="fa-solid fa-xmark"></i>
                  ) : (
                    <i className="fa-solid fa-check"></i>
                  )}
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="w-100 d-flex justify-content-end">
        <button className="btn btn-primary w-25 m-4">Submit</button>
      </div>
    </>
  );
};

export default DavomatTable;
