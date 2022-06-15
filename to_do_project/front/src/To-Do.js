import React from "react";
import { Link } from "react-router-dom";

const ToDo = ({ dos }) => {
    return (
        <tr>
            <td><Link to={`to-do/${dos.project}`}>{dos.project}</Link>
            </td>
            <td>
                {dos.text}
            </td>
            <td>
                {dos.user}
            </td>
            <td>
                {dos.is_active}
            </td>
            <td>
                {dos.created_date}
            </td>
        </tr >
    )
}

const ToDoList = ({ todo }) => {
    return (
        <table>
            <th>To-Do
            </th>
            <th>
                Text
            </th>
            <th>
                User
            </th>
            <th>
                Выполнено
            </th>
            <th>
                Дата создания
            </th>
            {/* {todo.map((dos) => <Project todo={dos} />)} */}
        </table>
    )
}

export default ToDoList