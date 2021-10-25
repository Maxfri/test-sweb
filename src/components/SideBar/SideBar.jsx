import React from 'react'
import { NavLink } from 'react-router-dom';

import './SideBar.css'
import logo from '../../assets/images/logo.png'
import user from '../../assets/images/User.png'
import vps from '../../assets/images/Group.png'
import domens from '../../assets/images/icon_domens.png'
import help from '../../assets/images/icon_help.png'

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="side-bar-logo">
        <img src={logo} alt="Logo" />
      </div>

      <nav className="side-bar-list">
        <li className="side-bar-item">
          <NavLink
            exact
            to="/account"
            activeClassName="active"
            className="side-bar-link"
          >
            <img src={user} alt="account" />
            Аккаунт
          </NavLink>
        </li>
        <li className="side-bar-item">
          <NavLink
            to="/vps"
            activeClassName="active"
            className="side-bar-link"
          >
            <img src={vps} alt="vps" />
            VPS
          </NavLink>
        </li>
        <li className="side-bar-item">
          <NavLink
            to="/domains"
            activeClassName="active"
            className="side-bar-link"
          >
            <img src={domens} alt="domains" />
            Домены
          </NavLink>
        </li>
        <li className="side-bar-item">
          <NavLink
            to="/logbook"
            activeClassName="active"
            className="side-bar-link"
          >
            <img src={help} alt="logbook" />
            Бортовой журнал
          </NavLink>
        </li>
      </nav>
    </div>
  )
}

export default SideBar
