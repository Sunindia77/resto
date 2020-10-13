import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Recentorder from './Recentorder';
import Scrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import { OverlayTrigger, Tooltip, Tab, Nav } from "react-bootstrap";
import Chart from './Chart';
import Trendingorder from './Trendingorder';
import Orderchart from './Orderchart';
import Restaurantlisting from './Restaurantlisting';

const phonetip = (
    <Tooltip>
        Call
    </Tooltip>
);
const videotip = (
    <Tooltip>
        Video Call
    </Tooltip>
);
const invitetip = (
    <Tooltip>
        Add to Chat
    </Tooltip>
);
class Homecontent extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="db-header-title">Welcome, suraj</h1>
                    </div>
                    <div className="col-12">
                        <Chart />
                    </div>
                    {/* Recent Orders Requested */}
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <div className="d-flex justify-content-between">
                                    <div className="align-self-center align-left">
                                        <h6>Recent Orders Requested</h6>
                                    </div>
                                    <button type="button" className="btn btn-primary">View All</button>
                                </div>
                            </div>
                            <div className="ms-panel-body">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">Food Item</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Product ID</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="ms-table-f-w"> <img src="assets/img/costic/pizza.jpg" alt="people" /> Pizza </td>
                                                <td>$19.99</td>
                                                <td>67384917</td>
                                            </tr>
                                            <tr>
                                                <td className="ms-table-f-w"> <img src="assets/img/costic/french-fries.jpg" alt="people" /> French Fries </td>
                                                <td>$14.59</td>
                                                <td>789393819</td>
                                            </tr>
                                            <tr>
                                                <td className="ms-table-f-w"> <img src="assets/img/costic/cereals.jpg" alt="people" /> Multigrain Hot Cereal </td>
                                                <td>$25.22</td>
                                                <td>137893137</td>
                                            </tr>
                                            <tr>
                                                <td className="ms-table-f-w"> <img src="assets/img/costic/egg-sandwich.jpg" alt="people" /> Fried Egg Sandwich </td>
                                                <td>$11.23</td>
                                                <td>235193138</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header new">
                                <h6>Monthly Revenue</h6>
                                <select className="form-control new" id="exampleSelect">
                                    <option value={1}>January</option>
                                    <option value={2}>February</option>
                                    <option value={3}>March </option>
                                    <option value={4}>April</option>
                                    <option value={5}>May</option>
                                    <option value={1}>June</option>
                                    <option value={2}>July</option>
                                    <option value={3}>August</option>
                                    <option value={4}>September</option>
                                    <option value={5}>October</option>
                                    <option value={4}>November</option>
                                    <option value={5}>December</option>
                                </select>
                            </div>
                            <div className="ms-panel-body">
                                <span className="progress-label"> <strong>Week 1</strong> </span>
                                <div className="progress">
                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                                </div>
                                <span className="progress-label"> <strong>Week 2</strong> </span>
                                <div className="progress">
                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>50%</div>
                                </div>
                                <span className="progress-label"> <strong>Week 3</strong> </span>
                                <div className="progress">
                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>75%</div>
                                </div>
                                <span className="progress-label"> <strong>Week 4</strong> </span>
                                <div className="progress">
                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>40%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Food Orders */}
                    <div className="col-md-12">
                        <Trendingorder />
                    </div>
                    {/* END/Food Orders */}
                    {/* Recent Orders Requested */}
                    <div className="col-xl-7 col-md-12">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <div className="d-flex justify-content-between">
                                    <div className="ms-header-text">
                                        <h6>Order Timing Chart</h6>
                                    </div>
                                </div>
                            </div>
                            <Orderchart />
                        </div>
                    </div>
                    {/* Favourite Products */}
                    <div className="col-xl-5 col-md-12">
                        <div className="ms-panel ms-widget ms-crypto-widget">
                            <div className="ms-panel-header">
                                <h6>Favourite charts</h6>
                            </div>
                            <div className="ms-panel-body p-0">
                                <Tab.Container defaultActiveKey="mon">
                                    <Nav variant="tabs" className="nav nav-tabs nav-justified has-gap px-4 pt-4">
                                        <Nav.Item>
                                            <Nav.Link eventKey="mon">Mon</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tue">Tue</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="wed">Wed</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="thu">Thu</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fri">Fri</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="mon">
                                            <div className="table-responsive">
                                                <table className="table table-hover thead-light">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Restaurant Names</th>
                                                            <th scope="col">Qty</th>
                                                            <th scope="col">Orders</th>
                                                            <th scope="col">Profit</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Hunger House</td>
                                                            <td>8528</td>
                                                            <td className="ms-text-success">+17.24%</td>
                                                            <td>7.65%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Food Lounge</td>
                                                            <td>4867</td>
                                                            <td className="ms-text-danger">-12.24%</td>
                                                            <td>9.12%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Delizious</td>
                                                            <td>7538</td>
                                                            <td className="ms-text-success">+32.04%</td>
                                                            <td>14.29%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Netherfood</td>
                                                            <td>1614</td>
                                                            <td className="ms-text-danger">-20.75%</td>
                                                            <td>12.25%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Rusmiz</td>
                                                            <td>7538</td>
                                                            <td className="ms-text-success">+32.04%</td>
                                                            <td>14.29%</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tue">
                                            <div className="table-responsive">
                                                <table className="table table-hover thead-light">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Restaurant Name</th>
                                                            <th scope="col">Qty</th>
                                                            <th scope="col">Orders</th>
                                                            <th scope="col">Profit</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Hunger House</td>
                                                            <td>8528</td>
                                                            <td className="ms-text-success">+17.24%</td>
                                                            <td>7.65%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Food Lounge</td>
                                                            <td>4867</td>
                                                            <td className="ms-text-danger">-12.24%</td>
                                                            <td>9.12%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Delizious</td>
                                                            <td>7538</td>
                                                            <td className="ms-text-success">+32.04%</td>
                                                            <td>14.29%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Netherfood</td>
                                                            <td>1614</td>
                                                            <td className="ms-text-danger">-20.75%</td>
                                                            <td>12.25%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Rusmiz</td>
                                                            <td>7538</td>
                                                            <td className="ms-text-success">+32.04%</td>
                                                            <td>14.29%</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="wed">
                                            <div className="table-responsive">
                                                <table className="table table-hover thead-light">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Restaurant Name</th>
                                                            <th scope="col">Qty</th>
                                                            <th scope="col">Orders</th>
                                                            <th scope="col">Profit</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Hunger House</td>
                                                            <td>8528</td>
                                                            <td className="ms-text-success">+17.24%</td>
                                                            <td>7.65%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Food Lounge</td>
                                                            <td>4867</td>
                                                            <td className="ms-text-danger">-12.24%</td>
                                                            <td>9.12%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Delizious</td>
                                                            <td>7538</td>
                                                            <td className="ms-text-success">+32.04%</td>
                                                            <td>14.29%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Netherfood</td>
                                                            <td>1614</td>
                                                            <td className="ms-text-danger">-20.75%</td>
                                                            <td>12.25%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Rusmiz</td>
                                                            <td>7538</td>
                                                            <td className="ms-text-success">+32.04%</td>
                                                            <td>14.29%</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="thu">
                                            <div className="table-responsive">
                                                <table className="table table-hover thead-light">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Restaurant Name</th>
                                                            <th scope="col">Qty</th>
                                                            <th scope="col">Orders</th>
                                                            <th scope="col">Profit</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Hunger House</td>
                                                            <td>8528</td>
                                                            <td className="ms-text-success">+17.24%</td>
                                                            <td>7.65%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Food Lounge</td>
                                                            <td>4867</td>
                                                            <td className="ms-text-danger">-12.24%</td>
                                                            <td>9.12%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Delizious</td>
                                                            <td>7538</td>
                                                            <td className="ms-text-success">+32.04%</td>
                                                            <td>14.29%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Netherfood</td>
                                                            <td>1614</td>
                                                            <td className="ms-text-danger">-20.75%</td>
                                                            <td>12.25%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Rusmiz</td>
                                                            <td>7538</td>
                                                            <td className="ms-text-success">+32.04%</td>
                                                            <td>14.29%</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fri">
                                            <div className="table-responsive">
                                                <table className="table table-hover thead-light">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Restaurant Name</th>
                                                            <th scope="col">Qty</th>
                                                            <th scope="col">Orders</th>
                                                            <th scope="col">Profit</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Hunger House</td>
                                                            <td>8528</td>
                                                            <td className="ms-text-success">+17.24%</td>
                                                            <td>7.65%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Food Lounge</td>
                                                            <td>4867</td>
                                                            <td className="ms-text-danger">-12.24%</td>
                                                            <td>9.12%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Delizious</td>
                                                            <td>7538</td>
                                                            <td className="ms-text-success">+32.04%</td>
                                                            <td>14.29%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Netherfood</td>
                                                            <td>1614</td>
                                                            <td className="ms-text-danger">-20.75%</td>
                                                            <td>12.25%</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Rusmiz</td>
                                                            <td>7538</td>
                                                            <td className="ms-text-success">+32.04%</td>
                                                            <td>14.29%</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </div>
                        {/* Favourite Products */}
                        {/* Total Earnings */}
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Total Earnings</h6>
                            </div>
                            <div className="ms-panel-body p-0">
                                <div className="ms-quick-stats">
                                    <div className="ms-stats-grid">
                                        <i className="fa fa-star" />
                                        <p className="ms-text-dark">$8,033</p>
                                        <span>Today</span>
                                    </div>
                                    <div className="ms-stats-grid">
                                        <i className="fa fa-university" />
                                        <p className="ms-text-dark">$3,039</p>
                                        <span>Yesterday</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Total Earnings */}
                    {/* Recent Placed Orders< */}
                    <div className="col-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Recently Placed Orders</h6>
                            </div>
                            <div className="ms-panel-body">
                                <Recentorder />
                            </div>
                        </div>
                    </div>
                    {/* Recent Orders< */}
                    <div className="col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>New Resturant Listings</h6>
                            </div>
                            <div className="ms-panel-body">
                                <Restaurantlisting />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Homecontent;