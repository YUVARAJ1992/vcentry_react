import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom';

import RegisterPageComponent from './pages/register-page';
import LoginPageComponent from './pages/login-page';
import HomePageComponent from './pages/home-page';
import AboutPageComponent from './pages/about-page';
import SettingsPageComponent from './pages/settings-page';

import './styles/main.css'
import MailBoxComponent from './pages/mail-box';
import DashboardComponent from './pages/dashboard';
import Register from './components/register';

class AppComponent extends Component {

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" exact={true} component={LoginPageComponent}></Route>
                    <Route path="/registerPage" component={RegisterPageComponent}></Route>
                    <Route path="/home" component={HomePageComponent}></Route>
                    <Route path="/about" component={AboutPageComponent} ></Route>
                    <Route path="/settings" component={SettingsPageComponent}></Route>
                    <Route path="/mail" component={MailBoxComponent}></Route>
                    <Route path="/dashboard" component={DashboardComponent} ></Route>
                    <Route path="/register" component={Register}></Route>
                </Switch>
            </HashRouter>
        );
    }
}


export default AppComponent;