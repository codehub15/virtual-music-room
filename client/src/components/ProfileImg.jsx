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

export default function ProfileImgUploader() {
    const { userId } = useContext(AuthContext)
    console.log("user id:", userId)

    const [profileImg, setProfileImg] = useState([])
    console.log("profileImg:", profileImg)


    // const uploadHandler = async (e) => {
    //     e.preventDefault();
    //     fetch('http://localhost:5000/users/upload', { method: 'POST' })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log("data:", data)
    //         })
    // }


    return (
        <div className="profile-img-upload">
            <FilePond
                name="profile"
                files={profileImg}
                onupdatefiles={setProfileImg}
                // server={"http://localhost:5000/users/upload/" + userId}
                server={"http://localhost:5000/users/upload"}
                maxFiles={1}
                className="filepath"
            />
            {/**

            <form encType="multipart/form-data" onSubmit={uploadHandler}>
                <input type="file"
                    name="profile"
                    className="filepath"
                    onChange={(e) => setProfileImg(e.target.files[0])}
                />
                <br />
                <button type="submit">upload image</button>
            </form>
            */}
        </div>
    )
}
