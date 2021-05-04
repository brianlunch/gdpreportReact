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


function onMouseOut(props, key) {
    props.onMouseOut(key);
}



function handleSubmit() {

}

function setOpen() {

}
function checkOpen(props) {

    if (props.issues.length != 0) {
        return props.issues[0].open;
    }
}

function AnnotationIssues(props) {


    return (
        <div className=" text-left maxH col-11 align-items-start">
        <br />
             {props.annotations.map(annotation => (
                 
                     <AnnotationIssue
                         annotation={annotation}
                         mouseOver={props.onMouseOver}
                         mouseOut={props.onMouseOut}
                         issues={props.issues}

                     />
                 
             ))}
         
     

     </div>
    );


}

export default AnnotationIssues;