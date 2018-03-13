import React, {Component} from 'react';
import Moment from 'moment';

class AppShowDate extends Component{
    constructor(props) {
        super(props);

        this.state = {
            dateCreated: Moment(props.date.slice(0,10), "DD/MM/YYYY")
        };

    }

    render(){
        return(
            <div className="date">
                <p className="day-date">
                    {this.state.dateCreated.format('DD')}
                </p>
                <p className="rest-data">
                    <span className="week-day">{this.state.dateCreated.format('dddd')}</span><br/>
                    <span className="month-year">{this.state.dateCreated.format('MMMM YYYY')}</span>
                </p>
            </div>
        );
    }
}

export default AppShowDate;