import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './AnnotationIssues.css'
import Collapse from 'react-bootstrap/Collapse'
import { FaChevronDown, FaLessThanEqual } from 'react-icons/fa';
import AnnotationIssue from '../AnnotationIssue/AnnotationIssue';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'
import ReactPDF from '@react-pdf/renderer'; 	    
import MyDocument from '..//PDFgen/PDFgen'



function onMouseOver(props, key) {
    props.onMouseOver(key);
}

function printTing(props){
    console.log("hello");
}

function onMouseOut(props, key) {
    props.onMouseOut(key);
}



function handleSubmit() {

}

function setOpen(){

}
function checkOpen(props){
    console.log("ye");
    if(props.issues.length !=0){
    console.log(props.issues[0].open);
    return props.issues[0].open;
    }
}

function AnnotationIssues(props) {
    
    
    return (
        <div>
<div className="maxH">
            {props.annotations.map(annotation => (
                <div>
                    <AnnotationIssue annotation={annotation} 
                    mouseOver={props.onMouseOver} 
                    mouseOut={props.onMouseOut} 
                    issues={props.issues}
                    />
                </div>
            ))}
</div>

<div className="row justify-content-center">
<PDFDownloadLink document={<MyDocument issues={props.issues}/>} fileName="fee_acceptance.pdf">
  {({ blob, url, loading, error }) => (loading ? 'Loading document...' : <button className="btn btn-outline-dark"> Generate Report</button>)}
</PDFDownloadLink>
</div>

        </div>
    );


}

export default AnnotationIssues;