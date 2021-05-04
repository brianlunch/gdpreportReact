import React, { Component } from 'react'
import Annotation from 'react-image-annotation'
import AnnotationIssues from '../AnnotationIssues/AnnotationIssues';
import DocumentGen from '../DocumentGen/DocumentGen'
import './ImageAnnotation.css'
import Tab from 'react-bootstrap/Tab'
import MustacheGen from '../MustacheGen/MustacheGen';
import colors from '../../color'
import templates from '../../templates'

import {
    PointSelector,
    RectangleSelector,
    OvalSelector
} from 'react-image-annotation/lib/selectors'

var count = 0;




const Box = ({ children, geometry, style }) => (
    <div
        style={{
            ...style,
            position: 'absolute',
            left: `${geometry.x}%`,
            top: `${geometry.y}%`,
            height: `${geometry.height}%`,
            width: `${geometry.width}%`,
        }}
    >
        {children}
    </div>
)

function renderSelector({ annotation, active, type }) {
    const { geometry } = annotation
    if (!geometry) return null



    if (geometry.type == RectangleSelector.TYPE) {
        return (

            <Box
                geometry={geometry}
                style={{
                    background: 'rgba(255, 255, 255, 0.5)',
                    border: 'solid 1px red'
                }}
            >
            </Box>
        )
    }
    if (geometry.type == PointSelector.TYPE) {
        return (

            <Box
                geometry={geometry}
                style={{
                    background: 'rgba(255, 255, 255, 0.5)',
                    border: 'solid 10px green'
                }}
            >
            </Box>
        )
    }
}

function renderHighlight({ annotation, active }) {
    const { geometry } = annotation

    if (!geometry) return null
    if (geometry.type == RectangleSelector.TYPE) {

        var bg = window.matchMedia('print') ? "transparent" : "transparent";

        return (
            <Box
                key={annotation.data.id}
                geometry={geometry}
                style={{
                    border: 'solid 3px ',
                    background: 'rgba(255, 255, 255, 0.3)',
                    boxShadow: active
                        && 'inset 0 0 0 5px red',
                    color: active
                        && 'red',
                    fontSize: active && 20,
                    fontSize: 20,
                    fontWeight: 700
                }}
            >

                {annotation.data.text + 1}


            </Box>
        )
    }
    else {
        return (
            <Box
                key={annotation.data.id}
                geometry={geometry}
                style={{
                    border: 'solid 3px lime',
                    height: 60,
                    color: 'lime',
                    width: 60,
                    backgroundColor: 'lime',
                    boxShadow: active
                        && 'inset 0 0 0 3px red',
                    color: active
                        && 'red',
                    fontSize: active && 30

                }}
            >

                {annotation.data.text}


            </Box>
        )
    }
}

//On Hover
function renderContent({ annotation }) { return; }
/*
function renderContent({ annotation }) {
    const { geometry } = annotation
    return (
        <div
            key={annotation.data.id}
            style={{
                background: 'black',
                color: 'white',
                padding: 10,
                position: 'absolute',
                fontSize: 12,
                left: `${geometry.x}%`,
                top: `${geometry.y + geometry.height}%`
            }}
        >
            <div>Custom Content</div>
            {annotation.data && annotation.data.text}
        </div>
    )
}
*/
function renderEditor(props) {
    const { geometry } = props.annotation
    if (!geometry) return null


    return (
        <div
            style={{
                background: 'white',
                borderRadius: 3,
                position: 'absolute',
                left: `${geometry.x}%`,
                top: `${geometry.y + geometry.height}%`,
            }}
            className="text-left bg-white"
        >
            <br></br>
            <button className="btn btn-outline-dark"
                onClick={e => props.onChange({
                    ...props.annotation,
                    data: {
                        ...props.annotation.data,
                        text: count
                    }
                }, props.onSubmit)}
            >Confirm</button>

        </div>
    )

}

function renderOverlay() {
    return (
        <div
            style={{
                background: 'rgba(0, 0, 0, 0.3)',
                color: 'white',
                padding: 5,
                pointerEvents: 'none',
                position: 'absolute',
                top: 5,
                left: 5
            }}
        >

        </div>
    )
}

