import { Link } from 'react-router-dom'



const StudentView = (props) => {
  const { student, deleteStudent } = props;
  return (
    <div>
      <h1>{student.firstName + " " + student.lastName}</h1>
      <Link to={`/campus/${student.campus.id}`}>
        <h3>{student.campus.name}</h3>
      </Link>
      <h3>{student.email} </h3>
      <h3>{student.gpa} </h3>
      <h3>{student.imageUrl} </h3>
      <Link to = {`/editstudent/${student.id}`}>
        <button> Edit </button>
      </Link> 
      <span> </span>
      <Link to = "/students"> 
        <button onClick = {() => deleteStudent(student.id)}> Delete </button>
      </Link>
      <br />
      <br />
      <Link to="/"> <button> Home </button> </Link>
      <Link to="/campuses"> <button>All Campuses </button> </Link>
      <Link to="/students"> <button> All Students </button></Link>
    </div>
  );

};

export default StudentView;