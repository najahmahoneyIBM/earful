import React from 'react';
import "./topbar.css"
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import ContactPageIcon from '@mui/icons-material/ContactPage';

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className='logo'>Cinema Lounge</span>
                </div>
                <div className="topRight">
                    <div className="topbarIcon">
                        <HomeIcon />
                    </div>
                    <div className="topbarIcon">
                        <ContactPageIcon />
                    </div>
                    <div className="topbarIcon">
                        <LogoutIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}
