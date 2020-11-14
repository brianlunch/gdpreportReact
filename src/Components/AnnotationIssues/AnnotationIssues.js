import React from 'react';
import PropTypes from 'prop-types';
import './AnnotationIssues.css'


class AnnotationIssues extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleMouseOver = this.handleMouseOver.bind(this)
        this.handleMouseOut = this.handleMouseOut.bind(this)
    }

    handleMouseOver(key) {
        this.props.onMouseOver(key);
    }

    handleMouseOut(key) {
        this.props.onMouseOut(key);
    }

    render() {
        return (
            <div>

                {this.props.annotations.map(annotation => (
                    <div
                        onMouseOver={this.props.onMouseOver(annotation.data.id)}
                        onMouseOut={this.props.onMouseOut(annotation.data.id)}
                        key={annotation.data.id}
                        className="annotationIssue"
                    >
                        <h3>{annotation.data.text}</h3>
                        <form>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id={annotation.data.id} value="option1" />
                            <label class="form-check-label" for="exampleRadios1">
                                Default radio
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id={annotation.data.id} value="option2" />
                            <label class="form-check-label" for="exampleRadios2">
                                Second default radio
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id={annotation.data.id} value="option2" />
                            <label class="form-check-label" for="exampleRadios2">
                                Second default radio
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id={annotation.data.id} value="option2" />
                            <label class="form-check-label" for="exampleRadios2">
                                Second default radio
                            </label>
                        </div>
                        <input type="text"/>
                        </form>
                    </div>
                ))}
            </div>
        );

    }
}

export default AnnotationIssues;