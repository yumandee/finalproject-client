import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import { makeStyles } from '@material-ui/core/styles';


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
          <input type="text" name="firstName" onChange ={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>
          <input type="text" name="lastName" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          {/* Change to dropdown menu instead! */}
          <label style={{color:'#11153e', fontWeight: 'bold'}}> Campus: </label>
          <select name = "campusId" onChange = {(e) => handleChange(e)}>
            {idSelection(allCampuses)}
          </select>
          {/* <input type="text" name="campusId" onChange={(e) => handleChange(e)} /> */}
          <br/>
          <br/> 

          <label style={{color:'#11153e', fontWeight: 'bold'}}> Email: </label>
          <input type="text" name="email" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <br/>
          <br/>
        </form>
        </div>
      </div>
    
  )
}

export default NewStudentView;