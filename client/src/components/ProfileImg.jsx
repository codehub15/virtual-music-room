import React, { useState } from 'react'
import { FilePond, registerPlugin } from "react-filepond"
import FilePondPluginImagePreview from "filepond-plugin-image-preview"
import "filepond/dist/filepond.min.css"
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css"

registerPlugin(
    FilePondPluginImagePreview
)

export default function ProfileImgUploader(props) {
    const [profileImg, setProfileImg] = useState([])

    return (
        <div className="profile-img-upload">
            <FilePond
                name="profile"
                files={profileImg}
                onupdatefiles={setProfileImg}
                server={"http://localhost:5000/users/" + props.userId + "/upload"}
                maxFiles={1}
                className="filepath"
            />
        </div>
    )
}
