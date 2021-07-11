import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { 
  fetchAllCampusesThunk, 
  deleteCampusThunk,
  deleteStudentThunk
  // addCampusThunk,
  // editCampusThunk
} from "../../store/thunks";
import { AllCampusesView } from "../views/";

class AllCampusesContainer extends Component {
  componentDidMount() {
    // console.log(this.props);
    this.props.fetchAllCampuses();
  }

  render() {
    return (
      <AllCampusesView
        allCampuses={this.props.allCampuses}
        deleteCampus={this.props.deleteCampus}
        deleteStudent={this.props.deleteStudent}
        // addCampus={this.props.addCampus}
        // editCampus={this.props.editCampus}
      />
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allCampuses: state.allCampuses,
    // deleteCampus:state.deleteCampus
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    deleteCampus: (campusId) => dispatch(deleteCampusThunk(campusId)),
    deleteStudent: (id) => dispatch(deleteStudentThunk(id))
    // addCampus: (campus) => dispatch(addCampusThunk(campus)),
    // editCampus: (campus) => dispatch(editCampusThunk(campus))
  };
};

// Type check props;
AllCampusesContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default withRouter(connect(mapState, mapDispatch)(AllCampusesContainer));