import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import PageNavigation from '../Nav/PageNavigation';
import './Style.css';

export default class Upgrad extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nextPage:"/choose-package",
            label:"NEXT"
        };
    }

    render() {
        const { nextPage, label } = this.state;
        return (
            <div>
                <div className="list">
                    <div className="element">
                        <div className="Label">Admins allowed</div>
                        <div className="value">5</div>
                    </div>
                    <div className="element">
                        <div className="Label">Amount</div>
                        <div className="value">$370</div>
                    </div>
                    <div className="element">
                        <div className="Label">Contracts/units available</div>
                        <div className="value">70</div>
                    </div>
                    <div className="element">
                        <div className="Label">Support</div>
                        <div className="value">Priority email + chat support</div>
                    </div>
                    <div className="element">
                        <div className="Label">Membership start date</div>
                        <div className="value">2017-08-08</div>
                    </div>
                    <div className="element">
                        <div className="Label">Period</div>
                        <div className="value">Monthly</div>
                    </div>
                    <div className="element">
                        <div className="Label">Status</div>
                        <div className="value">Active</div>
                    </div>
                    <div className="element">
                        <div className="Label">Cancel Membership</div>
                        <div className="list-button">
                            <RaisedButton                                                                                    
                                backgroundColor="#ee6f00"
                                label="Cancel"                                                               
                            />
                        </div>                                        
                    </div>                                                                                            
                </div>   
                <PageNavigation nextPage={nextPage} label={label}/>      
            </div>    
        )
    }
}