import React from 'react';
import {  useNavigate } from "react-router-dom";
import Layout from '../components/LayoutPage/Layout';
import { kaLecturesPart1 } from '../constants/kaLecturesPart1.js';
import { getLectures } from '../constants/firebaseConfig';

const Ka = () => {
    getLectures();

  const navigate = useNavigate();
  return (
    <div>
      <button className="createLectureButton" onClick={() => navigate('/create-lecture')}>Create Lecture</button>
      <Layout lectures={kaLecturesPart1} tems="Komp architecture" />
    </div>
  );
};
export default Ka;
