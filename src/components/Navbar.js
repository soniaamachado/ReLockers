import React from 'react';
import "../css/Navbar.css";
import {NavLink} from "react-router-dom";

export default class Navbar extends React.Component {

    render() {
        return (
            <div style={{position:'fixed', zIndex:'1500'}}>
            <nav className="navbar navbar-dark bg-light fixed-top flex-md-nowrap p-0 shadow-sm">
                <NavLink className="navbar-brand bg-light col-sm-3 col-md-2 mr-0" to={"/"} style={{color:'#5887F9'}}>ReLockers</NavLink>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                Inicio
                            </NavLink>
                        </li>
                        <li className="nav-item" >
                            <NavLink activeClassName={'NavSelected'} className="nav-link" to={'/encomendas'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                                Encomendas
                            </NavLink>
                        </li>
                        <li className="nav-item" >
                            <NavLink  activeClassName={'NavSelected'} className="nav-link" to={'/cacifos'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="feather feather-file">
                                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                                    <polyline points="13 2 13 9 20 9"></polyline>
                                </svg>
                                Cacifos
                            </NavLink>
                        </li>

                        <li className="nav-item" >
                            <NavLink  activeClassName={'NavSelected'} className="nav-link" to={"/estafetas"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                Estafetas
                            </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink activeClassName={'NavSelected'} className="nav-link" to={"/definicoes"}>
                                <svg width="13" height="13" viewBox="3 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M8.0002 4.11133C5.85575 4.11133 4.11133 5.85579 4.11133 8.00024C4.11133 10.1446 5.85575 11.8891 8.0002 11.8891C10.1446 11.8891 11.8891 10.1446 11.8891 8.00024C11.8891 5.85579 10.1446 4.11133 8.0002 4.11133ZM8.0002 11.3335C6.16215 11.3335 4.66688 9.83829 4.66688 8.00024C4.66688 6.16214 6.16215 4.66688 8.0002 4.66688C9.83825 4.66688 11.3336 6.16214 11.3336 8.00024C11.3336 9.83829 9.83825 11.3335 8.0002 11.3335Z"   />
                                    <path d="M14.7278 6.33335H14.1672C14.0241 5.8022 13.8139 5.2939 13.5394 4.8175L13.9355 4.42139C14.0814 4.27555 14.1616 4.08139 14.1616 3.87528C14.1616 3.66889 14.0814 3.475 13.9355 3.32889L12.6708 2.06417C12.3791 1.77278 11.8705 1.77222 11.5783 2.06417L11.1822 2.46028C10.7055 2.18611 10.1975 1.97583 9.66665 1.83278V1.27222C9.66665 0.84639 9.3203 0.5 8.89445 0.5H7.10555C6.6797 0.5 6.33335 0.84639 6.33335 1.27222V1.83278C5.8025 1.97583 5.29445 2.18611 4.8175 2.46055L4.42139 2.06444C4.12944 1.77222 3.62055 1.77278 3.32889 2.06444L2.06417 3.32916C1.91834 3.475 1.83805 3.66916 1.83805 3.87555C1.83805 4.08166 1.91834 4.27555 2.06417 4.42166L2.46028 4.81778C2.18611 5.2939 1.97555 5.8022 1.83278 6.33335H1.27222C0.84639 6.33335 0.5 6.6797 0.5 7.10555V8.89415C0.5 9.3203 0.84639 9.66665 1.27222 9.66665H1.83278C1.97583 10.1975 2.18611 10.7055 2.46055 11.1825L2.06444 11.5786C1.91861 11.7244 1.83833 11.9186 1.83833 12.1247C1.83833 12.3311 1.91861 12.525 2.06444 12.6711L3.32916 13.9358C3.62083 14.2278 4.12972 14.228 4.42166 13.9358L4.81778 13.5397C5.2947 13.8139 5.8028 14.0244 6.3336 14.1675V14.728C6.3336 15.1539 6.68 15.5003 7.10585 15.5003H8.89445C9.3203 15.5003 9.66665 15.1539 9.66665 14.728V14.1675C10.1975 14.0244 10.7055 13.8141 11.1825 13.5397L11.5786 13.9358C11.8708 14.228 12.3791 14.2275 12.6711 13.9358L13.9358 12.6711C14.0816 12.5253 14.1619 12.3311 14.1619 12.1247C14.1619 11.9186 14.0816 11.7247 13.9358 11.5786L13.5397 11.1825C13.8139 10.7055 14.0244 10.1975 14.1675 9.66665H14.728C15.1539 9.66665 15.5003 9.3203 15.5003 8.89445V7.10555C15.5 6.6797 15.1536 6.33335 14.7278 6.33335ZM14.9444 8.89445C14.9444 9.0139 14.8472 9.1111 14.7278 9.1111H13.73L13.68 9.32585C13.5353 9.9472 13.2914 10.5369 12.9541 11.0789L12.8375 11.2661L13.5428 11.9714C13.6275 12.0561 13.6275 12.1936 13.5428 12.278L12.278 13.5428C12.1936 13.6272 12.0561 13.6278 11.9714 13.5428L11.2661 12.8375L11.0789 12.9541C10.5372 13.2914 9.9475 13.5355 9.32585 13.68L9.1111 13.73V14.7278C9.1111 14.8472 9.0139 14.9444 8.89445 14.9444H7.10555C6.9861 14.9444 6.8889 14.8472 6.8889 14.7278V13.73L6.67415 13.68C6.0528 13.5353 5.46305 13.2914 4.92111 12.9541L4.73389 12.8375L4.02861 13.5428C3.94361 13.6278 3.80611 13.6272 3.72194 13.5428L2.45722 12.278C2.3725 12.1933 2.3725 12.0558 2.45722 11.9714L3.1625 11.2661L3.04583 11.0789C2.70861 10.5372 2.46444 9.9475 2.32 9.32585L2.27 9.1111H1.27222C1.15278 9.1111 1.05555 9.0139 1.05555 8.89445V7.10555C1.05555 6.9861 1.15278 6.8889 1.27222 6.8889H2.27L2.32 6.67415C2.46472 6.0525 2.70861 5.4628 3.04583 4.92111L3.1625 4.73389L2.45722 4.02861C2.3725 3.94389 2.3725 3.80639 2.45722 3.72194L3.72194 2.45722C3.80639 2.37278 3.94389 2.37222 4.02861 2.45722L4.73389 3.1625L4.92111 3.04583C5.4628 2.70861 6.0525 2.46444 6.67415 2.32L6.8889 2.27V1.27222C6.8889 1.15278 6.9861 1.05555 7.10555 1.05555H8.89415C9.0139 1.05555 9.1111 1.15278 9.1111 1.27222V2.27L9.32585 2.32C9.9472 2.46472 10.5369 2.70861 11.0789 3.04583L11.2661 3.1625L11.9714 2.45722C12.0564 2.37222 12.1939 2.37278 12.278 2.45722L13.5428 3.72194C13.6275 3.80666 13.6275 3.94417 13.5428 4.02861L12.8375 4.73389L12.9541 4.92111C13.2914 5.4625 13.5355 6.0522 13.68 6.67415L13.73 6.8889H14.7278C14.8472 6.8889 14.9444 6.9861 14.9444 7.10555V8.89445Z"  />
                                    <path d="M8.00046 5.22241C6.46876 5.22241 5.22266 6.46856 5.22266 8.00021C5.22266 9.53186 6.46876 10.778 8.00046 10.778C9.53211 10.778 10.7782 9.53186 10.7782 8.00021C10.7782 6.46856 9.53211 5.22241 8.00046 5.22241ZM8.00046 10.2224C6.77516 10.2224 5.77821 9.22551 5.77821 8.00021C5.77821 6.77491 6.77516 5.77801 8.00046 5.77801C9.22571 5.77801 10.2227 6.77491 10.2227 8.00021C10.2227 9.22551 9.22571 10.2224 8.00046 10.2224Z"  /></svg>
                                Definições
                        </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        );
    }
}

