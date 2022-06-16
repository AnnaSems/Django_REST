import React from "react";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
    return (
        <tr>
            <td><Link to={`project/${project.project_name}`}>{project.project_name}</Link>
            </td>
            <td>
                {project.users}
            </td>
        </tr>
    )
}

const ProjectsList = ({ projects }) => {
    return (
        <table>
            <th>Project_name
            </th>
            <th>
                Users
            </th>
            {projects.map((project) => <Project project={project} />)}
        </table>
    )
}

export default ProjectsList