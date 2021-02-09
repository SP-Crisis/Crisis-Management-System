import React from 'react';
import ReactDOM from 'react-dom';
import './dashboard.css';

class App extends React.Component{
    render(){
        return(
            <div>
                <div id="wrapper">
                    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                            <div class="sidebar-brand-icon rotate-n-15">
                                <i class="fas fa-laugh-wink"></i>
                            </div>
                            <div class="sidebar-brand-text mx-3"><sub>Crisis Managment System</sub></div>
                        </a>

                        <hr class="sidebar-divider my-0"></hr>

                        <div class="sidebar-heading">
                            Interface
                        </div>
                        <li class="nav-item">
                             <a class="nav-link" href="charts.html">
                                <i class="fas fa-fw fa-chart-area"></i>
                                <span>CSU Dashboard</span></a>
                        </li>
                         <li class="nav-item">
                             <a class="nav-link" href="charts.html">
                                <i class="fas fa-fw fa-chart-area"></i>
                                <span>Policies</span></a>
                        </li>
                        <li class="nav-item">
                             <a class="nav-link" href="charts.html">
                                <i class="fas fa-fw fa-chart-area"></i>
                                <span>Operations</span></a>
                        </li>
                         <li class="nav-item">
                             <a class="nav-link" href="charts.html">
                                <i class="fas fa-fw fa-chart-area"></i>
                                <span>Forum</span></a>
                        </li>
                        <li class="nav-item">
                             <a class="nav-link" href="charts.html">
                                <i class="fas fa-fw fa-chart-area"></i>
                                <span>Technologies</span></a>
                        </li>
                        <li class="nav-item">
                             <a class="nav-link" href="charts.html">
                                <i class="fas fa-fw fa-chart-area"></i>
                                <span>Profile</span></a>
                        </li>

                    </ul>

                    <div id="content-wrapper" class="d-flex flex-column">
                        <div id="content">
                            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                                <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                                    <i class="fa fa-bars"></i>
                                </button>

                                <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                    <div class="input-group">
                                        <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                                        aria-label="Search" aria-describedby="basic-addon2"></input>
                                        <div class="input-group-append">
                                            <button class="btn btn-primary" type="button">
                                                <i class="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>                                 
                            </nav>

                            <div class="container-fluid">
                                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                                </div>

                                <div class="row">

                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById("root"))
