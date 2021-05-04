import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Collapse from 'react-bootstrap/Collapse'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Help.css'
import HowTo from '../../images/HowTo.gif'


const Help = (props) => {

    const [open, setOpen] = useState(false);


    return (
        <div className="row justify-content-center no-print">
            <div className="col-11 help">
                <div
                    onClick={() => {setOpen(!open); document.getElementById("gif").src = ''; document.getElementById("gif").src = HowTo}}
                    aria-controls={"help"}
                    aria-expanded={open}
                    className="issueHeader row"
                    name={"help"}
                >
                    <div class="col-9 text-left text-themes">
                        <h4>How do I use this tool?</h4>
                    </div>


                    <div class="col-3 text-right text-themes">
                        <h4 className="">{open ? <FaChevronUp /> : <FaChevronDown />}</h4>
                    </div>

                </div>
                <Collapse in={open} className="">
                    <div id={"help"} className="row helpContent">

                        <div className="col-6 text-left">
                            <p>The purpose of this tool is to highlight problematic areas of a consent dialogue box, note the issues with the highlighted areas and generate documenatation that associates your notations with legal clauses and articles</p>
                            <h4>Instructions</h4>
                            <ul>
                                <li>Click and drag to highlight a possibly problematic area of your screenshot, click 'confirm' to create an annotation box on the right.</li>
                                <li>Select an appropriate domain and use the checboxes in the annotation box to note what the issue is.</li>
                                <li>Choose a document template, view the preview and save the generated document to your device.</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <img className="gif" id="gif" src={HowTo}/>
                        </div>
                        
                    </div>
                </Collapse>

            </div>
        </div>
    );
};

export default Help;