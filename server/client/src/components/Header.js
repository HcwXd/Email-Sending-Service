import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Payment from './Payment';

class Header extends React.Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li>
                        <a href="/auth/google">Login with google</a>
                    </li>
                );
            default:
                return [
                    <li key="1">Credits: {this.props.auth.credits}</li>,
                    <li key="1">
                        <Payment />
                    </li>,
                    <li key="2">
                        <a>Logout</a>
                    </li>,
                ];
                break;
        }
    }
    render() {
        return <div>{this.renderContent()}</div>;
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
