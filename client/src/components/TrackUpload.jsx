import React, { useState, useContext } from 'react'
import { FilePond } from "react-filepond"
import AuthContext from '../context/authContext'

import "filepond/dist/filepond.min.css"

export default function TrackUpload(props) {
    const [file, setFile] = useState(null);
    const { token } = useContext(AuthContext)


    return (
        <div className="track-upload-container">
            <FilePond
                name="file"
                files={file}
                onupdatefiles={setFile}
                server={{
                    url: "http://localhost:5000/projects/" + props.projectId + "/upload",
                    process: {
                        headers: {
                            'x-auth': token
                        }}
                }}
                maxFiles={1}
                className="filepath"
            />
        </div>
    )
}
