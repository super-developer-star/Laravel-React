import React from 'react';
import { IndexLink, Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import { Button } from 'react-bootstrap';

import './Style.css';

const style = {
    buttonStyle: {
        margin: 12
    }
}
export default class Home extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <AppBar
                        title="Upgrade/Downgrade"                    
                        showMenuIconButton={false}
                    />
                </MuiThemeProvider>
                <div className="body">
                    <MuiThemeProvider>
                        <AppBar
                            title="Upgrade"                    
                            iconElementLeft={<Avatar></Avatar>}
                        />                                                
                    </MuiThemeProvider>   
                    <MuiThemeProvider>
                        <Paper style={{width:'100%', height:'100%'}} zDepth={2} rounded={false}>
                            <div className="Content">
                                <div className='button'>           
                                    <IndexLink to="/">        
                                    <RaisedButton
                                        style={style.buttonStyle}
                                        backgroundColor="#ee6f00"
                                        label="Current package details"                                                               
                                    /></IndexLink>
                                    <Link to="/choose-package">
                                    <RaisedButton
                                        style={style.buttonStyle}
                                        primary={true}
                                        label="Choose upgrade/downgrad package"                                                               
                                    /></Link>
                                    <Link to="/total-cost">
                                    <RaisedButton
                                        style={style.buttonStyle}
                                        primary={true}
                                        label="Total cost"                                                          
                                    />
                                    </Link>
                                    {/* <IndexLink to="/">Home</IndexLink>
                                    <Link to="/choose-package">Package</Link>
                                    <Link to="/total-cost">Cost</Link> */}
                                </div>
                                {this.props.children}                                                                                                                            
                            </div>                                                                       
                        </Paper>
                    </MuiThemeProvider>                 
                </div>                
            </div>
        )
    }
}