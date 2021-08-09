import React, { Component } from 'react'
import SearchComponent from '../components/search'

class HeaderComponent extends Component {

    render(){
        // const styles = {
        //     bgColor : {
        //         color : 'yellow',
        //         backgroundColor : 'black'
        //     },
        //     height : {
        //         height : '100px'
        //     }
        // }
        return(
            <div className="header">
                {/* <div className="border" style={styles.height}> 
                    <h1 style={styles.bgColor}>This is Header Component</h1>
                </div> */}
                <h1>Header Page</h1>
                <SearchComponent></SearchComponent>
            </div>
        );
    }
}


export default HeaderComponent;