import React, { Component } from 'react';
import  {Link} from 'react-router-dom';

class AppHeader extends Component{

    constructor(props){
        super(props);
        this.state = { term: ''};
    }

    render(){
        return (
            <header>
                <section >
                    <div className="container">
                        <div className="row">

                            <div className="upper-header">
                                <Link to="/"><img src="../../assets/logo-home.png" alt=""/></Link>
                                <ul className="custom-menulist">
                                    <li>About us</li>
                                    <li>Services</li>
                                    <li>Guarantee</li>
                                    <li>Resources</li>
                                    <li>Forms</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="service-title" >
                    <div className="container">
                        <div className="row">
                            <div>
                                <h1>Blog</h1>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        );
    }
}


export default AppHeader;