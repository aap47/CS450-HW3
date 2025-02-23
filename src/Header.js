import React, { Component } from 'react'

class Header extends Component {
    render(){
        return (
            <div class="header">
                <div class="header-left-column">
                    <div class = "name">
                        {this.props.personalInfo.name}
                    </div>
                    {this.props.personalInfo.title}
                </div>
                <div class="header-right-column"> 
                    Email: 
                    <a href='mailto:${this.props.contactInfo.email}'> {this.props.contactInfo.email} </a>
                    <br></br>
                    Mobile: {this.props.contactInfo.mobile}
                </div>
            </div>
        );
        
    }
}

export default Header;