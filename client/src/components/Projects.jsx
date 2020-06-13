import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/authContext'

export default function Projects(props) {
    const [name, setName] = useState("");
    const [projects, setProjects] = useState([]);

    const fetchProjects = () => {
         fetch("http://localhost:5000/projects")
            .then(res => res.json())
            .then(data => {
                setProjects(data.projects)
            });
    }
    
    useEffect(() => {
       fetchProjects();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        await fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name })
        });

        setName("");
        fetchProjects();
    }

    return (
        <div>
            <h2>All Projects</h2>
            <ul>
            {
                projects.map((project) => (
                    <li>
                        <Link to={"/projects/" + project._id}>
                            {project.name}
                        </Link>
                    </li>
                ))
            }
            </ul>
            <form onSubmit={handleSubmit} >
                <input
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value)
                    }}
                    type="text"
                />
                <button type="submit">Create project</button>
            </form>
        </div>
    )
}