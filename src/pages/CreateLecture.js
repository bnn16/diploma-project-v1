import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { saveLecture } from "../constants/firebaseConfig";

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
    ],
}

const  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]

function CreateLecture() {
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");
    const [abstract, setAbstract] = useState("");
    const [razdel, setRazdel] = useState("");
    const [fullText, setFullText] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        let input = {
            heading,
            subHeading,
            abstract,
            razdel,
            fullText
        }
        saveLecture(input);
    };
  
    return (
      <>
        <center>
          <form onSubmit={handleSubmit}>
            <h1 className="title" style={{ color: "red" }}>
              Create New Lecture
            </h1>
            <div className="input">
                <label>Heading</label> &nbsp;
              <input
                type="text"
                required
                placeholder="What do you need to do today?"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
              />
              <br/>
              <label>Sub Heading</label> &nbsp;
              <input
                type="text"
                required
                placeholder="What do you need to do today?"
                value={subHeading}
                onChange={(e) => setSubHeading(e.target.value)}
              />
              <br/>
              <label>Abstract</label> &nbsp;
              <input
                type="text"
                required
                placeholder="What do you need to do today?"
                value={abstract}
                onChange={(e) => setAbstract(e.target.value)}
              />
              <br/>
              <label>Razdel</label> &nbsp;
              <input
                type="text"
                required
                placeholder="What do you need to do today?"
                value={razdel}
                onChange={(e) => setRazdel(e.target.value)}
              />
              <br/>
              <label>Full Lecture</label> &nbsp;
              <ReactQuill theme="snow" value={fullText} onChange={setFullText} modules={modules} formats={formats}></ReactQuill>
              <br/>
              <button type="submit">Save</button>
            </div>
          </form>
        </center>
      </>
    );
  }
export default CreateLecture;

