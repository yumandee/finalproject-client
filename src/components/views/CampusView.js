

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
        let name = student.firstname + " " + student.lastname;
        let email = student.email;
        let image = student.imageUrl;
        let gpa = student.gpa;
        return (
          <li key={student.id}>
            <p> {name} </p> 
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