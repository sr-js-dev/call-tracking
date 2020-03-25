import React, {Component} from 'react'
import * as authAction  from '../actions/authAction';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Select from 'react-select';
import { connect } from 'react-redux';
import history from '../history';
import { removeAuth } from '../factories/auth';
import $ from 'jquery';

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
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="nav">
            <Navbar.Brand href="#home" id="logo"></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features"><i class="font-grid4 subtle add-icon"></i>Numbers</Nav.Link>
                    <Nav.Link href="#pricing1"><i class="font-chart subtle add-icon"></i>Reporting</Nav.Link>
                    <Nav.Link href="#pricing2"><i class="font-phone-2 subtle add-icon"></i>Calls</Nav.Link>
                    <Nav.Link href="#pricing3"><i class="font-mobile subtle add-icon"></i>Texts</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#help"><i class="font-support subtle add-icon"></i>help</Nav.Link>
                    <Nav.Link href="#setting"><i class="font-cog-2 subtle add-icon"></i>Setting</Nav.Link>
                    <Nav.Link href="#phone"><i class="font-phone-outgoing subtle"></i></Nav.Link>
                    <Nav.Link href="#bell"><i class="font-bell subtle"></i></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      )
    };
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Header);
