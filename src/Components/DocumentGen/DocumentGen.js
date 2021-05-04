import React, { Component } from 'react'
import Annotation from 'react-image-annotation'
import AnnotationIssues from '../AnnotationIssues/AnnotationIssues';
import issuesJSON from '../../Issues'
import colors from '../../color'
import './DocumentGen.css'


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
                    background: 'transparent',
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
        return (
            <Box
                key={annotation.data.id}
                geometry={geometry}
                style={{
                    border: 'solid 3px black',
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
            idk: []
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

    clearAll = () => {
        count = 0;
        this.setState({
            annotations: [],
            issues: []
        })
    }

    activeAnnotationComparator = (a, b) => {
        return a.data.id === b
    }

    onSubmit = (annotation) => {
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

    getStyle = (i) => {
        const styles = {
            textDecoration: "underline",
        };

        return styles;
    }



    render() {
        var userAnnots = this.props.props;
        return (
            <div>
                <div className="text-left doc">

                    <h4>{"Screenshot " + this.props.i}</h4>

                    <Annotation
                        src={this.props.img}
                        id="target2"
                        className="docPic"
                        annotations={userAnnots.annotations}
                        activeAnnotationComparator={this.activeAnnotationComparator}
                        activeAnnotations={userAnnots.activeAnnotations}
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
                    <br />
                    <div className=""><h4>Link to Webpage</h4><a href={this.props.url} id="url">{this.props.url}</a></div>
                    <br />
                    <div className=""><h4>Time of Screenshot </h4><p id="time">{this.props.time}</p></div>

                  

                    {userAnnots.issues != undefined ? userAnnots.issues.map((box, boxi) => (

                        <div>

                            {box.issue.includes(true) ?

                                <div className="annotBox">
                                    <h1 style={this.getStyle(boxi)}>{boxi + 1} - {issuesJSON[box.domain].domain}</h1>

                                    <br />

                                    {box.issue.map((iss, i) => (

                                        <div>

                                            {iss == true ? (
                                                <div className="issue">
                                                    <h3>Issue: {issuesJSON[box.domain].terms[i].value}</h3>
                                                    <p>Additional Comments: {box.comments[i]}</p>

                                                    <h4>Laws possibly violated</h4> <br />
                                                    <ul>
                                                        {issuesJSON[box.domain].terms[i].laws.map((law) => (
                                                            <li>
                                                                <h5>{law.lawName}</h5>
                                                                <p>Law Description: {law.lawDescription} </p>
                                                            </li>
                                                        ))
                                                        }
                                                    </ul>
                                                </div>
                                            ) : null}
                                        </div>
                                    ))}
                                </div> :

                                null}



                        </div>

                    )) : null}

                </div>
            </div>
        )
    }
}
