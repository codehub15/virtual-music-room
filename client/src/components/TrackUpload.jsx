import React, { useState, useContext, useEffect, useRef } from 'react'
import AuthContext from '../context/authContext'
import { FilePond, File, registerPlugin } from "react-filepond"
import FilePondPluginImagePreview from "filepond-plugin-image-preview"
import "filepond/dist/filepond.min.css"
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css"
import axios from 'axios'


registerPlugin(
    FilePondPluginImagePreview
)


export default function TrackUpload() {
    const { userId } = useContext(AuthContext)
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("choose image");
    const [uploadedFile, setUploadedFile] = useState({})

    const handleUpload = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const userData = {
            file: file,
            trackName: file.name,
            trackType: file.type,
            owner: userId
        };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // "Content-Type": "multipart/form-data"
            },
            body: JSON.stringify(userData)
        };
        console.log("user data:", userData)
        const response = await fetch('http://localhost:5000/track', options);
        const data = await response.json();

        if (data.success) {
            alert("Track has been uploaded.")
        } else {
            alert("something went wrong")
        }
    }


    console.log("uploadedFile:", uploadedFile)
    console.log("file:", file)

    return (
        <div className="track-upload-container">
            <form onSubmit={submitHandler} encType="multipart/form-data">
                <input
                    type="file"
                    onChange={handleUpload}
                />
                <label className="img-label">
                    {fileName}
                </label>

                <button type="submit" className="imag-btn">Upload image</button>
            </form>

            {uploadedFile ?
                <img src={uploadedFile.filePath} alt="Profile Picture" />
                :
                null
            }


            {/**
                <FilePond
                name="file"
                files={file}
                onupdatefiles={setFile}
                server={"http://localhost:5000/track"}
                maxFiles={1}
                className="filepath"
            />
                */}
        </div>
    )
}
