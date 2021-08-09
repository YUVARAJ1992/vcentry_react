import React, { Component } from 'react';
import HeaderComponent from '../components/header';
import SidebarComponent from '../components/sidebar'
import ContentComponent from '../components/content';

import DataSharingContext from '../context/data-sharing-context'

class DashboardComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
          data : ''
        }
      }
    
      onReceiveSearch = (value) => {
        this.setState({
          data : value
        })
      }
    
      render() {
        return (
          <DataSharingContext.Provider value={{
            message : 'Hello from Dashboard page',
            readFromSearch : this.onReceiveSearch,
            searchResult : this.state.data
          }}>
            <div className="main">
                <HeaderComponent></HeaderComponent>
                <div className="body">
                  <SidebarComponent></SidebarComponent>
                  <ContentComponent></ContentComponent>
                </div>
              </div>
          </DataSharingContext.Provider>
        );
      }
    }
    

export default DashboardComponent;