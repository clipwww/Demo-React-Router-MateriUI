import React from 'react';
import Appbar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Colors from 'material-ui/lib/styles/colors';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var AppBar = React.createClass({
    getInitialState: function(){
        return{
            open: false
        }
    },
    handleToggle: function(){
        this.setState({open: !this.state.open});
    },
    handleClose: function(){
        this.setState({open: !this.state.open});
    },
    goGithub: function(){
        window.open('https://github.com/clipwww','_blank');
    },
    render: function(){
        return (
            <div>
                <Appbar title="這是標題"
                    onLeftIconButtonTouchTap = {this.handleToggle}
                    iconClassNameRight = "muidocs-icon-custom-github"
                    onRightIconButtonTouchTap = {this.goGithub} />
                <LeftNav
                  docked={false}
                  width={300}
                  open={this.state.open}
                  onRequestChange={open => this.setState({open})} >
                    <Appbar title="Menu" iconClassNameLeft="muidocs-icon-action-home"/>
                    <MenuItem leftIcon={<ActionGrade />} onTouchTap={this.handleClose} href="#pageOne">第一頁</MenuItem>
                    <MenuItem leftIcon={<ActionGrade />} onTouchTap={this.handleClose} href="#pageTwo">第二頁</MenuItem>
                </LeftNav>
                <RouteHandler/>
            </div>
        );
    }
})

module.exports = AppBar ;
