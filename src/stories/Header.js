import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import Button, { SalesButton } from '../Components/Button'

function Header({ title, darkMode }) {
  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s900-c-k-c0x00ffffff-no-rj'
          alt=''
        />
      </div>
      {title && <h2>{title}</h2>}
      <div className='header__right'>
        <Button darkMode={darkMode}>Login</Button>
        <Button>Register</Button>
        <SalesButton>BUY NOW</SalesButton>
      </div>
      <div className='header__right--mobile'>
        <MenuIcon />
      </div>
    </div>
  )
}

export default Header
