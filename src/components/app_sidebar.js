import React, { Component } from 'react';


class AppSidebar extends Component{

    render(){
        return(
            <div className="sidebar">
            <a className="contact-today" href="https://windsorcorporateservices.com/contact/">
                Contact us today for more information.
                <i className="fa fa-caret-right" aria-hidden="true"></i>
            </a>
            </div>
        );

    }
}

export default AppSidebar;