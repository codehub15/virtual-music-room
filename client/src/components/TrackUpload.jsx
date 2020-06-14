import React, { useState } from 'react'
import { FilePond } from "react-filepond"

import "filepond/dist/filepond.min.css"

export default function TrackUpload(props) {
    const [file, setFile] = useState(null);


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
