import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import CardLesson from '../components/CardLesson';
import Navbar from '../components/Navbar';

const Davomat = () => {
  const [group, setGroup] = useState([]);

  useEffect(() => {
    const getGroups = async () => {
      try {
        const response = await axios.get('/group');
        setGroup(response.data);
      } catch (error) {
        console.error('Error retrieving groups:', error);
      }
    };

    getGroups();
  }, []);

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="sd-right w-100">
        <Navbar title="Davomat" />
        <div className="davomat pt-4 ps-5 pe-5">
          <div className="d-flex justify-content-between pb-4">
            <h2 className="dv-hedding fw-bold fs-2">
              Davomat olinadigan guruhni tanlang
            </h2>
            <input
              type="search"
              className="form-control rounded-4 dv-search"
              placeholder="Guruh nomini kiriting"
            />
          </div>
          <div className="row">
            {group.map((g) => (
              <div className="col-md-4" key={g.id}>
                <CardLesson groupData={g} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Davomat;
