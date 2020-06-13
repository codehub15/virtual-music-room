import React, { useState, useContext, useEffect, useRef } from 'react'
import AuthContext from '../context/authContext'
import { FilePond, File, registerPlugin } from "react-filepond"

import "filepond/dist/filepond.min.css"

export default function TrackUpload(props) {
    const { userId } = useContext(AuthContext)
    const [file, setFile] = useState(null);
    const [uploadedFile, setUploadedFile] = useState({})

    const handleUpload = (e) => {
        setFile(e.target.files[0]);
        // setFileName(e.target.files[0].name);
    }

    return (
        <div className="track-upload-container">
            <FilePond
                name="file"
                files={file}
                onupdatefiles={setFile}
                server={"http://localhost:5000/projects/" + props.projectId + "/upload"}
                maxFiles={1}
                className="filepath"
            />
        </div>
    )
}
