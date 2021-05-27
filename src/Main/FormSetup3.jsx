import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
      
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#175b9f"
      }
    },
  }));
  


  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
export default function FormSetup3() {
    const classes = useStyles();
    return (
        <div>
          {/* -------------------------Phone numbre*------------------------------------------------     */}
            <p >PHONE NUMBER *</p>
            <TextField className={'text',classes.root} style={{ width:295,backgroundColor: '#FFFFFF' }}  id="outlined-basic" InputProps={{
            startAdornment: <InputAdornment position="start">+91 - </InputAdornment>,
          }}  variant="outlined" size="small" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="contained" style={{backgroundColor: '#232323', color: '#FFFFFF',}}>Get OTP</Button>

            <br/><br/>
            {/* -------------------------otp *-----------------------------------------------     */}
            <p>OTP *</p>
            <TextField className={classes.root} style={{ width:295,backgroundColor: '#FFFFFF' }} id="outlined-basic"  variant="outlined"  size="small"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="contained" style={{backgroundColor: '#232323', color: '#FFFFFF'}}> Verify OTP</Button>
            <br/><br/>
{/* -------------------------Name *------------------------------------------------     */}
            <p>NAME *</p>
            <TextField className={classes.root} style={{ width:295,backgroundColor: '#FFFFFF' }} id="outlined-basic"  variant="outlined" size="small" />
            <br/><br/>
 {/* -------------------------Email *----------------------------------------------     */}
            <p>EMAIL *</p>
            <TextField className={classes.root}style={{ width:295,backgroundColor: '#FFFFFF' }} id="outlined-basic"  variant="outlined" size="small" />
            <br/><br/>
            {/* -------------------------Password * *----------------------------------------------     */}
            <p>PASSWORD*</p>
            <TextField className={classes.root}style={{ width:295 ,backgroundColor: '#FFFFFF' }} id="outlined-basic"  placeholder="SET A PASSWORD" variant="outlined" size="small"/>
            <br/><br/><br/>
            
            
        </div>
    )
}
