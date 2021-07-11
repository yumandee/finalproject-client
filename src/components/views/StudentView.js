import { Link } from 'react-router-dom'
const StudentView = (props) => {
  const { student } = props;
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
    </div>
  );

};

export default StudentView;