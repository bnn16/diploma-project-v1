import React, {useState} from 'react';
import { useParams } from "react-router-dom";
import { getLecture } from '../constants/firebaseConfig';

const Lecture = () => {
    const [lecture, setLecture] = useState([]);
    const [loading, setLoading] = useState(true);
    let { lectureId } = useParams(); 

    getLecture(lectureId).then(function(data){
        data.forEach((l) => {
          setLecture(l.data());

        })
        setLoading(false)
    });
    
    if(!loading){
        return (
            <div>
                <h3>{lecture.heading}</h3>
                {lecture.fullText}
            </div>
        );
    } else {
        return(
            <div>Loading...</div>
        )
    }
};
export default Lecture;
