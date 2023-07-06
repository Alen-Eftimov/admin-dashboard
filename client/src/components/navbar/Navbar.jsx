import React, { useContext } from 'react'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import './navbar.scss'
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {

  const {dispatch, darkMode} = useContext(DarkModeContext)  

  const handleChange = () => {
    dispatch({type:"TOGGLE"});
  };

//   const icon = darkMode === true ? <DarkModeOutlinedIcon className="icon" onClick={handleChange}/> : <LightModeOutlinedIcon className="icon" onClick={handleChange}/>;
  return (
    <div className="navbar">
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder='Search...' />
                <SearchOutlinedIcon />
            </div>
            <div className="items">
                <div className="item">
                    <LanguageOutlinedIcon className="icon" />
                    English
                </div>
                <div className="item">     
                {/* {icon}                */}
                    {darkMode
                     ? (
                        <DarkModeOutlinedIcon className="icon" onClick={handleChange}/>                        
                    ) : (
                        <LightModeOutlinedIcon className="icon" onClick={handleChange}/>                       
                    )}
                </div>
                <div className="item">
                    <FullscreenExitOutlinedIcon className="icon" />
                </div>
                <div className="item">
                    <NotificationsNoneOutlinedIcon className="icon" />
                    <div className="counter">1</div>
                </div>
                <div className="item">
                    <ChatBubbleOutlineOutlinedIcon className="icon" />
                    <div className="counter">2</div>
                </div>
                <div className="item">
                    <ListOutlinedIcon className="icon" />
                </div>
                <div className="item">
                    <img
                     src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                     alt="" 
                     className="avatar" 
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;