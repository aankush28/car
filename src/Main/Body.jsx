import React from 'react'
import './Body.css'
import { createMuiTheme } from '@material-ui/core/styles';
import PostAddIcon from '@material-ui/icons/PostAdd';
import VoiceOverOffIcon from '@material-ui/icons/VoiceOverOff'; 
import WorkOffIcon from '@material-ui/icons/WorkOff';
import PageviewIcon from '@material-ui/icons/Pageview';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import BodyForm from './BodyForm';
/* import Image from './Main/into.png'; */

export default function Body() {
    return (
        <div>
            <div className="body">
             <h1 className="Body_head">Post Your Ad
             </h1><p className="Body_head_p">Sub Heading</p>
             
            <div className="Body_head_icons">
            <img width="450" src="intro.png" alt="" srcset=""/>
            <Container fixed>
                <PostAddIcon   style={{ fontSize: 60}}/>
                
                <VoiceOverOffIcon  className="Body_head_icon" style={{ fontSize: 60}}/>
                
                <WorkOffIcon  className="Body_head_icon" style={{ fontSize: 60}}/>
               <p  className="body_icon_name"> &nbsp;  Post Ad  <samp className="Body_head_icon_p">VoiceOverOff</samp> <samp className="Body_head_icon_p">WorkOff</samp></p>
                <br/>
                <PageviewIcon  style={{ fontSize: 60}}/>
                
                <LocalAtmIcon className="Body_head_icon" style={{ fontSize: 60}}/>
                
                <HowToRegIcon className="Body_head_icon" style={{ fontSize: 60}}/>
                <p  className="body_icon_name"> &nbsp;Pageview<samp className="Body_head_icon_p"> &nbsp;&nbsp;&nbsp;&nbsp;LocalAtm</samp> <samp className="Body_head_icon_p">HowToReg</samp></p>
                </Container>
            </div>
            <br/><br/><br/>
            <h2>List your ad in 3 simple steps</h2>
            <br/><br/><br/>
               
            <BodyForm/>














             </div>
        </div>
    )
}
