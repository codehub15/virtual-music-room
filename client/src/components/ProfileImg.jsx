import React, { useState, useContext, useEffect, useRef } from 'react'
import AuthContext from '../context/authContext'
import { FilePond, File, registerPlugin } from "react-filepond"
import FilePondPluginImagePreview from "filepond-plugin-image-preview"
// import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation"
// import FilePondPluginImageResize from 'filepond-plugin-image-resize'
// import FilePondPluginFileEncode from 'filepond-plugin-file-encode'
import "filepond/dist/filepond.min.css"
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css"

registerPlugin(
    FilePondPluginImagePreview
)

export default function ProfileImgUploader() {
    const { userId } = useContext(AuthContext)

    const [profileImg, setProfileImg] = useState([])
    console.log("profileImg:", profileImg)

    // const [profile, setProfile] = useState([])
    // console.log("profile:", profile)

    const [image, setImage] = useState({ img: '' })
    // const [loading, setLoading] = useState(false)

    // const [imgName, setImgName] = useState(null)
    // console.log("imgName:", imgName)

    // const myPondRef = useRef(null);
    // const [files, setFiles] = useState([]);


    const arrayBufferToBase64 = (buffer) => {
        let binary = '';
        let bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };


    const uploadHandler = async (e) => {
        e.preventDefault();
        const userData = {
            profileImg: profileImg,
            imgName: profileImg.name,
            imgType: profileImg.type,
            userId: userId
        };
        const options = {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/json'
                "Content-Type": "multipart/form-data"
            },
            body: JSON.stringify(userData)
        };
        console.log("user data:", userData)
        const response = await fetch('http://localhost:5000/users/upload', options);
        const data = await response.json();

        if (data.success) {
            alert("Profile image has been uploaded.")
        } else {
            alert("something went wrong")
        }

        // fetch('http://localhost:5000/users/upload',{ method: 'POST'})
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log("data:", data)
        //         let base64Flag = 'data:image/jpeg;base64,';
        //         let imageStr = arrayBufferToBase64(data.img.data.data);
        //         setImage({ img: base64Flag + imageStr })
        //     })
    }


    // useEffect(function () {
    //     // calling setOptions
    //     console.log(myPondRef.current._pond.setOptions);
    // });




    return (
        <div className="profile-img-upload">
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



            <FilePond
                name="profile"
                files={profileImg}
                onupdatefiles={setProfileImg}
                server="http://localhost:5000/users/upload"
                maxFiles={1}
                className="filepath"
            />

            {/** 
            ref={myPondRef}
    
            {
                loading ? (
                    <h3>Loading...</h3>
                ) : (
                        <img src={profileImg} style={{ width: '300px' }} />
                    )
            }
            */}
        </div>
    )
}
