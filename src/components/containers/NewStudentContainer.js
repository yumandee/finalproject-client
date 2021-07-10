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

        let student = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            campusId: this.state.campusId,
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
        console.log(this.props.allCampuses)
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