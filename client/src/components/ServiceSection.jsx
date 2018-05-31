import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import ServiceTest from './ServiceTest.jsx'
class ServiceSection extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <div className="service_container">
      <ServiceTest/>
      <div style={{textAlign:'center', paddingTop:'15px'}}>
{/* <Link to={{ pathname: '/Services' }}>View all Services</Link> */}
</div>
</div>
)
}
};

export default ServiceSection;