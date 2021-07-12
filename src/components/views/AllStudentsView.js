import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
  const {students, deleteStudent} = props;
  console.log(students.length)
  if (!students.length) {
    return (
    <div>
      <p>There are no students.</p>
      <Link to={`/newstudent`}>
        <button> Add New Student </button>
      </Link>

      <br />
      <br />
      <Link to="/"> <button> Home </button> </Link>
      <Link to="/campuses"> <button> All Campuses </button></Link>
    </div>
    );
  }
  
  return (
    <div>
      {students.map((student) => {
        let name = student.firstName + " " + student.lastName;
        return (
          <div key={student.id}>
          <Link to={`/student/${student.id}`}>
            <h1>{name}</h1>
          </Link>
          <button onClick={() => deleteStudent(student.id)}>Delete</button>
          </div>
        );
      }
      )}
      <br />
      <Link to={`/newstudent`}>
        <button> Add New Student </button>
      </Link>

      <br />
      <br />
      <Link to="/"> <button> Home </button> </Link>
      <Link to="/campuses"> <button>All Campuses </button> </Link>

    </div>
  );
};


export default AllStudentsView;