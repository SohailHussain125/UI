import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './index.scss'

import explore1 from "../assets/images/explore1.png"
import explore2 from "../assets/images/explore2.png"
import explore3 from "../assets/images/explore3.png"
import explore4 from "../assets/images/explore4.png"

import team1 from "../assets/images/team1.png"
import team2 from "../assets/images/team2.png"
import team3 from "../assets/images/team3.png"
import team4 from "../assets/images/team4.png"
import team5 from "../assets/images/team5.png"
import team6 from "../assets/images/team6.png"
import team7 from "../assets/images/team7.png"

import events1 from "../assets/images/events1.png"
import events2 from "../assets/images/events2.png"
import events3 from "../assets/images/events3.png"


import shield from "../assets/images/shield.svg"
import certificate from "../assets/images/certificate-lg.svg"

import section2Bg1 from "../assets/images/section2-bg1.png"
import section2Bg2 from "../assets/images/section2-bg2.png"
import playIcon from "../assets/images/play-icon.svg"

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
class IndexPage extends Component {



 handleOnDragStart = (e) => e.preventDefault()
    render() {

        return (
            <div >
                <section class="explore">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <h2 class="section-title">Explore ASKADEMIA </h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3 col-md-6 ">

                                <a href="#" class="explore-card-wrapper">
                                    <img alt="" src={explore1} alt="" class="img-fluid" />
                                    <div class="explore-card">
                                        <h3>Tutoring</h3>
                                        <p>Highlight your teaching and tutoring
                                            experience by featuring them by referring to
                                        library sources,</p>
                                        <div class="text-right">
                                            <button class="btn btn-success">
                                                Learn More
                                        </button>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-3 col-md-6 ">

                                <a href="#" class="explore-card-wrapper">
                                    <img alt="" src={explore2} alt="" class="img-fluid" />
                                    <div class="explore-card">
                                        <h3>Study Centers</h3>
                                        <p>Highlight your teaching and tutoring
                                            experience by featuring them by referring to
                                        library sources,</p>
                                        <div class="text-right">
                                            <button class="btn btn-success">
                                                Learn More
                                        </button>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-3 col-md-6 ">

                                <a href="#" class="explore-card-wrapper">
                                    <img alt="" src={explore3} alt="" class="img-fluid" />
                                    <div class="explore-card">
                                        <h3>Blogs</h3>
                                        <p>Highlight your teaching and tutoring
                                            experience by featuring them by referring to
                                        library sources,</p>
                                        <div class="text-right">
                                            <button class="btn btn-success">
                                                Learn More
                                        </button>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-3 col-md-6 ">

                                <a href="#" class="explore-card-wrapper">
                                    <img alt="" src={explore4} alt="" class="img-fluid" />
                                    <div class="explore-card">
                                        <h3>Events</h3>
                                        <p>Highlight your teaching and tutoring
                                            experience by featuring them by referring to
                                        library sources,</p>
                                        <div class="text-right">
                                            <button class="btn btn-success">
                                                Learn More
                                        </button>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </section>
                <section class="video">
                    <div class="container">
                        <div class="image-container">
                            <div class="row">
                                <div class="col-lg-6 offset-lg-3">
                                    <h2>Providing <br />
                                        Online Classroom</h2>
                                    <p class="content">A virtual classroom is an online learning environment
                                        that allows for live interaction between the tutor and the
                                    learners asthey are participating in learning activities.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 offset-lg-3">
                                <div class="video-image-container">
                                    <img alt="" src={playIcon} alt="" class="img-fluid" />

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="customer-satisfaction">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 ">
                                <div class="left-image-wrapper">
                                    <img alt="" src={section2Bg1} alt="" class="img-1" />
                                    <img alt="" src={section2Bg2} alt="" class="img-2" />
                                </div>
                            </div>
                            <div class="col-lg-5 offset-lg-1">
                                <h2 class="section-title">Ensuring Your <br />
                                    Full Satisfication</h2>
                                <p class="content">A virtual classroom is an online learning environment
                                    that allows for live interaction between the tutor and the
                                    learners asthey are participating in learning activities.
                            </p>
                                <div class="row icon-wrapper">
                                    <div class="col-3">
                                        <div class="circle">
                                            <img alt="" src={certificate} alt="" class="img-fluid mt-5" />
                                        </div>
                                    </div>
                                    <div class="col-9">
                                        <h3>Well Certification</h3>
                                        <p>A virtual classroom is an online learning environment
                                            that allows for live interaction
                                    </p>
                                    </div>
                                </div>
                                <div class="row icon-wrapper">
                                    <div class="col-3">
                                        <div class="circle">
                                            <img alt="" src={shield} alt="" class="img-fluid" />
                                        </div>
                                    </div>
                                    <div class="col-9">
                                        <h3>Well Certification</h3>
                                        <p>A virtual classroom is an online learning environment
                                            that allows for live interaction
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="tutors">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                <h2 class="section-title">
                                    Tutors For <br />
                                    Every Kind Of Learner
                            </h2>
                                <p class="content">Find a tutor in any subject to help you learn more. A virtual classroom
                                    is
                                    an online learning environment that allows for live interaction between the tutor and
                                    the
                            </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3 col-md-6  ">
                                <div class="team-wrapper">
                                    <img alt="" src={team1} alt="" class="img-fluid" />
                                    <div class="info-card">
                                        <div class="rating"><i class="mdi mdi-star"></i> 4.9</div>
                                        <div class="badge-tutor">Startutor</div>
                                        <h3>Thomas K.</h3>
                                        <p>SATs and 11+ entrance</p>
                                    </div>
                                    <div class="overlay">
                                        <div class="badge-tutor-blue">Startutor</div>
                                        <div class="rating"><i class="mdi mdi-star"></i> 4.9</div>
                                        <div class="name">Ezekiel </div>
                                        <div class="quali">GCSE &amp; A-level biology curricula</div>
                                        <button class="overlay-btn">View Profile <i
                                            class="ml-2 mdi mdi-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6  ">
                                <div class="team-wrapper">
                                    <img alt="" src={team2} alt="" class="img-fluid" />
                                    <div class="info-card">

                                        <h3>Thomas K.</h3>
                                        <p>SATs and 11+ entrance</p>
                                    </div>
                                    <div class="overlay">

                                        <div class="rating"><i class="mdi mdi-star"></i> 4.9</div>
                                        <div class="name">Ezekiel </div>
                                        <div class="quali">GCSE &amp; A-level biology curricula</div>
                                        <button class="overlay-btn">View Profile <i
                                            class="ml-2 mdi mdi-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6  ">
                                <div class="team-wrapper">
                                    <img alt="" src={team3} alt="" class="img-fluid" />
                                    <div class="info-card">

                                        <h3>Thomas K.</h3>
                                        <p>SATs and 11+ entrance</p>
                                    </div>
                                    <div class="overlay">

                                        <div class="rating"><i class="mdi mdi-star"></i> 4.9</div>
                                        <div class="name">Ezekiel </div>
                                        <div class="quali">GCSE &amp; A-level biology curricula</div>
                                        <button class="overlay-btn">View Profile <i
                                            class="ml-2 mdi mdi-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6  ">
                                <div class="team-wrapper">
                                    <img alt="" src={team4} alt="" class="img-fluid" />
                                    <div class="info-card">

                                        <h3>Thomas K.</h3>
                                        <p>SATs and 11+ entrance</p>
                                    </div>
                                    <div class="overlay">

                                        <div class="rating"><i class="mdi mdi-star"></i> 4.9</div>
                                        <div class="name">Ezekiel </div>
                                        <div class="quali">GCSE &amp; A-level biology curricula</div>
                                        <button class="overlay-btn">View Profile <i
                                            class="ml-2 mdi mdi-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6  ">
                                <div class="team-wrapper">
                                    <img alt="" src={team5} alt="" class="img-fluid" />
                                    <div class="info-card">

                                        <h3>Thomas K.</h3>
                                        <p>SATs and 11+ entrance</p>
                                    </div>
                                    <div class="overlay">

                                        <div class="rating"><i class="mdi mdi-star"></i> 4.9</div>
                                        <div class="name">Ezekiel </div>
                                        <div class="quali">GCSE &amp; A-level biology curricula</div>
                                        <button class="overlay-btn">View Profile <i
                                            class="ml-2 mdi mdi-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6  ">
                                <div class="team-wrapper">
                                    <img alt="" src={team6} alt="" class="img-fluid" />
                                    <div class="info-card">
                                        <div class="rating"><i class="mdi mdi-star"></i> 4.9</div>
                                        <div class="badge-tutor">Startutor</div>
                                        <h3>Thomas K.</h3>
                                        <p>SATs and 11+ entrance</p>
                                    </div>
                                    <div class="overlay">
                                        <div class="badge-tutor-blue">Startutor</div>
                                        <div class="rating"><i class="mdi mdi-star"></i> 4.9</div>
                                        <div class="name">Ezekiel </div>
                                        <div class="quali">GCSE &amp; A-level biology curricula</div>
                                        <button class="overlay-btn">View Profile <i
                                            class="ml-2 mdi mdi-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6  ">
                                <div class="team-wrapper">
                                    <img alt="" src={team7} alt="" class="img-fluid" />
                                    <div class="info-card">

                                        <h3>Thomas K.</h3>
                                        <p>SATs and 11+ entrance</p>
                                    </div>
                                    <div class="overlay">

                                        <div class="rating"><i class="mdi mdi-star"></i> 4.9</div>
                                        <div class="name">Ezekiel </div>
                                        <div class="quali">GCSE &amp; A-level biology curricula</div>
                                        <button class="overlay-btn">View Profile <i
                                            class="ml-2 mdi mdi-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6  ">
                                <div class="team-wrapper">
                                    <img alt="" src={team1} alt="" class="img-fluid" />
                                    <div class="info-card">

                                        <h3>Thomas K.</h3>
                                        <p>SATs and 11+ entrance</p>
                                    </div>
                                    <div class="overlay">

                                        <div class="rating"><i class="mdi mdi-star"></i> 4.9</div>
                                        <div class="name">Ezekiel </div>
                                        <div class="quali">GCSE &amp; A-level biology curricula</div>
                                        <button class="overlay-btn">View Profile <i
                                            class="ml-2 mdi mdi-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 text-center">
                                <button class="btn btn-success-outline">View All <i class="mdi mdi-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="testimonials">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                <h2 class="section-title">
                                    Students <br />
                                    Saying About Us
                            </h2>
                                <p class="content">Find a tutor in any subject to help you learn more. A virtual classroom
                                    is
                                    an online learning environment that allows for live interaction between the tutor and
                                    the
                            </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="owl-carousel owl-theme testimonial-carousel owl-loaded owl-drag">
                                    <AliceCarousel mouseTrackingEnabled>
                                    <div class="item" onDragStart={this.handleOnDragStart}>
                                            <p class="quote">
                                                A virtual classroom is an online learning environment
                                                that allows for live interaction between the tutor and the
                                                learners asthey are participating in learning activities.
                                    </p>
                                            <div class="row">
                                                <div class="col-3">
                                                    <img alt="" src={team6} alt="" class="img-fluid" />
                                                </div>
                                                <div class="col-9">

                                                </div>
                                            </div>
                                        </div>
                                        <div class="item" onDragStart={this.handleOnDragStart}>
                                            <p class="quote">
                                                A virtual classroom is an online learning environment
                                                that allows for live interaction between the tutor and the
                                                learners asthey are participating in learning activities.
                                    </p>
                                            <div class="row">
                                                <div class="col-3">
                                                    <img alt="" src={team6} alt="" class="img-fluid" />
                                                </div>
                                                <div class="col-9">

                                                </div>
                                            </div>
                                        </div>
                                        <div class="item" onDragStart={this.handleOnDragStart}>
                                            <p class="quote">
                                                A virtual classroom is an online learning environment
                                                that allows for live interaction between the tutor and the
                                                learners asthey are participating in learning activities.
                                    </p>
                                            <div class="row">
                                                <div class="col-3">
                                                    <img alt="" src={team6} alt="" class="img-fluid" />
                                                </div>
                                                <div class="col-9">

                                                </div>
                                            </div>
                                        </div>
                                        <div class="item" onDragStart={this.handleOnDragStart}>
                                            <p class="quote">
                                                A virtual classroom is an online learning environment
                                                that allows for live interaction between the tutor and the
                                                learners asthey are participating in learning activities.
                                    </p>
                                            <div class="row">
                                                <div class="col-3">
                                                    <img alt="" src={team6} alt="" class="img-fluid" />
                                                </div>
                                                <div class="col-9">

                                                </div>
                                            </div>
                                        </div>
                                      
                                    </AliceCarousel>
                                    {/* <div>
                                        <div class="item">
                                            <p class="quote">
                                                A virtual classroom is an online learning environment
                                                that allows for live interaction between the tutor and the
                                                learners asthey are participating in learning activities.
                                    </p>
                                            <div class="row">
                                                <div class="col-3">
                                                    <img alt="" src={team6} alt="" class="img-fluid" />
                                                </div>
                                                <div class="col-9">

                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <p class="quote">
                                                A virtual classroom is an online learning environment
                                                that allows for live interaction between the tutor and the
                                                learners asthey are participating in learning activities.
                                    </p>
                                            <div class="row">
                                                <div class="col-3">
                                                    <img alt="" src={team5} alt="" class="img-fluid" />
                                                </div>
                                                <div class="col-9">

                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <p class="quote">
                                                A virtual classroom is an online learning environment
                                                that allows for live interaction between the tutor and the
                                                learners asthey are participating in learning activities.
                                    </p>
                                            <div class="row">
                                                <div class="col-3">
                                                    <img alt="" src={team6} alt="" class="img-fluid" />
                                                </div>
                                                <div class="col-9">

                                                </div>
                                            </div>
                                        </div>
                                        <div class="item" >
                                            <p class="quote">
                                                A virtual classroom is an online learning environment
                                                that allows for live interaction between the tutor and the
                                                learners asthey are participating in learning activities.
                                    </p>
                                            <div class="row">
                                                <div class="col-3">
                                                    <img alt="" src={team6} alt="" class="img-fluid" />
                                                </div>
                                                <div class="col-9">

                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <p class="quote">
                                                A virtual classroom is an online learning environment
                                                that allows for live interaction between the tutor and the
                                                learners asthey are participating in learning activities.
                                    </p>
                                            <div class="row">
                                                <div class="col-3">
                                                    <img alt="" src={team6} alt="" class="img-fluid" />
                                                </div>
                                                <div class="col-9">

                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <p class="quote">
                                                A virtual classroom is an online learning environment
                                                that allows for live interaction between the tutor and the
                                                learners asthey are participating in learning activities.
                                    </p>
                                            <div class="row">
                                                <div class="col-3">
                                                    <img alt="" src={team6} alt="" class="img-fluid" />
                                                </div>
                                                <div class="col-9">

                                                </div>
                                            </div>
                                        </div>
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="news">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                <h2 class="section-title">Upcoming <br />
                                    Events &amp; News</h2>
                                <p class="content">Find a tutor in any subject to help you learn more. A virtual classroom
                                    is
                                    an online learning environment that allows for live interaction between the tutor.
                            </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-md-6">
                                <a class="card" href="#">
                                    <img alt="" src={events1} alt="" class="card-img-top" />
                                    <div class="card-body">
                                        <p class="card-text">Askademia Revision Courses </p>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <a class="card" href="#">
                                    <img alt="" src={events2} alt="" class="card-img-top" />
                                    <div class="card-body">
                                        <p class="card-text">Askademia Revision Courses </p>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <a class="card" href="#">
                                    <img alt="" src={events3} alt="" class="card-img-top" />
                                    <div class="card-body">
                                        <p class="card-text">Askademia Revision Courses </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 text-center">
                                <button class="btn btn-success-outline">View All <i class="mdi mdi-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="subscribe">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                <h2 class="section-title">
                                    Subscribe For <br />
                                    Getting Newsletter
                            </h2>
                                <p class="content">Find a tutor in any subject to help you learn more. A virtual classroom
                                    is
                                    an online learning environment that allows for live interaction between the tutor.
                            </p>
                                <div class="row">
                                    <div class="col-lg-10 offset-lg-1">
                                        <div class="searchbar">
                                            <input type="text" placeholder="Enter your email here" class="search-input" />
                                            <a href="#" class="search-btn">Subscribe</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    };
}

export default withRouter(IndexPage);