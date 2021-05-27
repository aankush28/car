
import './Body.css'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormSetup1 from './FormSetup1';
import FormSetup2 from './FormSetup2';
import FormSetup3 from './FormSetup3';


const useStyles = makeStyles((theme) => ({
  root: {
     
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
    
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepIcon:{
    color :"#232323"
  }
}));

function getSteps() {
    
  return ['Basic Details', 'Photos and Price', 'Contact Details'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <FormSetup1/>;
    case 1:
      return <FormSetup2/>;
    case 2:
      return <FormSetup3/> ;
    default:
      return 'Thank You';
  }
}

export default function BodyForm() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
  

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="BodyForm_boder">
    <div className={classes.root} >
     
        
      <Stepper  activeStep={activeStep} style={{backgroundColor: ' #f7f6f6', color: '#232323',}}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps} style={{backgroundColor: '#f7f6f6', color: '#232323',}}>
              <StepLabel 
              StepIconProps={{
                classes:{root: classes.stepIcon}
              }}
              {...labelProps} style={{backgroundColor: '#f7f6f6', color: '#232323',}}>{label} </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div >
        {activeStep === steps.length ? (
            
          <div>
            <Typography className={classes.instructions} >
             <h1 className="last_sumit"> You have successfully submitted your ad.</h1><br/>
             <h3 className="last_sumit_h3">Your ad will be published after verification</h3>
            </Typography>

           
          </div>
        ) : (
          <div>
              
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep ===0} onClick={handleBack} className={classes.button}  style={{backgroundColor: '#f7f6f6', color: '#444444',}}>
                Back
              </Button>
              

              <Button
              style={{backgroundColor: '#ff6624', color: '#ffffff',}}
                variant="contained"
                color="primary"
                onClick={handleNext}
                className="ok_button"
                
              >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {activeStep === steps.length - 1 ? 'POST MY AD' : 'Next'}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Button>
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}




