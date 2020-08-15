// https://uidesigndaily.com/posts/sketch-upload-file-share-day-709
import React, { useState, useEffect } from 'react';

import UploadItem from './UploadItem';
import ducoment from '../assets/icon/document.png';


const style = {
    width: '320px'
}

const Upload = () => {

    const [uploadLists, setUploadLists] = useState([]);
    const [files, setFiles] = useState()
    
    const dndUploadfile = async (files) => {
        
        if(!files) return
        const length = files.length
        const filesContainer = [];

        for (let i = 0; i < length; i++){
            filesContainer.push(files[i])
        }
        console.log(filesContainer)
        setUploadLists([...uploadLists, ...filesContainer])
    }

    useEffect(() => {
        dndUploadfile(files)
    }, [files])

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
            <input multiple className="absolute left-0 top-0 opacity-0 w-full h-full z-0" type="file" name="upload" onChange={ event => setFiles(event.target.files)} />
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
                            uploadLists.map((list, index) => {
                                return <UploadItem item={list} key={list.lastModified} />
                            })
                        }
                    </ul>
            }
        </div>
    </div>
}

export default Upload;