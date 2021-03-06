import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles( () => ({
  formContainer:{  
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none'
  }, 
  customizeAppBar:{
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  formTitle:{
    backgroundColor:'#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },
  
}));

const idSelection = (campuses) => {
  let menu = campuses.map( (campus) => {
    return (
      <option key = {campus.id} value = {campus.id}>
        {campus.name}
      </option>
    );
  })
  return menu;
}

const button = (campuses) => {
  if (!campuses.length) {
    return (
      <div> 
        <Button variant = "contained" color = "primary" type = "submit" disabled> Submit </Button>
  
        <h3> There are no campuses in the database. </h3>
      </div>
    );
    

  }
  return <Button variant = "contained" color = "primary" type = "submit" > Submit </Button>
  
}

const NewStudentView = (props) => {
  const {handleChange, handleSubmit, allCampuses} = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.formContainer}>
        <div className={classes.formTitle}>
          <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
            New Student
          </Typography>
        </div>
        <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
          <label style= {{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
          <input type="text" name="firstName" required onChange ={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>
          <input type="text" name="lastName" required onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}> Campus: </label>
          <select name = "campusId"  onChange = {(e) => handleChange(e)}>
            {idSelection(allCampuses)}
          </select>
          <br/>
          <br/> 

          <label style={{color:'#11153e', fontWeight: 'bold'}}> Email: </label>
          <input type="email" name="email" required onChange={(e) => handleChange(e)} />
          <br/>
          <br/>
               
          <label style = {{color: '#11153e', fontWeight: 'bold'}}> GPA: </label>
          <input type = 'number' min = "0.0" max = "4.0" step = "0.1" name = 'gpa' onChange = { (e) => handleChange(e)} />
          <br />
          <br />

          {button(allCampuses)}
          <br/>
          <br/>
        </form>
        </div>
        
        <br />
        <br />
        <Link to="/"> <button> Home </button> </Link>
        <Link to="/campuses"> <button>All Campuses </button> </Link>
        <Link to="/students"> <button> All Students </button></Link>
      </div>
    
  )
}

export default NewStudentView;