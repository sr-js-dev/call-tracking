import React, {Component} from 'react'
import * as authAction  from '../actions/authAction';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ 
    ...state.auth,
});
const mapDispatchToProps = (dispatch) => ({
    changeLan: (params) =>
        dispatch(authAction.changeLan(params)),
});
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  
        };
    }
    render () {
      return (
        <div>
        </div>
      )
    };
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Footer);
