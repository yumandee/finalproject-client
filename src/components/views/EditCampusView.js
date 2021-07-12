import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import { makeStyles } from '@material-ui/core/styles';

import { Link } from "react-router-dom"

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

const descPlaceholder = (campus) => {
   return campus.name + " is a college/university.";
}

const studentsList = (campus, deleteStudent) => {
   if (!campus.students.length) {
      return <h4 style = {{textAlign: 'center'}}> No Associated Students </h4>

   }

   return (
      <ul> 

      {campus.students.map( student => {
         let name = student.firstName + " " + student.lastName;
         return (
            <li id = {"student" + student.id} key = {student.id}>
               <p> 
                  {name}{"\t"}     
                  <Link to={`/editstudent/${student.id}`}>
                     <button> Edit </button>
                  </Link>
                  <span> </span>
                  <button onClick = {() => {
                     handleDeleteStudent(student.id, deleteStudent)
                  }}> Delete </button>
               </p>
            </li>
         );
      })}
      </ul>

   );
}

const handleDeleteStudent = (id, deleteStudent) => {
   deleteStudent(id)
   let li = document.getElementById("student"+id)
   li.parentElement.removeChild(li)
}

const EditCampusView = (props) => {
   const {handleChange, handleSubmit, campus, deleteStudent} = props;
   const classes = useStyles();

   return (
      <div className = {classes.root}>
         <div className = {classes.formContainer}>
            <div className = {classes.formTitle}>
               <Typography style = {{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
                  Edit Campus
               </Typography>
            </div>
            <form style = {{textAlign: 'center'}} onSubmit = { (e) => handleSubmit(e)}>
               <label style = {{color: '#11153e', fontWeight: 'bold'}}> Name: </label>
               <input type = 'text' name = 'name' placeholder = {campus.name} onChange = { (e) => handleChange(e)} />
               <br />
               <br />

               <label style={{color:'#11153e', fontWeight: 'bold'}}> Address: </label>
               <input type="text" name="address" placeholder = {campus.address} onChange={(e) => handleChange(e)} />
               <br/>
               <br/>

               <label style={{color:'#11153e', fontWeight: 'bold'}}> Description: </label>
               <textarea name="description" placeholder = {descPlaceholder(campus)} rows = "4" cols = "25" onChange = { (e) => handleChange(e)} >

               </textarea>
               <br />
               <br />
               
               
               <Button variant="contained" color="primary" type="submit">
                  Submit
               </Button>
               <br />
               <br /> 
            </form>

            <div className = {classes.formTitle}>
               <Typography style = {{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
                  Edit Students
               </Typography>
            </div>

            {studentsList(campus, deleteStudent)}
            <br />

            <div style={{textAlign: 'center'}}> 
               <Link to = "/newstudent"> <button> Add New Student </button> </Link>
            </div>
            <br />
         </div>

         <br />
         <br />
         <Link to="/"> <button> Home </button> </Link>
         <Link to="/campuses"> <button>All Campuses </button> </Link>
         <Link to="/students"> <button> All Students </button></Link>
      </div>
   );
}

export default EditCampusView; 