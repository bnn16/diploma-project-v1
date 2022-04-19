import React, { useState }  from 'react';
import {  useNavigate } from "react-router-dom";
import Layout from '../components/LayoutPage/Layout';
import { kaLecturesPart1 } from '../constants/kaLecturesPart1.js';
import { getLectures, checkUserRights } from '../constants/firebaseConfig';

function Ka() {
  const [lecturesArr, setLecturesArr] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userAccess, setUserAccess] = useState('student');

  checkUserRights().then(function(data){
    data.forEach((u) => {
      setUserAccess(u.data().userAccess);
    })
  });

  getLectures().then(function(data){
    const tempApp = [];
    data.forEach((doc) => {
      lecturesArr.push(
        {
          id: doc.id,
          razdel: doc.data().razdel,
          heading: doc.data().heading,
          subHeading: doc.data().subHeading,
          abstract: doc.data().abstract,
          fullText: doc.data().fullText,
        }
      )
    });
    setLecturesArr(lecturesArr)
    setLoading(false)
  });
  
  const navigate = useNavigate();
  let createButton = ''
  if(userAccess !== 'student'){
    createButton = <button className="createLectureButton" onClick={() => navigate('/create-lecture')}>Create Lecture</button>
  }

  if(!loading){
    return (
      <div>
        {createButton}
        <Layout lectures={lecturesArr} tems="Komp architecture" userAccess={userAccess}/>
      </div>
    );
  } else {
    return (
      <div>
        Loading...
      </div>
    )
  }

};
export default Ka;