export default class ImageAnnotation extends Component {


    constructor(props) {
        super(props);
        this.state = {
            annotations: [],
            annotation: {},
            activeAnnotations: [],
            issues: [],
            idk: [],
            template: 0
        };
    }



    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.img !== prevProps.img) {
            this.clearAll();
        }
    }

    onMouseOver = (id) => e => {
        this.setState({
            activeAnnotations: [
                ...this.state.activeAnnotations,
                id
            ]
        })
    }

    onMouseOut = (id) => e => {
        const index = this.state.activeAnnotations.indexOf(id)

        this.setState({
            activeAnnotations: [
                ...this.state.activeAnnotations.slice(0, index),
                ...this.state.activeAnnotations.slice(index + 1)
            ]
        })
    }

    clearAll = (props) => {
        count = 0;
        this.setState({
            annotations: [],
            issues: []
        })
    }

    activeAnnotationComparator = (a, b) => {
        return a.data.id === b
    }

    onSubmit = (annotation, props) => {
        
        const { geometry, data } = annotation

        this.setState({
            annotation: {},
            annotations: this.state.annotations.concat({
                geometry,
                data: {
                    ...data,
                    id: Math.random()
                }
            })
        })
        count++;
    }

    onChange = (annotation, func) => {
        this.setState({ annotation }, func)
    }

    onChangeType = (e) => {
        this.setState({
            annotation: {},
            type: e.currentTarget.innerHTML
        })
    }



    render() {

        count = this.state.issues.length;
        return (

            <div className="">


                <div class="row annotateRow no-print">
                    <div class="col-8 imageSide">


                        <div className="annotation col-12">

                            <Annotation
                                src={this.props.img}
                                id={"target" + this.props.i}
                                alt='Two pebbles anthropomorphized holding hands'
                                annotations={this.state.annotations}
                                activeAnnotationComparator={this.activeAnnotationComparator}
                                activeAnnotations={this.state.activeAnnotations}
                                type={this.state.type}
                                value={this.state.annotation}
                                onChange={this.onChange}
                                onSubmit={this.onSubmit}
                                renderSelector={renderSelector}
                                renderEditor={renderEditor}
                                renderHighlight={renderHighlight}
                                renderContent={renderContent}
                                renderOverlay={renderOverlay}
                            />
                        </div>
                        <br />
                        <div className="row align-items-end">

                            <div className="col-7 text-left ">
                                <p>{"Image source: " + this.props.url}</p>
                                <p className="m-0">{"Time Captured: " + this.props.time}</p>
                            </div>

                            <div class="col-5 text-left">
                                <i>Choose a Document Template (Preview Below):</i>

                                <select onChange={(e) => this.setState({ template: e.target.value })} className="custom-select2 mr-sm-2" id="inlineFormCustomSelect" name="duration">
                                    {templates.map((template, index) => <option value={index}>{template.name}</option>)}
                                </select>
                                <br />
                                <button className="btn btn-theme w-100" onClick={function (e) { window.print(); }}>Save Document</button>
                            </div>
                        </div>

                    </div>

                    <div class="col-4  text-left">

                        <div className="row">
                            <h4 className="col-7 text-theme">Annotations</h4>

                            <div class="col-4 text-right">
                                <button className="btn-theme btn " onClick={this.clearAll}>Clear All</button>
                            </div>

                        </div>

                        <AnnotationIssues
                            className=""
                            image={this.props.img}
                            annotations={this.state.annotations}
                            activeAnnotations={this.state.activeAnnotations}
                            issues={this.state.issues}
                            onMouseOver={this.onMouseOver}
                            onMouseOut={this.onMouseOut}
                        />

                    </div>



                    <h3>{"Document Preview - Screenshot " + this.props.i}</h3>
                </div>



                <div>

                    <br />

                    <MustacheGen props={this.state} img={this.props.img} id="capture" i={this.props.i} url={this.props.url} time={this.props.time} template={this.state.template} />

                    {/*<DocumentGen props={this.state} img={this.props.img} id="capture" i={this.props.i} url={this.props.url} time={this.props.time} />*/}


                </div>



            </div>

        )


    }
}
