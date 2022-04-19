import React, { useState }  from 'react';
import {  useNavigate } from "react-router-dom";
import Layout from '../components/LayoutPage/Layout';
import { kaLecturesPart1 } from '../constants/kaLecturesPart1.js';
import { getLectures } from '../constants/firebaseConfig';

// TODO
// do not show add,edit,delete buttons if the user does not have the rights to see them

function Ka() {
  const [lecturesArr, setLecturesArr] = useState([]);
  const [loading, setLoading] = useState(true)
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
  if(!loading){
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
