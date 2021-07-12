import { Link } from "react-router-dom"

const studentsList = (campus) => {
  if (!campus.students.length) {
    return <h4> There are no students associated with this campus. </h4>
  } 
  
  return (
    <ul>
      {campus.students.map( student => {
        let name = student.firstName + " " + student.lastName;
        let email = student.email;
        let image = student.imageUrl;
        let gpa = student.gpa;
        return (
          <li key={student.id}>
            <Link to={`/student/${student.id}`}>
              <p> {name} </p> 
            </Link>
            <p> {email} </p>
            <p> {image} </p>
            <p> {gpa} </p>

            </li>
          
        );
      })}
    </ul>
  );

}
const CampusView = (props) => {
  const {campus} = props;
  // console.log(campus)
  return (
    <div>      
      <h1>{campus.name}</h1>
      <p>{campus.imageUrl}</p>
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      <h4> Student Directory </h4>
      {studentsList(campus)}
      <Link to={`/editcampus/${campus.id}`}>
        <button> Edit {campus.name} </button>
      </Link>

      <br />
      <br />
      <Link to="/"> <button> Home </button> </Link>
      <Link to="/campuses"> <button>All Campuses </button> </Link>
      <Link to="/students"> <button> All Students </button></Link>
    </div>

  );

};

export default CampusView;