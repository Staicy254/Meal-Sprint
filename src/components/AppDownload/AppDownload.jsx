import React from 'react'

import './AppDownload.css';
import { assets } from '../../assets/assets';
const AppDownload = () => {
  return (
    <React.Fragment>
    <div className='app-download' id='app-download'>
        <p>For Utmost User experience Download <br />Meal Sprint</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
    </React.Fragment>
  )
}

export default AppDownload