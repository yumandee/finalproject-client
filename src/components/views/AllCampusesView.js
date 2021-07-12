import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const handleDeleteCampus = (campus, deleteCampus, deleteStudent) => {
  campus.students.map( (student) => {
    deleteStudent(student.id)
  })
  deleteCampus(campus.id) 
}

const AllCampusesView = (props) => {
  const {allCampuses, deleteCampus, deleteStudent} = props;

  if (!allCampuses.length) {
    return (
      <div>
        <p>There are no campuses.</p>
        <Link to = {`/newcampus`}>
          <button> Add New Campus</button>
        </Link>
      </div>

    );

  }

  return (
    <div>
      {allCampuses.map((campus) => {
        return (
          <div key={campus.id}>
            <Link to={`/campus/${campus.id}`}>
              <h1>{campus.name}</h1>
            </Link>
            <p>{campus.description}</p>
            {/* <button onClick = {() => deleteCampus(campus.id)}> X </button> */}
            {console.log(campus)}
            <button onClick = {() => handleDeleteCampus(campus, deleteCampus, deleteStudent)}> X </button>
            <h3> Deleting a Campus will also delete associated students! </h3>
          </div>
        );
      }
      )}
      <Link to = {`/newcampus`}>
        <button> Add New Campus </button>
      </Link>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;