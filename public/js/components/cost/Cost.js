import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import PageNavigation from '../Nav/PageNavigation';
import './Style.css';


export default class Cost extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nextPage: '',
            previousPage: '/choose-package',
            label: 'FINISH'
        };
    }

    render() {
        const { previousPage, nextPage, label } = this.state;
        return (
            <div>
                <div className="list">
                    <div className="element">
                        <div className="Label">Total cost of the swap</div>
                        <div className="value">$0</div>
                    </div>
                    <div className="element">
                        <div className="Label">Please tick if you agree to our <span style={{color:"#3c8dbc"}}>Ts&Cs</span></div>
                        <div className="value">
                            <MuiThemeProvider><Checkbox /></MuiThemeProvider>
                        </div>
                    </div>
                </div>
                <PageNavigation nextPage={nextPage} previousPage={previousPage} label={label}/>
            </div>
        )
    }
}