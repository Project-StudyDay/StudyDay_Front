import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import homeImg from '../../assets/images/icons/smile.png';
import ddayImg from '../../assets/images/icons/hourglass.png';
import timetableImg from '../../assets/images/icons/school.png';
import todolistImg from '../../assets/images/icons/todo.png';

export default function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <nav className={styles.navbar}>
        <Link to="/">
          <img src={homeImg} alt="홈" />
        </Link>
        <Link to="/d-day">
          <img src={ddayImg} alt="디데이" />
        </Link>
        <Link to="/timetable">
          <img src={timetableImg} alt="시간표" />
        </Link>
        <Link to="/todo-list">
          <img src={todolistImg} alt="투두리스트" />
        </Link>
      </nav>
    </div>
  );
}
