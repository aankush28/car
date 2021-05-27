import React from 'react'
import TextField from '@material-ui/core/TextField';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import { Grid } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import clsx from 'clsx';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import Tooltip from '@material-ui/core/Tooltip';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
    
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#175b9f"
    }
  },
}));
  
export default function FormSetup2() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    });
  
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  
    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    return (
        <div>
          {/* -------------------------Insurance *------------------------------------------------     */}
            <p>INSURANCE *</p>
            <FormControl component="fieldset">
      
      <RadioGroup  row aria-label="gender" name="row-radio-buttons-group">
      <Button  variant="outlined" size="small"style={{textTransform: 'none',backgroundColor: '#FFFFFF',width: 'auto',height:'45px'}}> <FormControlLabel  value="Comprehensive" control={<Radio />} label="Comprehensive" /></Button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant="outlined" size="small"style={{textTransform: 'none',backgroundColor: '#FFFFFF',width: 'auto',height:'45px'}}><FormControlLabel value="Comprehensive+Zero Dep" control={<Radio />} label="Comprehensive+Zero Dep" /></Button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant="outlined" size="small"style={{textTransform: 'none',backgroundColor: '#FFFFFF',width: 'auto',height:'45px'}}><FormControlLabel value="Third Party" control={<Radio />} label="Third Party" /></Button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant="outlined" size="small"style={{textTransform: 'none',backgroundColor: '#FFFFFF',width: 'auto',height:'45px'}}><FormControlLabel value="Expired" control={<Radio />} label="Expired" /></Button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     
      </RadioGroup>
    </FormControl>
    {/* -------------------------Manufacturer Warranty *------------------------------------------------     */}
    <br/><br/><p>MANUFACTURER WARRANTY *</p>
    <FormControl component="fieldset">
      
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
      <Button variant="outlined" size="small"style={{textTransform: 'none',backgroundColor: '#FFFFFF',width: '135px',height:'45px'}}> <FormControlLabel  value="Available" control={<Radio />} label="Available" /></Button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant="outlined" size="small"style={{textTransform: 'none',backgroundColor: '#FFFFFF',width: 'auto',height:'45px'}}><FormControlLabel value="Not Available" control={<Radio />} label="Not Available" /></Button>
     
      </RadioGroup>
    </FormControl>
    {/* -------------------------Extended warranty *------------------------------------------------     */}
    <br/><br/><p>EXTENDED WARRANTY *</p>
    <FormControl component="fieldset">
      
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
      <Button variant="outlined" size="small"style={{textTransform: 'none',backgroundColor: '#FFFFFF',width: '135px',height:'45px'}}> <FormControlLabel  value="Available" control={<Radio />} label="Available" /></Button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant="outlined" size="small"style={{textTransform: 'none',backgroundColor: '#FFFFFF',width: 'auto',height:'45px'}}><FormControlLabel value="Not Available" control={<Radio />} label="Not Available" /></Button>
     
      </RadioGroup>
    </FormControl>
    {/* -------------------------------Kms Driver *------------------------------------------------     */}
    <br/><br/><p>KMS DRIVEN *</p>
    <FormControl style={{ width: '135px' }} size="small" className={clsx(classes.margin, classes.textField,classes.root)} variant="outlined">
          <OutlinedInput
          
           size="small"
          style={{width: 310,backgroundColor: '#FFFFFF'}}
            id="outlined-adornment-weight"
            value={values.weight}
            onChange={handleChange('weight')}
            endAdornment={<InputAdornment position="end">KMS</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            labelWidth={0}
          />
    
        </FormControl>
        {/* -------------------------REGISTRATION number *------------------------------------------------     */}
       <br/><br/><p>REGISTRATION NUMBER *</p>
       <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
          
          <TextField
          className={classes.root}
          id="outlined-textarea"
          style={{backgroundColor: '#FFFFFF' }}
          size="small"
          multiline
          variant="outlined"
        /> 
          </Grid>
          <Grid item><Tooltip title="“The car registration number will not be displayed in ad”" interactive>
           <InfoOutlinedIcon/>
           </Tooltip>
          </Grid>
        </Grid>
        <FormHelperText id="outlined-weight-helper-text">Example: KA01AA1234</FormHelperText>
      </div>
      {/* -------------------------Expected Prich *------------------------------------------------     */}
      <br/><br/><p>EXPECTED PRICE *</p>
       <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
          
          <TextField
          className={classes.root}
          id="outlined-textarea"
          style={{ backgroundColor: '#FFFFFF' }}
          size="small"
          multiline
          variant="outlined"
        /> 
          </Grid>
          <Grid item>
            <FormHelperText id="outlined-weight-helper-text">Example: KA01AA1234</FormHelperText>
          </Grid>
        </Grid>
        {/* -------------------------Description*------------------------------------------------     */}
       <br/><br/><p>DESCRIPTION </p>
       <TextField
         className={classes.root}
         style={{ width: '520px',backgroundColor: '#FFFFFF' }}
          multiline
          rows={5}
          columns={50}
          
          
          variant="outlined"
        />
       <FormHelperText id="outlined-weight-helper-text">Do not enter your phone number, email address or website links</FormHelperText>
       
      </div>
      {/* -------------------------Upload car photos *------------------------------------------------     */}
      <br/><br/><p>UPLOAD CAR PHOTOS</p>
      
      <AddAPhotoIcon style={{ fontSize: 60 }}/><AddAPhotoIcon style={{ fontSize: 60 }}/><AddAPhotoIcon style={{ fontSize: 60 }}/><AddAPhotoIcon style={{ fontSize: 60 }}/><AddAPhotoIcon style={{ fontSize: 60 }}/><AddAPhotoIcon style={{ fontSize: 60 }}/>
      <br/>
      <AddAPhotoIcon style={{ fontSize: 60 }}/><AddAPhotoIcon style={{ fontSize: 60 }}/><AddAPhotoIcon style={{ fontSize: 60 }}/><AddAPhotoIcon style={{ fontSize: 60 }}/><AddAPhotoIcon style={{ fontSize: 60 }}/><AddAPhotoIcon style={{ fontSize: 60 }}/>
       <input
       
          id="upload-photo"
          name="upload-photo"
          type="file"
        />
        </div>
    )
}
