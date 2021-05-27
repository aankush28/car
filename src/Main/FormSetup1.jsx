import React from 'react'
import './Form.css'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
    
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#175b9f"
    }
  },
}));
export default function FormSetup1() {
 

  const classes = useStyles();
    const top100Films = [
        { title: 'Bangalore'}]
        const top101Films = [
            { title: '2021'},]
            const [value, setValue] = React.useState('Petrol');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

    return (
/////////////////////////////////////////////////////CITY *////////////////////////////////////////////////////
        <div><p>CITY *</p>
               <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
          <Autocomplete
className={classes.root}
      id="combo-box-demo"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      style={{ width: 295,backgroundColor: '#FFFFFF' }}
      renderInput={(params) =>  <TextField {...params} placeholder="Select City" variant="outlined" size="small" />}
    />
           
          </Grid>
          <Grid item>
          <Tooltip title="“Currently, the service is available only in Bangalore”" interactive>
            <InfoOutlinedIcon/>
            </Tooltip>
          </Grid>
        </Grid>
        
    
{/* -----------------------------------------------YEAR *------------------------------------------------     */}
               <br/> <p>YEAR *</p>
                <Autocomplete
                className={classes.root}
      id="combo-box-demo"
      options={top101Films}
      getOptionLabel={(option) => option.title}
      style={{ width: 295,backgroundColor: '#FFFFFF' }}
      renderInput={(params) =>  <TextField {...params} placeholder="Select Year" variant="outlined" size="small"  />}
    />
    {/* -----------------------------------------------Make *------------------------------------------------     */}
            <br/> <p>MAKE *</p>
                <Autocomplete
                className={classes.root}
      id="combo-box-demo"
      options={top102Films}
      getOptionLabel={(option) => option.title}
      style={{ width: 295,backgroundColor: '#FFFFFF' }}
      renderInput={(params) =>  <TextField {...params} placeholder="Select Make" variant="outlined" size="small" />}
    />
    {/* -----------------------------------------------Model *------------------------------------------------     */}
    <br/> <p>MODEL *</p>
                <Autocomplete
                className={classes.root}
      id="combo-box-demo"
      options={top103Films}
      getOptionLabel={(option) => option.title}
      style={{ width: 295,backgroundColor: '#FFFFFF' }}
      renderInput={(params) =>  <TextField {...params} placeholder="Select Model" variant="outlined" size="small" />}
    />
    {/* -----------------------------------------------Fule *------------------------------------------------     */}
    <br/> <p>FULE *</p>
    <FormControl component="fieldset">
      
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
      <Button  variant="outlined" size="small"style={{textTransform: 'none',backgroundColor: '#FFFFFF',width: '135px',height:'45px'}}> <FormControlLabel  value="Petrol" control={<Radio />} label="Petrol" /></Button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant="outlined" style={{textTransform: 'none',backgroundColor: '#FFFFFF',width: '135px',height:'45px'}}><FormControlLabel value="Diesel" control={<Radio />} label="Diesel" /></Button>
     
      </RadioGroup>
    </FormControl>
    {/* ----------------------------------------------Transmision*------------------------------------------------     */}
   <br/><br/> <p>TRANSMISION *</p>
    <FormControl component="fieldset">
      
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
      <Button variant="outlined" size="small"style={{textTransform: 'none',backgroundColor: '#FFFFFF',width: '135px',height:'45px'}}> <FormControlLabel  value="Petrol" control={<Radio />} label="Automatic" /></Button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant="outlined" size="small"style={{textTransform: 'none',backgroundColor: '#FFFFFF',width: '135px',height:'45px'}}><FormControlLabel value="Diesel" control={<Radio />} label="Manual" /></Button>
     
      </RadioGroup>
    </FormControl>
    {/* -----------------------------------------------VARIANT *------------------------------------------------     */}
    <br/><br/><p>VARIANT *</p>
    
    <Autocomplete
    className={classes.root}
      id="combo-box-demo"
      options={top104Films}
      getOptionLabel={(option) => option.title}
      style={{ width:295 ,backgroundColor: '#FFFFFF'}}
      renderInput={(params) =>  <TextField {...params} placeholder="Select Variant" variant="outlined" size="small" />}
    />
    {/* ----------------------------------------------Number of owner*------------------------------------------     */}
<br/><br/> <p>NUMBER OF OWNERS *</p>
    <FormControl component="fieldset">
      
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
      <Button variant="outlined" size="small"style={{textTransform: 'none',backgroundColor: '#FFFFFF',width: '100px',height:'45px'}}> <FormControlLabel  value="1" control={<Radio />} label="1" /></Button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant="outlined" size="small"style={{textTransform: 'none',backgroundColor: '#FFFFFF',width: '100px',height:'45px'}}><FormControlLabel value="2" control={<Radio />} label="2" /></Button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant="outlined" size="small"style={{textTransform: 'none',backgroundColor: '#FFFFFF',width: '100px',height:'45px'}}><FormControlLabel value="3" control={<Radio />} label="3" /></Button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant="outlined" size="small"style={{textTransform: 'none',backgroundColor: '#FFFFFF',width: '100px',height:'45px'}}><FormControlLabel value="4" control={<Radio />} label="4" /></Button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant="outlined" size="small"style={{textTransform: 'none',backgroundColor: '#FFFFFF',width: '100px',height:'45px'}}><FormControlLabel value="4+" control={<Radio />} label="4+" /></Button>
     
      </RadioGroup>
    </FormControl>
    {/* -------------------------REGISTRATION MONTH & YEAR * *------------------------------------------------     */}
<br/><br/><p>REGISTRATION MONTH & YEAR *</p>
<Grid container spacing={1} alignItems="flex-end">
          <Grid item>
          <Autocomplete
className={classes.root}
      id="combo-box-demo"
      options={top105Films}
      getOptionLabel={(option) => option.title}
      style={{ width: '60px',backgroundColor: '#FFFFFF' }}
      renderInput={(params) =>  <TextField {...params} placeholder="MM" variant="outlined" size="small" />}
    />
           
          </Grid>
          &nbsp;
          <Grid item>
          <Autocomplete
className={classes.root}
      id="combo-box-demo"
      options={top106Films}
      getOptionLabel={(option) => option.title}
      style={{ width: '130px',backgroundColor: '#FFFFFF' }}
      renderInput={(params) =>  <TextField {...params} placeholder="YYYY" variant="outlined" size="small" />}
    />
          </Grid>
        </Grid>

        </div>
    )
}









