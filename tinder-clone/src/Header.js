import React from 'react'
import "./Header.css"
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
function Header() {
    return (
        <div className="header">
            <IconButton>
               <PermIdentityIcon fontSize="large" className="header_icon"/> 
            </IconButton>
            <img
            className="header_logo" src="https://scontent.fccu5-1.fna.fbcdn.net/v/t1.0-9/117770582_338131287564237_448818729448987819_n.png?_nc_cat=105&ccb=2&_nc_sid=85a577&_nc_ohc=NhqC0LGrrIcAX-OmMpo&_nc_ht=scontent.fccu5-1.fna&oh=bee68b2d780e7b060477c8acc419d1cc&oe=5FBCEFEC" alt="logo" />
            <IconButton>
                <ForumIcon fontSize="large" className="header_icon" />
            </IconButton>
         </div>
    )
}

export default Header
