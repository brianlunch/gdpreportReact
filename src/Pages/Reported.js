import React from 'react';
import Navbar from '../Components/transparent-nav/Navbar'
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'
import ReactPDF from '@react-pdf/renderer'; 	    
import MyDocument from '../Components/PDFgen/PDFgen'

class Reported extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.pdfTing = this.pdfTing.bind(this);
    }

    pdfTing(){

        ReactPDF.render(<MyDocument />, "./example.pdf");

    }

    render() {
        return (
            <div>
                <Navbar/>
                <br/><br/><br/><br/>
                <button onClick={this.pdfTing}>PDF</button>
                <PDFViewer>
    <MyDocument />
  </PDFViewer>

  <PDFDownloadLink document={<MyDocument/>} fileName="fee_acceptance.pdf">
  {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
</PDFDownloadLink>


            </div>
        );
    }
}


export default Reported;
