import React, { useState }  from 'react';
import {  useNavigate } from "react-router-dom";
import Layout from '../components/LayoutPage/Layout';
import { kaLecturesPart1 } from '../constants/kaLecturesPart1.js';
import { getLectures } from '../constants/firebaseConfig';

function Ka() {
  const [lecturesArr, setLecturesArr] = useState([]);
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
    console.log(tempApp)
    setLecturesArr(lecturesArr)
  });
  //console.log(test)
  const navigate = useNavigate();
  if(lecturesArr.length > 0){
    return (
      <div>
        <button className="createLectureButton" onClick={() => navigate('/create-lecture')}>Create Lecture</button>
        <Layout lectures={lecturesArr} tems="Komp architecture" />
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
