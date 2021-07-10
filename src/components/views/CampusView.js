import { Link } from "react-router-dom"

const CampusView = (props) => {
  const {campus} = props;
  return (
    <div>      
      <h1>{campus.name}</h1>
      <p>{campus.imageUrl}</p>
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      
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
    </div>
  );

};

export default CampusView;