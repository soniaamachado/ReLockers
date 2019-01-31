import React from 'react';
import "../css/Navbar.css";
import {NavLink} from "react-router-dom";

export default class Navbar extends React.Component {

    render() {
        return (
            <div style={{position:'fixed', zIndex:'1500'}}>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <nav className="navbar navbar-dark fixed-top flex-md-nowrap p-0 shadow-sm" style={{backgroundColor:'white'}}>
                <NavLink className="navbar-brand col-sm-3 col-md-2 mr-0" to={"/"} style={{backgroundColor:'white',color:'#5887F9'}}>ReLockers</NavLink>
                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                            <NavLink className="nav-link" to={'/'} style={{color:'#5887F9'}}>Sign out</NavLink>
                        </li>
                    </ul>
            </nav>

            <nav  className=" col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <NavLink activeClassName={'NavSelected'} exact className="nav-link" to={'/'}>
                                <i className="material-icons md-24 nav_icon">home</i>
                                <span className={'navbar_title'}>Início</span>
                            </NavLink>
                        </li>
                        <li className="nav-item" >
                            <NavLink activeClassName={'NavSelected'} className="nav-link" to={'/encomendas'}>
                                <i className="material-icons md-24 nav_icon">assignment</i>
                                <span className={'navbar_title'}>Encomendas</span>
                            </NavLink>
                        </li>
                        <li className="nav-item" >
                            <NavLink  activeClassName={'NavSelected'} className="nav-link" to={'/cacifos'}>
                                <i className="material-icons md-24 nav_icon">lock</i>
                                <span className={'navbar_title'}>Cacifos</span>
                            </NavLink>
                        </li>

                        <li className="nav-item" >
                            <NavLink  activeClassName={'NavSelected'} className="nav-link" to={"/estafetas"}>
                                <i className="material-icons md-24 nav_icon">person</i>
                                <span className={'navbar_title'}>Estafetas</span>
                            </NavLink>
                        </li>

                        <li className="nav-item">
                        <NavLink activeClassName={'NavSelected'} className="nav-link" to={"/definicoes"}>
                                <i className="material-icons md-24 nav_icon">settings</i>
                                <span className={'navbar_title'}>Definições</span>
                        </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            </main>

            </div>
        );
    }
}

