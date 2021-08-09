import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Switch, Route, NavLink } from 'react-router-dom';
import InboxPageComponent from './inbox-page';
import LifeCycleComponent from './lifecycle';
import ParentPageComponent from './parent-page';
import SentitemsComponent from './sent-items';
import TrashComponent from './trash';

class MailBoxComponent extends Component {
    render() {

        // console.log(this.props.location.state)
        // const data = this.props.location.state;

        return (
            <HashRouter>
                <div className="main">
                    <div className="header">
                        {/* <h1>The Email Id id : {data.email}</h1> */}
                    </div>
                    <div className="body">
                        <div className="sidebar">
                            <NavLink to="/mail/inbox" className="nav-btn" activeClassName="active-btn" >Inbox</NavLink>
                            <NavLink to="/mail/sent" className="nav-btn" activeClassName="active-btn"  >Sent-Items</NavLink>
                            <NavLink to="/mail/trash" className="nav-btn" activeClassName="active-btn" >Trash</NavLink>
                            <NavLink to="/mail/cycle" className="nav-btn" activeClassName="active-btn" >Life Cycle</NavLink>
                            <NavLink to="/mail/parent" className="nav-btn" activeClassName="active-btn" >Parent</NavLink>
                        </div>
                        <div className="content">
                            <Switch>
                                <Route path="/mail/inbox" component={InboxPageComponent} ></Route>
                                <Route path="/mail/sent" component={SentitemsComponent} ></Route>
                                <Route path="/mail/trash" component={TrashComponent} ></Route>
                                <Route path="/mail/cycle" component={LifeCycleComponent} ></Route>
                                <Route path="/mail/parent" component={ParentPageComponent} ></Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default MailBoxComponent;