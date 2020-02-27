import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class RegForm extends Component {
    constructor() {
        super()
        this.state = {
            toogle: true
        }
    }


    render() {
        const { toogle } = this.state;
        return (

            <div class="container" >
                <div class="banner-card-wrapper">
                    <div class="banner-card">
                        <div class="banner-header">
                            <h3 class="title">Study Beyond The Classroom</h3>
                            <p class="subtitle">Find a tutor in any subject to help you learn more.</p>
                        </div>
                        <ul class="nav nav-pills mb-3 row" id="pills-tab" role="tablist">
                            <li class="nav-item col-lg-6">
                                <a class={`${toogle === true ?'nav-link active' :"nav-link"}`} id="pills-home-tab" data-toggle="pill" onClick={() => {
                                    this.setState({
                                        toogle: true
                                    })
                                }} href="#"
                                    role="tab" aria-controls="pills-home" aria-selected={`${toogle===true ? 'true' : 'false'}`}>In-Person</a>
                            </li>
                            <li class="nav-item col-lg-6">
                                <a class={`${toogle === false ?'nav-link active' :"nav-link "}`} id="pills-profile-tab" data-toggle="pill" href="#" onClick={() => {
                                    this.setState({
                                        toogle: false
                                    })
                                }}
                                    role="tab" aria-controls="pills-profile" aria-selected={`${toogle===false ? 'false' : 'true'}`}>Online</a>
                            </li>

                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class={`tab-pane fade ${toogle===true ? 'show active' : ''}`} id="pills-home" role="tabpanel"
                                aria-labelledby="pills-home-tab">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <input type="text" class="form-control" placeholder="Enter your location" />
                                    </div>
                                </div>
                                <div class="row cu-padding">
                                    <div class="col-lg-6">
                            <input type="text" class="form-control" placeholder="search your subject"/>
                        </div>
                                    <div class="col-lg-6">
                                        <select class="form-control" placeholder="Your Level">
                                            <option>Your Level</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row ">
                                    <div class="col-lg-12 text-center">
                                        <div class="btn btn-success">Search</div>
                                    </div>
                                </div>
                            </div>
                            <div class={`tab-pane fade ${toogle===false ? 'show active' : ''}`} id="pills-profile" role="tabpanel"
                                aria-labelledby="pills-profile-tab">

                                <div class="row cu-padding">
                                    <div class="col-lg-6">
                                        <input type="text" class="form-control" placeholder="search your subject" />
                                    </div>
                                    <div class="col-lg-6">
                                        <select class="form-control" placeholder="Your Level">
                                            <option>Your Level</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row ">
                                    <div class="col-lg-12 text-center">
                                        <div class="btn btn-success">Search</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default withRouter(RegForm);



