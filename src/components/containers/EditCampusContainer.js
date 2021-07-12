import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditCampusView from '../views/EditCampusView';
import {
   fetchCampusThunk,
   editCampusThunk,
   deleteStudentThunk
} from '../../store/thunks';

class EditCampusContainer extends Component {
   componentDidMount() {
      this.props.fetchCampus(this.props.match.params.id);
   }

   constructor(props) {
      super(props);
      let campus = this.props.campus
      this.state = {
         campus: campus,
         name: campus.name,
         campusId: campus.id,
         address: campus.address,
         description: campus.description,
         redirect: false,
      }
   }

   handleChange = event => {
      this.setState({
         [event.target.name]: event.target.value
      });
   }

   handleSubmit = async event => {
      event.preventDefault();

      let campus = this.state.campus
      campus.name = this.state.name
      campus.address = this.state.address
      campus.description = this.state.description

      // console.log(campus)
      await this.props.editCampus(campus);

      this.setState({
         redirect: true
      })

   }

   componentWillUnmount() {
      this.setState({redirect: false});
   }

   render() {
      if(this.state.redirect) {
         return( <Redirect to={`/campus/${this.state.campusId}`}/>)
      }
      return (
         <EditCampusView 
            handleChange = {this.handleChange}
            handleSubmit = {this.handleSubmit}
            campus = {this.props.campus}
            deleteStudent = {this.props.deleteStudent}
         />
      )
   }

}

const mapState = (state) => {
   return {
      campus: state.campus,
   };
};

const mapDispatch = (dispatch) => {
   return ({
      fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
      editCampus: (campus) => dispatch(editCampusThunk(campus)),
      deleteStudent: (id) => dispatch(deleteStudentThunk(id))
   });
};


export default connect(mapState, mapDispatch)(EditCampusContainer);
