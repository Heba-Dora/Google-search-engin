import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
function Home() {
    return (
        <div className="home">
            <div className="header-top">

                <div className="header-left">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>

                <div className="header-right">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon/>
                    <AccountCircleIcon/>
                </div>

            </div>
            <div className="header-bottom">
                <div className="google-logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt=""/>
                </div>
                <div className="search-input">
                    <SearchIcon className="searchIcon"/>
                    <input type="text"/>
                    <MicIcon/>
                    
                </div>
                <div className="two-buttons">
                    <span>
                    <button className="button-1">Google Search</button>
                    <button className="button-2"> I'm Feeling Lucky</button>
                    </span>
                    
                </div>
            </div>

 
        </div>
    )
}

export default Home
