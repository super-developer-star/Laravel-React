import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import './Style.css';

export default class PageNavigation extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { nextPage, label, previousPage } = this.props;
        return (
            <div className="page">
                <div className="previous"><RaisedButton href={previousPage} label="Previous"/></div>
                <div className="next"><RaisedButton href={nextPage} label={label}/></div>
            </div> 
        )
    }
}