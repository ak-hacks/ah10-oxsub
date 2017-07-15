import React, { Component } from 'react';
import '../../css/introduction.css';

class Introduction extends Component {
    render() {
        return (
            <div className="below-nav-div">
                <div className="container">
                    <div className="jumbotron introduction-rect">
                        <h1 className="text-center">Finding a sub made easy!</h1>
                        <hr/>
                        <p className="text-center oxsub-p">
                            What are you looking to do?
                        </p>
                        <div className="row">
                            <div className="col-md-6">
                                <a href="/create-new-request" className="btn btn-lg oxsub-button" role="button">
                                    I NEED A SUB
                                </a>
                            </div>
                            <div className="col-md-6">
                                <a href="/create-new-request" className="btn btn-lg oxsub-button" role="button">
                                    I WANT TO SUB
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Introduction