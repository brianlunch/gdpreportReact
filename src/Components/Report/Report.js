import React from 'react';
import ImageAnnotation from '../ImageAnnotation/ImageAnnotation';
import './Report.css'



class Report extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null
        };
        this.imgChange = this.imgChange.bind(this)
        this.printState = this.printState.bind(this)
    }

    printState = () => {
        console.log(this.state);
    }

    imgChange = (event) => {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        }, this.printState)
    }



    render() {

        return (
            <div className="report">
                <div class="row">
                    <div class="col-12">

                        {this.state.file != null ?
                            <div className="imgAnnot">

                                <ImageAnnotation img={this.state.file} />
                                <div className="d-flex align-items-center justify-content-center mx-auto col-11">
                                    <form>
                                        <div class="form-group ">
                                            <label for="exampleFormControlFile1">Change Image</label>
                                            <input type="file" accept="image/*" class="form-control-file" onChange={this.imgChange} id="exampleFormControlFile1" />
                                        </div>
                                    </form>
                                </div>
                            </div>

                            :

                            <div className="d-flex align-items-center justify-content-center imagePlaceholder mx-auto col-10">
                                <form>
                                    <div class="form-group ">
                                        <label for="exampleFormControlFile1">Upload Screenshot of Website</label>
                                        <input type="file" accept="image/*" class="form-control-file" onChange={this.imgChange} id="exampleFormControlFile1" />
                                        
                                    </div>
                                </form>
                            </div>
                        }
                    </div>

                </div>
            </div>
        );
    }
}

export default Report;