const top105Films = [
  { title: '01'},
  { title: '02'},
  { title: '03'},
  { title: '04'},
  { title: '05'},
  { title: '06'},
  { title: '07'},
  { title: '08'},
  { title: '09'},
  { title: '10'},
  { title: '11', },
  { title: '12'},
  

];
const top106Films = [
  { title: '2010'},
  { title: '2011', },
  { title: '2012'},
  { title: '2013'},
  { title: '2014'},
  { title: '2015'},
  { title: '2016'},
  { title: '2017'},
  { title: '2018'},
  { title: '2019'},
  { title: '2020'},
  { title: '2021'},

  

];
const top104Films = [
  { title: 'Ford'},
  { title: 'EcoSport (2013-2015) ', },
  { title: 'Titanium 1.5 Ti-VCT AT'},
  

];
const top102Films = [
    { title: 'Maruti Suzuki'},
    { title: 'Ashok Leyland ', },
    { title: 'BMW', },
    { title: 'Bajaj Auto', },
    { title: 'Hyundai Motor',  },
    { title: 'Tata Motor',  },
    { title: "Honda Cars", },
    { title: 'Mahindra',  },
    { title: 'Tvs',},
    { title: 'Ford',  },
    { title: 'Other', },
];

const top103Films = [
    { title: 'Mahindra'},
    { title: 'Voyager ', },

];