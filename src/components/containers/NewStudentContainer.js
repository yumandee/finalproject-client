import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewStudentView from '../views/NewStudentView';
import { 
  addStudentThunk,
  fetchAllCampusesThunk
} from '../../store/thunks';


class NewStudentContainer extends Component {
    componentDidMount() {
      this.props.fetchAllCampuses();
    }
    
    constructor(props){
      
      super(props);
      this.state = {
        firstName: "", 
        lastName: "", 
        campusId: null,
        email: "",
        redirect: false, 
        redirectId: null
      };
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();

        if (this.state.campusId == null) { 
          var def_id = this.props.allCampuses[0].id 
        }
        else {
          def_id = this.state.campusId
        }

        console.log(def_id)
        let student = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            campusId: def_id,
            email: this.state.email
        };
        

        let newStudent = await this.props.addStudent(student);

        this.setState({
          firstName: "", 
          lastName: "", 
          campusId: null, 
          redirect: true, 
          redirectId: newStudent.id
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        if(this.state.redirect) {
          return (<Redirect to={`/student/${this.state.redirectId}`}/>)
        }
        // console.log(this.props.allCampuses)
        return (
          <NewStudentView 
            handleChange = {this.handleChange} 
            handleSubmit = {this.handleSubmit}
            allCampuses = {this.props.allCampuses}      
          />
        );
    }
}
const mapState = (state) => {
  return {
    allCampuses: state.allCampuses
  };
}

const mapDispatch = (dispatch) => {
    return({
      fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
      addStudent: (student) => dispatch(addStudentThunk(student)),
    })
}

export default connect(mapState, mapDispatch)(NewStudentContainer);