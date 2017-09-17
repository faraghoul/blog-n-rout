import React, { Component } from 'react';

class AppHeader extends Component{

    constructor(props){
        super(props);
        this.state = { term: ''};
    }

    render(){
        return (
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="title-s">
                            <div className="service-title">
                                <div className="container">
                                    <div>
                                        <h1>Blog</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}


export default AppHeader;