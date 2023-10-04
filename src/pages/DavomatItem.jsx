import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import CardLesson from '../components/CardLesson';
import DavomatTable from '../components/DavomatTable';
import Navbar from '../components/Navbar';

const DavomatItem = () => {
  const { group_id } = useParams();
  const [group, setGroup] = useState([]);
  const currentDate = new Date();

  useEffect(() => {
    const getGroups = async () => {
      try {
        const response = await axios.get(`/group/${group_id}`);
        setGroup(response.data);
      } catch (error) {
        console.error('Error retrieving group data:', error);
      }
    };

    getGroups();
  }, [group_id]);

  useEffect(() => {
    const notLessonAttendance = async () => {
      try {
        const dataRes1 = {
          date: `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`,
          group_id: group_id,
        };
        const response = await axios.post('/attendancenot', dataRes1);
        // Handle the response if needed
      } catch (error) {
        console.error('Error posting attendance:', error);
      }
    };

    notLessonAttendance();
  }, [currentDate, group_id]);

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="sd-right w-100">
        <Navbar title="Davomat" />
        <div className="davomat pt-4 ps-5 pe-5">
          <div className="pb-4">
            <h2 className="dv-hedding fw-bold fs-2">Guruh royhati</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              {group.map((g) => (
                <CardLesson key={g.id} groupData={g} />
              ))}
              <h5>Bugun darsga kelmaganlar</h5>
            </div>
            <div className="col-md-8">
              <DavomatTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DavomatItem;
