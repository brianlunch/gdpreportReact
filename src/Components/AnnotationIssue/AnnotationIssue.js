import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Collapse from 'react-bootstrap/Collapse'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import issues from '../../Issues'
import './AnnotationIssue.css'

function isChecked(props, box, issueNo){

if(props.issues[box] !=undefined){
  
    if(props.issues[box].issue[issueNo]==true){
        
        return true;
    }}
    else return false 
}

function handleChange(props, event) {
    
    
    let x = event.target.name;
    
    if (props.issues.some(e => e.id === event.target.id)) {
        let array =  props.issues[props.issues.findIndex(x => x.id === event.target.id)].issue
        let comments =  props.issues[props.issues.findIndex(x => x.id === event.target.id)].comments
        array[x] = !array[x];

        let issue = {
            id: event.target.id,
            displayName: event.target.name,
            issue: array,
            comments:comments,
            open: false
        }
        /* vendors contains the element we're looking for */
        props.issues[props.issues.findIndex(x => x.id === issue.id)] = issue;

        
    }
    else {
        var array = [];
        var cmnts = [];

for (var i = 0; i < issues.length; i++) {
  array.push(false);
  cmnts.push(" ");
}
        array[x] = !array[x];

        let issue = {
            id: event.target.id,
            displayName: event.target.name,
            issue: array,
            comments:cmnts,
            open: false
        }
        props.issues.push(issue);
    }
    console.log(JSON.stringify(props.issues))
}


function handleChangeCB(props, event){

       
    let x = event.target.name;
    console.log(x)
  

        let array =  props.issues[props.issues.findIndex(x => x.id === event.target.id)].issue
        let cmnts =  props.issues[props.issues.findIndex(x => x.id === event.target.id)].comments

        console.log(event.target.value)
        cmnts[x] = event.target.value;

        let issue = {
            id: event.target.id,
            displayName: event.target.name,
            issue: array,
            comments:cmnts,
            open: false
        }
        /* vendors contains the element we're looking for */
        props.issues[props.issues.findIndex(x => x.id === issue.id)] = issue;
    
    console.log(props.issues)


}

const AnnotationIssue = (props) => {

    const [open, setOpen] = useState(false);

    return (
        <div
            onMouseOver={props.mouseOver(props.annotation.data.id)}
            onMouseOut={props.mouseOut(props.annotation.data.id)}
            key={props.annotation.data.id}
            className="annotationIssue col-12"
        >
            <div
                onClick={() => setOpen(!open)}
                aria-controls={props.annotation.data.id}
                aria-expanded={open}
                className="issueHeader row"
                name={props.annotation.data.id}
            >
                <div class="col-10">
                    <h3>{props.annotation.data.text}</h3>
                </div>

                <h3 className="float-left">{open ? <FaChevronUp /> : <FaChevronDown />}</h3>

            </div>
            <Collapse in={open}>
                <div id={props.annotation.data.id}>

                    <h3></h3>
                    <form onChange={e => handleChange(props, e)}>
                        {issues.map((issue, index)=><div class="form-check">
                            <input class="form-check-input" type="checkbox" name={index} id={props.annotation.data.id} value={issue.value} />
                            <label class="form-check-label" for="exampleRadios1">
                                {issue.value}
                            </label>
                            {isChecked(props, props.annotation.data.text, index)? <form onChange={e => handleChangeCB(props, e)}><label className="addComs">Additional Comments</label><textarea className="inputAddComm" name={index} id={props.annotation.data.id}/></form>:null}
                        </div>)}
                    </form>
                </div>
            </Collapse>

        </div>

    );
};

AnnotationIssue.propTypes = {};

export default AnnotationIssue;