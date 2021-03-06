import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import $ from 'jquery';
import Scrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

import logo from '../../assets/img/costic/costic-logo-216x62.png';

class Sidenavigation extends Component {

    removeoverlay = () => {
        $('.ms-body').toggleClass('ms-aside-left-open');
        $('#ms-side-nav').toggleClass('ms-aside-open');
        $(".ms-aside-overlay.ms-overlay-left").toggleClass('d-block');
    }
    componentDidMount() {
        function setActiveMenuItem() {
            $('.ms-main-aside .menu-item>a').on('click', function () {
                $(this).removeAttr('href');
                var element = $(this).parent('li');
                if (element.hasClass('active')) {
                    element.removeClass('active');
                    element.find('li').removeClass('active');
                    element.find('.collapse').slideUp();
                } else {
                    element.addClass('active');
                    element.children('.collapse').slideDown();
                    element.siblings('li').children('.collapse').slideUp();
                    element.siblings('li').removeClass('active');
                    element.siblings('li').find('li').removeClass('active');
                    element.siblings('li').find('.collapse').slideUp();
                }
            });
        }
        setActiveMenuItem();
    }
    render() {
        return (
            <div>
                <div className="ms-aside-overlay ms-overlay-left ms-toggler" onClick={this.removeoverlay}></div>
                <div className="ms-aside-overlay ms-overlay-right ms-toggler"></div>
                <Scrollbar id="ms-side-nav" className="side-nav fixed ms-aside-scrollable ms-aside-left">
                    {/* Logo */}
                    <div className="logo-sn ms-d-block-lg">
                        <Link className="pl-0 ml-0 text-center" to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    {/* Navigation */}
                    <ul className="accordion ms-main-aside fs-14" id="side-nav-accordion">
                        {/* Dashboard */}
                        <li className="menu-item">
                            <Link to="#" className="has-chevron"> <span><i className="material-icons fs-16" >dashboard</i>Dashboard </span>
                            </Link>
                            <ul id="dashboard" className="collapse" aria-labelledby="dashboard" data-parent="#side-nav-accordion">
                                <li> <Link to="/">Restaurant</Link>
                                </li>
                            </ul>
                        </li>
                        {/* /Dashboard */}
                        {/* product */}
                        <li className="menu-item">
                            <Link to="#" className="has-chevron"> <span><i className="fa fa-archive fs-16" />Menus </span>
                            </Link>
                            <ul id="product" className="collapse" aria-labelledby="product" data-parent="#side-nav-accordion">
                                <li> <Link to="/menu-catalogue" >Menu Catalogue</Link>
                                </li>
                                <li> <Link to="/menu-list" >Menu List</Link>
                                </li>
                                <li> <Link to="/menu-grid" >Menu Grid</Link>
                                </li>
                                <li> <Link to="/add-product" >Add Product</Link>
                                </li >
                                <li> <Link to="/product-detail" >Product Detail</Link>
                                </li >
                            </ul >
                        </li >
                        {/* product end */}
                        {/* orders */}
                        <li className="menu-item">
                            <Link to="/orders"> <span><i className="fas fa-clipboard-list fs-16" />Orders</span>
                            </Link>
                        </li >
                        {/* orders end */}
                        {/* restaurants */}
                        <li className="menu-item">
                            <Link to="/restaurant-list"> <span><i className="fa fa-tasks fs-16" />Restaurants List</span>
                            </Link>
                        </li >
                        {/* restaurants end */}
                        {/* Invoice */}
                        <li className="menu-item">
                            <Link to="#" className="has-chevron"> <span><i className="fas fa-file-invoice fs-16" />Invoice </span>
                            </Link>
                            <ul id="invoice" className="collapse" aria-labelledby="invoice" data-parent="#side-nav-accordion">
                                <li> <Link to="/invoice-detail" >Invoice Detail</Link>
                                </li>
                                <li> <Link to="/invoice-list" >Invoice List</Link>
                                </li>
                            </ul >
                        </li >
                        {/* Invoice end */}
                        {/* customers*/}
                        <li className="menu-item">
                            <Link to="#" className="has-chevron"> <span><i className="fas fa-user-friends fs-16" />Customers </span>
                            </Link>
                            <ul id="customer" className="collapse" aria-labelledby="customer" data-parent="#side-nav-accordion">
                                
                                <li> <Link to="/customer-list" >Customers List</Link>
                                </li>
                                
                            </ul >
                        </li >
                        {/* Customers  end */}
                    
                        
                    
                        

                        
                    </ul >
                </Scrollbar >
            </div >
        );
    }
}

export default Sidenavigation;