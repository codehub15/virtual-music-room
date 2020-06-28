import React, { useState, useEffect, useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'
import AuthContext from '../context/authContext'
import '../style/Project.scss'
import imgDeco1 from '../img/monkey-2.png'
import imgDeco2 from '../img/monkey-1.png'


export default function Projects(props) {
    const { isLoggedIn, token } = useContext(AuthContext)
    const [name, setName] = useState("");
    const [projects, setProjects] = useState([]);
    const fetchProjects = () => {
        fetch("http://localhost:5000/projects", {
            headers: {
                'x-auth': token,
            },
        })
            .then(res => res.json())
            .then(data => {
                setProjects(data.projects)
            });
    }

    useEffect(() => {
        fetchProjects();
    }, [token]);

    if (!isLoggedIn) {
        return <Redirect to="/login" />;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        await fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-auth': token,
            },
            body: JSON.stringify({ name })
        });

        setName("");
        fetchProjects();
    }

    return (
        <div className="projects-container">
            <h2>- All Projects -</h2>
            <div className="projects-container-inner">


                <ul>
                    {
                        projects.map((project) => (
                            <li key={project._id}>
                                <Link to={"/projects/" + project._id} className="middle">
                                    {project.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>



                <form onSubmit={handleSubmit} >
                    <img src={imgDeco1} alt="img" className="img-deco img-deco-one" />
                    <input
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value)
                        }}
                        type="text"
                    />

                    <button type="submit" className="btn-style">Create project</button>
                    <img src={imgDeco2} alt="img" className="img-deco img-deco-two" />
                </form>
            </div>
        </div>
    )
}