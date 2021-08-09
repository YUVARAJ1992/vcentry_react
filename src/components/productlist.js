import React, { Component } from 'react';

import DataSharingContext from '../context/data-sharing-context';

class Productlist extends Component {
    render() {
        return (
            <DataSharingContext.Consumer>
                {
                    (context) => {
                        return (
                            <div>
                                <h1>This is product list</h1>
                                <h1>The search result is  {context.searchResult} </h1>
                            </div>
                        );
                    }
                }

            </DataSharingContext.Consumer>

        );
    }
}

Productlist.contextType = DataSharingContext;
export default Productlist;