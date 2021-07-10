import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  const {allCampuses, deleteCampus} = props;

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
            <button onClick = {() => deleteCampus(campus.id)}> X </button>
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