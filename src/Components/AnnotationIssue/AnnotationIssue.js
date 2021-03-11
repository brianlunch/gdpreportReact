import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Collapse from 'react-bootstrap/Collapse'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import issues from '../../Issues'
import './AnnotationIssue.css'

var selectedIssue = issues[0];

function isChecked(props, box, issueNo) {

    if (props.issues[box] != undefined) {
        if (props.issues[box].issue[issueNo] == true) {
            return true;
        }
    }

    else return false;
}

function handleChange(props, event, domain) {


    let x = event.target.name;

    if (props.issues.some(e => e.id === event.target.id)) {

        let array = props.issues[props.issues.findIndex(x => x.id === event.target.id)].issue
        let comments = props.issues[props.issues.findIndex(x => x.id === event.target.id)].comments
        array[x] = !array[x];

        let issue = {
            id: event.target.id,
            displayName: event.target.name,
            issue: array,
            comments: comments,
            open: false
        }
        /* vendors contains the element we're looking for */
        props.issues[props.issues.findIndex(x => x.id === issue.id)] = issue;


    }

    else {
        var array = [];
        var cmnts = [];

        for (var i = 0; i < issues[domain].terms.length; i++) {
            array.push(false);
            cmnts.push(" ");
        }
        array[x] = !array[x];

        let issue = {
            id: event.target.id,
            domain:domain,
            displayName: event.target.name,
            issue: array,
            comments: cmnts,
            open: false
        }
        props.issues.push(issue);
    }
    console.log(props.issues)
}
function handleChangeDD(props, i) {

    for(var j=0; j<props.issues[i].issue.length; j++){
        props.issues[i].issue[j]=false;
        props.issues[i].comments[j]=" ";
    }
    
    console.log(props.issues)
}

function handleChangeCB(props, event) {


    let x = event.target.name;
    console.log(x)


    let array = props.issues[props.issues.findIndex(x => x.id === event.target.id)].issue
    array[x] = true;

    let cmnts = props.issues[props.issues.findIndex(x => x.id === event.target.id)].comments

    console.log(event.target.value)
    cmnts[x] = event.target.value;

    let issue = {
        id: event.target.id,
        displayName: event.target.name,
        issue: array,
        comments: cmnts,
        open: false
    }

    /* vendors contains the element we're looking for */
    props.issues[props.issues.findIndex(x => x.id === issue.id)] = issue;

    console.log(props)


}

const AnnotationIssue = (props) => {

    const [open, setOpen] = useState(false);

    const [domain, setDomain] = useState(0);
    
    
  

    return (
        <div
            onMouseOver={props.mouseOver(props.annotation.data.id)}
            onMouseOut={props.mouseOut(props.annotation.data.id)}
            key={props.annotation.data.id}
            className="annotationIssue col-11"
        >
            <div
                onClick={() => setOpen(!open)}
                aria-controls={props.annotation.data.id}
                aria-expanded={open}
                className="issueHeader row"
                name={props.annotation.data.id}
            >
                <div class="col-2 text-left">
                    <h3>{props.annotation.data.text+1}</h3>
                </div>


                <div class="col-10 text-right">
                    <h3 className="">{open ? <FaChevronUp /> : <FaChevronDown />}</h3>
                </div>

            </div>
            <Collapse in={open} className="options">
                <div id={props.annotation.data.id}>

                    <h3></h3>
                    <select onChange={(e) => {setDomain(e.target.value); handleChangeDD(props, props.annotation.data.text);}} className="custom-select mr-sm-2" id="inlineFormCustomSelect" name="duration">
                        {issues.map((issue, index) => <option value={index}>{issue.domain}</option>)}
                    </select>
                    <br /><br />



                    {issues[domain].terms.map((issue, index) => <div class="form-check">
                        <form onChange={e => handleChange(props, e, domain)}>
                            <input class="form-check-input" type="checkbox" checked={props.issues != undefined && props.issues[props.annotation.data.text] != undefined ? props.issues[props.annotation.data.text].issue[index] : null} name={index} id={props.annotation.data.id} value={issue.value} />
                            <label class="form-check-label" for="exampleRadios1">
                                {issue.value}
                            </label>
                        </form>
                        {isChecked(props, props.annotation.data.text, index) ? <form onChange={e => handleChangeCB(props, e)}><label className="addComs">Additional Comments</label><textarea className="inputAddComm" name={index} id={props.annotation.data.id} /></form> : null}
                    </div>)}

                </div>
            </Collapse>

        </div>

    );
};

export default AnnotationIssue;