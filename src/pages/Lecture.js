import React, {useState} from 'react';
import { useParams } from "react-router-dom";
import { getLecture } from '../constants/firebaseConfig';

const Lecture = () => {
    const [lecture, setLecture] = useState([]);
    const [loading, setLoading] = useState(true);
    let { lectureId } = useParams();


    let subject = document.referrer.split("/")
    subject = subject[subject.length - 1]

    getLecture(subject, lectureId).then(function(data){
        data.forEach((l) => {
          setLecture(l.data());
        })
        setLoading(false)
    });

    // deleteLecture(lectureId).then(function(data){
    //     console.log
    //     setLoading(true)
    // });
    
    if(!loading){
        return (
            <div>
                <h3>{lecture.heading}</h3>
                <div dangerouslySetInnerHTML={{ __html: lecture.fullText }} />
            </div>
        );
    } else {
        return(
            <div>Loading...</div>
        )
    }
};
export default Lecture;
