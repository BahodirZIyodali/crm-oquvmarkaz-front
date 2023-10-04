import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { toast } from "react-toastify";
import { Chart } from 'chart.js/auto';
import HomeCard from '../components/HomeCard'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar';

const Home = () => {

  // Bar Chart
  const labels = ["January", "February", "March", "April", "May"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Jami o'quvchilar",
        backgroundColor: "rgb(50, 153, 249)",
        borderColor: "rgb(255, 99, 132)",
        data: [170, 200, 185, 240, 280, 300],
      },
      {
        label: "Tark etganlar",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [25, 20, 12, 25, 40, 48],
      },
    ],
  };

  let [teachers, teacherState] = useState(0);
  let [student, studentState] = useState(0);
  let [group, groupState] = useState([]);
  useEffect(() => {
    const getTeachers = async () => {
      let data = await axios.get(`/teachers`);
      teacherState(data.data.length);
    };
    getTeachers();
    const getStudent = async () => {
      let data = await axios.get(`/student`);
      studentState(data.data.length);
    };
    getStudent();
    const getCourse = async () => {
      let data = await axios.get(`/group`);
      groupState(data.data.length);
    };
    getCourse();
  }, []);
  console.log(group);
  console.log(teachers);
  console.log(student);
  return (
    <div className="d-flex">
      <Sidebar />
      <main className="homeMainSide">
        <Navbar title="Xisobot"/>
        <div className="homeCardsWrapper p-5">
          <HomeCard title="Jami o'quvchilar soni:" number={student} />
          <HomeCard title="O'qituvchilar soni:" number={teachers} />
          <HomeCard title="Jami guruhlar soni:" number={group} />
        </div>
        <div>
          <h2 className='text-center'>Aprel oyi bo'yicha statistika</h2>
          <Bar data={data} />
        </div>
      </main>
    </div>
  );
}

export default Home