import React, { useState, useContext, useEffect, useRef } from 'react'
import AuthContext from '../context/authContext'
import { FilePond, File, registerPlugin } from "react-filepond"
import FilePondPluginImagePreview from "filepond-plugin-image-preview"
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation"
import FilePondPluginImageResize from 'filepond-plugin-image-resize'
import FilePondPluginFileEncode from 'filepond-plugin-file-encode'
import "filepond/dist/filepond.min.css"
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css"

registerPlugin(
    FilePondPluginImagePreview
)

export default function ProfileImgUploader(props) {
    const { token } = useContext(AuthContext)

    const [profileImg, setProfileImg] = useState([])

    console.log(props.userId);

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
