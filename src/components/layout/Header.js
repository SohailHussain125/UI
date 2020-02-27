import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './header.scss'

// import '../../styles/components/Header.scss';
import "./../../styles/scss/_navbar.scss"
import './../../styles/scss/_nav.scss'

import logoImg from '../../assets/images/logo.png'

class Header extends Component {
    constructor() {
        super()
        this.state = {
            fixedHeader: false
        }
    }


    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = (event) => {
        if (event.path[1].visualViewport.pageTop > 50) {

            this.setState({
                fixedHeader: true
            })
            // do something like call `this.setState`
            // access window.scrollY etc
        }
        else {
            this.setState({
                fixedHeader: false
            })
        }
    }


    render() {
        const { fixedHeader } = this.state;
        return (
            <nav class={`navbar navbar-expand-lg top-nav ${fixedHeader ? 'navbar-fixed-top' : ""}`}>
                <div class="container header-div">
                    <a class="navbar-brand" href="#">
                        <img src={logoImg} alt="" class="logo" />
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"><img style={{ width: "30px", height: "40px" }} src={require('./../../assets/images/open-menu.png')} /> </span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Become a Tutor</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Our Tuition Centres</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link " href="#">Revision Events</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#">Help</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="sign-up" href="#">Sign up</a>
                            </li>
                            <li class="nav-item">
                                <a class="rounded-btn" href="#">Log in</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default withRouter(Header);