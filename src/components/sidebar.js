import React, { Component } from 'react'

class SidebarComponent extends Component {

    // homePage(){
    //     alert("Home Page")
    // }

    // inboxPage(){
    //     alert("inbox Page")
    // }

    // aboutPage(){
    //     alert("about Page")
    // }

    render(){
        return(
            <div className="sidebar">
                {/* <div className="width-50-per">
                    <h1>This is Sidebar Component</h1>
                    <div>
                        <button className="btn" onClick={() => { this.homePage()}}>Home Page</button>
                        <button className="btn" onClick={() => { this.inboxPage()}}>Inbox Page</button>
                        <button className="btn" onClick={() => { this.aboutPage()}}>About Page</button>
                    </div>
                </div> */}
                <h1>Sidebar</h1>
            </div>
        );
    }
}


export default SidebarComponent;