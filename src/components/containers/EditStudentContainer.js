import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditStudentView from '../views/EditStudentView';
import {
   fetchStudentThunk,
   editStudentThunk,
   fetchAllCampusesThunk
} from '../../store/thunks';

class EditStudentContainer extends Component {
   componentDidMount() {
      this.props.fetchStudent(this.props.match.params.id);
      this.props.fetchAllCampuses();
   }

   constructor(props) {
      super(props);
      let student = this.props.student
      this.state = {
         student: student,
         firstName: student.firstName,
         lastName: student.lastName,
         id: student.id,
         campusId: student.campusId,
         email: student.email,
         gpa: student.gpa,
         redirect: false
      }
   }

   handleChange = event => {
      this.setState({
         [event.target.name]: event.target.value
      });
   }

   handleSubmit = async event => {
      event.preventDefault();

      let student = this.state.student
      student.firstName = this.state.firstName
      student.lastName = this.state.lastName
      student.email = this.state.email
      student.gpa = this.state.gpa
      student.campusId = this.state.campusId

      // console.log(campus)
      await this.props.editStudent(student);

      this.setState({
         redirect: true
      })

   }

   componentWillUnmount() {
      this.setState({redirect: false});
   }

   render() {
      if(this.state.redirect) {
         return( <Redirect to={`/student/${this.state.id}`}/>)
      }
      return (
         <EditStudentView 
            handleChange = {this.handleChange}
            handleSubmit = {this.handleSubmit}
            allCampuses = {this.props.allCampuses}
            student = {this.state.student}
         />
      )
   }

}

const mapState = (state) => {
   return {
      student: state.student,
      allCampuses: state.allCampuses
   };
};

const mapDispatch = (dispatch) => {
   return ({
      fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
      editStudent: (campus) => dispatch(editStudentThunk(campus)),
      fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
   });
};


export default connect(mapState, mapDispatch)(EditStudentContainer);