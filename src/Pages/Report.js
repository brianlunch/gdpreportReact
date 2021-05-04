import React from 'react';
import Navbar from '../Components/transparent-nav/Navbar'
import Report  from '../Components/Report/Report'
import './Report.css'


class ReportPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    

    render() {
        return (
            <div>
                <Report/>

                
            </div>
        );
    }
}

export default ReportPage;
