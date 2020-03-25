import React, {Component} from 'react'
import { Row } from 'react-bootstrap';
import Header from '../components/header';

window.localStorage.setItem('AWT', true);
class Layout extends Component {
  
    render () {
      return (
          <Row>
            <Header/>
          </Row>
      )
    };
  }
  export default Layout;
