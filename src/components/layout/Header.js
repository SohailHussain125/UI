import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './header.scss'

// import '../../styles/components/Header.scss';
import "./../../styles/scss/_navbar.scss"
import './../../styles/scss/_nav.scss'

import logoImg from '../../assets/images/logo.png'

class Header extends Component {

  render() {
    return (
      <nav class="navbar navbar-expand-lg top-nav">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src={logoImg} alt="" class="logo"/>
            </a>
            {/* <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button> */}

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