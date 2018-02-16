import React from 'react'
import style from './header.css'
import { Link } from 'react-router-dom'

import FontAwesome from 'react-fontawesome'
import SideNav from './SideNav/sideNav'

const Header = props => {
  const navBars = () => (
    <div className={style.bars}>
      <FontAwesome
        onClick={props.onOpenNav}
        name="bars"
        style={{
          color: '#dfdfdf',
          padding: '10px',
          cursor: 'pointer'
        }}
      />
    </div>
  )
  const logo = () => (
    <Link to="/" className={style.logo}>
      <img src="/images/nba_logo.png" alt="nba logo" />
    </Link>
  )
  return (
    <header className={style.header}>
      <SideNav {...props} />
      <div className={style.headerOpt}>
        {navBars()}
        {logo()}
      </div>
    </header>
  )
}
export default Header
