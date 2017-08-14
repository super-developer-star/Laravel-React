import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap'; 

import PageNavigation from '../Nav/PageNavigation';
import './Style.css';


export default class Package extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nextPage: '/total-cost',
            previousPage: '/',
            label: 'NEXT'
        };
    }

    render() {
        const { previousPage, nextPage, label } = this.state;
        return (
            <div>
                <div className="list-menu">
                    <div className="form-element">
                        <div className="form-label">Choose package:</div>
                        <div className="form-value">
                            <FormGroup controlId="formControlsSelect">                        
                                <FormControl componentClass="select">
                                    <option value="select">Standard</option>
                                    <option value="other">...</option>
                                </FormControl>
                            </FormGroup>
                        </div>
                    </div>
                    <div className="form-element">
                        <div className="form-label">Choose period:</div>
                        <div className="form-value">
                            <FormGroup controlId="formControlsSelect">                        
                                <FormControl componentClass="select">
                                    <option value="select">Monthly</option>
                                    <option value="other">...</option>
                                </FormControl>
                            </FormGroup>
                        </div>
                    </div>
                </div>
                <PageNavigation nextPage={nextPage} previousPage={previousPage} label={label}/>
            </div>
        )
    }
}