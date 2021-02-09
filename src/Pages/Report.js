import React from 'react';
import Navbar from '../Components/transparent-nav/Navbar'
import Report  from '../Components/Report/Report'
import './Report.css'

function setScreenshotUrl(url) {
    document.getElementById('target').src = url;
  }

class ReportPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    

    render() {
        return (
            <div>
                <Navbar/>
                <Report/>
            </div>
        );
    }
}

export default ReportPage;
