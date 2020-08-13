// https://uidesigndaily.com/posts/sketch-upload-file-share-day-709
import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import UploadItem from './UploadItem';
import ducoment from '../assets/icon/document.png';


const style = {
    width: '320px'
}

const Upload = () => {

    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const [uploadLists, setUploadLists] = useState([]);
    const [progress, setProgress] = useState(0);
    
    const dndUploadfile = (event) => {
        console.log(event.target.files[0].name)
        const evtTarget = {
            progress: 0,
            filename: event.target.files[0].name
        }
        setProgress(0)
        setUploadLists([...uploadLists, evtTarget])

        const file = event.target.files;
        const formData = new FormData();
        formData.append(event.target.files[0].name, file[0])

        axios.post('http://localhost:8080/api/upload', formData, {
            cancelToken: source.CancelToken,
            onUploadProgress: function (progressEvent) {
                setProgress((progressEvent.loaded * 100) / progressEvent.total);
                evtTarget.progress = (progressEvent.loaded * 100) / progressEvent.total;
            }
        })
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        console.log(uploadLists, progress);
    }, [uploadLists, progress])

    const changeBackground = (evt) => {
        evt.target.parentElement.classList.add('bg-gray-100');
    }

    const removeBackground = (evt) => {
        evt.target.parentElement.classList.remove('bg-gray-100');
    }

    return <div className="min-w-320 mx-auto bg-white shadow-lg rounded-md p-6" style={style}>
        <div className="flex justify-between mb-6">
            <p className="font-bold">Upload files to attach</p>
            <span>X</span>
        </div>
        <div className="border-4 border-dashed rounded-md relative py-12 text-center mb-6  active:border-dotted active:bg-gray-100 hover:bg-gray-100" onDragOver={(event)=>{ changeBackground(event)}} onDragLeave={(event)=>{ removeBackground(event) }} >
            <p>Drag and drop files here or <a href="/">browse</a></p>
            <input className="absolute left-0 top-0 opacity-0 w-full h-full z-0" type="file" name="upload" onChange={(event) => { dndUploadfile(event)}} />
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
                            uploadLists.map((list, index) => <UploadItem item={list} key={list.filename} />  )
                        }
                    </ul>
            }
        </div>
    </div>
}

export default Upload;