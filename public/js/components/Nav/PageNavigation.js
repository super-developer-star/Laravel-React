import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

import './Style.css';

export default class PageNavigation extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { nextPage, label, previousPage } = this.props;
        return (
            <div className="page">
                <div className="previous"><Link to={previousPage}><RaisedButton label="Previous"/></Link></div>
                <div className="next"><Link to={nextPage}><RaisedButton label={label}/></Link></div>
            </div> 
        )
    }
}