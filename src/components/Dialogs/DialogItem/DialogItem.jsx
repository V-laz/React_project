import React from "react";
import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

  let path = 'dialog/' + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path} className={activeLink => activeLink.isActive ? s.active : s.item}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;