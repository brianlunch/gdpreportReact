import React, { Component } from 'react'
import Annotation from 'react-image-annotation'
import AnnotationIssues from '../AnnotationIssues/AnnotationIssues';
import './ImageAnnotation.css'
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

function renderSelector({ annotation, active }) {
    const { geometry } = annotation
    if (!geometry) return null

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

function renderHighlight({ annotation, active }) {
    const { geometry } = annotation
    if (!geometry) return null

    return (
        <Box
            key={annotation.data.id}
            geometry={geometry}
            style={{
                border: 'solid 3px lime',
                background: 'rgba(255, 255, 255, 0.3)',
                boxShadow: active
                    && 'inset 0 0 0 5px red',
                    
            }}
        >
            {annotation.data.text}
        </Box>
    )
}

//On Hover
function renderContent({ annotation }) { return;}
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
        >

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
            Custom Overlay
        </div>
    )
}

export default class ImageAnnotation extends Component {
    state = {
        annotations: [],
        annotation: {},
        activeAnnotations: []
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

    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-9">
                        <Annotation
                            src={this.props.img}
                            alt='Two pebbles anthropomorphized holding hands'
                            className="annotation"
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
                    <div class="col-3 text-left">
                        <h4>Annotations</h4>
                        
                           <AnnotationIssues annotations={this.state.annotations} 
                           activeAnnotations={this.state.activeAnnotations} 
                           onMouseOver={this.onMouseOver}
                           onMouseOut={this.onMouseOut}
                           />
                    </div>
                </div>




            </div>


        )
    }
}
