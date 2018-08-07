import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

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
                return <h1>Loginnnn</h1>;
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
