import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewCampusView from '../views/NewCampusView';
import { 
  addCampusThunk,
  fetchAllCampusesThunk
} from '../../store/thunks';


class NewCampusContainer extends Component {
    componentDidMount() {
      this.props.fetchAllCampuses();
    }

    constructor(props){
        super(props);
        this.state = {
          name: "",
          campusId: null,
          address: "",
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

        let campus = {
            name: this.state.name,
            campusId: this.props.allCampuses.length + 1,
            address: this.state.address
        };
        
        let newCampus = await this.props.addCampus(campus);

        this.setState({
          name: "", 
          campusId: null, 
          address: "",
          redirect: true, 
          redirectId: newCampus.id
        });
    }
    
    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        if(this.state.redirect) {
          return (<Redirect to={`/campus/${this.state.redirectId}`}/>)
        }
        return (
          <NewCampusView 
            handleChange = {this.handleChange} 
            handleSubmit = {this.handleSubmit}      
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
      addCampus: (campus) => dispatch(addCampusThunk(campus)),
    });
}

export default connect(mapState, mapDispatch)(NewCampusContainer);