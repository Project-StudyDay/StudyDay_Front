import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/d-day'>D-day</Link>
            <Link to='/timetable'>Timetable</Link>
            <Link to='/todo-list'>Todo-list</Link>
        </nav>
    );
}