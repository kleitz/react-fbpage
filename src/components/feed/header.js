'use strict';

import React from 'react';
import Radium from 'radium';
import moment from 'moment';

@Radium
class Header extends React.Component {
    constructor(props){
        super(props);
    }
    dateTime(){
        const dt = moment(this.props.datetime);
        const now = moment();
        const year = dt.isBefore(now, 'year') ? 'YYYY' : '';
        const format = `MMMM DD ${year} [at] h:mma`;
        return dt.format(format);
    }
    avatar(){
        return `https://graph.facebook.com/${this.props.id}/picture`;
    }
    render(){
        const style = this.props.style;
        const link = this.props.link;
        return (
            <div style={style.base}>
                <a href={link} style={style.iconLink}>
                    <img
                        src={this.avatar()}
                        style={style.iconImg}
                    />
                </a>
                <div style={style.details}>
                    <a
                        key="name"
                        href={link}
                        style={style.name}>
                        {this.props.name}
                    </a>
                    <a
                        key="datetime"
                        href={link}
                        style={style.datetime}>
                        {this.dateTime()}
                    </a>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    style: React.PropTypes.object,
    id: React.PropTypes.string,
    datetime: React.PropTypes.string,
    link: React.PropTypes.string,
    name: React.PropTypes.string
};

export default Header;
