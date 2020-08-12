// https://uidesigndaily.com/posts/sketch-upload-file-share-day-709
import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { css } from "@emotion/core";
import ClockLoader from "react-spinners/ClockLoader";
import ducoment from '../assets/icon/document.png';
import stop from '../assets/icon/close.png';

const style = {
    width: '320px'
}

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Upload = () => {

    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const [uploadLists, setUploadLists] = useState([{name:"123"}]);
    const [progress, setProgress] = useState(0);
    
    const dndUploadfile = (event) => {
        console.log("dndUploadfile", event.target.files[0])
        setUploadLists([...uploadLists , event.target.files[0]])

        const file = event.target.files;
        const formData = new FormData();
        formData.append(event.target.files[0].name, file[0])

        axios.post('http://localhost:8080/api/upload', formData, {
            cancelToken: source.CancelToken,
            onUploadProgress: function (progressEvent) {
                setProgress((progressEvent.loaded * 100) / progressEvent.total)
                console.log(progressEvent.loaded, progressEvent.total)
            }
        })
            .then(response => console.log(response))
            .catch(error => console.log(error))

    }

    useEffect(() => {
        console.log(uploadLists, uploadLists.length);
        console.log(progress)
    }, [uploadLists, progress])

    return <div className="min-w-320 mx-auto bg-white shadow-lg rounded-md p-6" style={style}>
        <div className="flex justify-between mb-6">
            <p className="font-bold">Upload files to attach</p>
            <span>X</span>
        </div>
        <div className="border-4 border-dashed rounded-md relative py-12 text-center active:border-dotted mb-6">
            <p>Drag and drop files here or <a href="/">browse</a></p>
            <input className="absolute inset-0 opacity-0" type="file" name="upload" onChange={(event) => { dndUploadfile(event)}} />
        </div>
        <div>
            <p className="font-bold">Upload files</p>
            {
                uploadLists.length === 0 ? 
                    <div className="flex flex-col justify-center items-center p-10">
                        <img src={ducoment} alt="upload Ducoment" />
                        <p className="mt-4 text-center">The files you'll upload will appear here.</p>
                    </div>:
                    <ul>
                        {
                            uploadLists.map((list, index) => <li className="my-2 text-gray-500 flex items-center justify-between" key={list}>
                                <span className="w-1/5">
                                    <ClockLoader
                                        css={override}
                                        size={20}
                                        color={"#7CB33C"}
                                        loading={true} />
                                    
                                </span>
                                <span className="w-3/5 text-center">{list.name}</span>
                                <span className="w-1/5 inline-block">
                                    <img className="w-6 h-6 ml-auto" src={stop} alt="stop" />
                                </span>
                            </li>
                            )
                        }
                    </ul>
            }
        </div>
    </div>
}

export default Upload;