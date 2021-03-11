import React from 'react';
import Navbar from '../Components/transparent-nav/Navbar'
import ImageAnnotation from '../Components/ImageAnnotation/ImageAnnotation'
import IrishTimes from '../images/IrishTimes.PNG'
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
                <div className="report">
                    <div class="row">
                        <div class="col-12">
                            <div className="imgAnnot">

                                <ImageAnnotation img={IrishTimes} />


                            </div>

                        </div>
                        </div>
                </div>

            </div>



        );
    }
}

export default ReportPage;
