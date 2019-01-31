import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
            <footer style={{borderTop:'1px', borderColor:'black', float:'bottom', position:'absolute', marginBottom:'0'}} className="col-md-9 ml-sm-auto col-lg-10 px-4 footer footer-static footer-light navbar-border">
                <p className="clearfix blue-grey lighten-2 text-sm-center mb-0 px-2">
                    <span className="float-md-left d-block d-md-inline-block">Copyright  © 2018
                        <a className="text-bold-800 grey darken-2" href="https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent" target="_blank">PIXINVENT </a>, All rights reserved. </span>
                    <span className="float-md-right d-block d-md-inline-blockd-none d-lg-block">Hand-crafted &amp; Made with <i className="ft-heart pink"></i></span></p>
            </footer>
        )
    }
}

export default Footer;



