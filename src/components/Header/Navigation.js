import React, { PropTypes } from 'react';
import lodash from 'lodash';
import { Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class Navigation extends React.Component {
  static propTypes = {
    appName: PropTypes.string.isRequired,
    user: PropTypes.object,
    router: PropTypes.object.isRequired,
    currentRoute: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { user, router, currentRoute, appName } = this.props;
    return (<Navbar fixedTop fluid>
      <NavBrand>{appName}</NavBrand>
      <Nav>
        <NavItem href="/" className={(currentRoute.pathname === '/' ? 'active' : null)}>Home</NavItem>
        <NavItem href="/test" className={(currentRoute.pathname === '/test' ? 'active' : null)}>Test</NavItem>
      </Nav>

      <Nav right>
        {user.accessLevel >= 2 &&
          <NavItem href="/user" className={(currentRoute.pathname === '/user' ? 'active' : null)}>Users</NavItem>
        }
        <NavDropdown eventKey={2} title={'Hey There ' + user.firstName} id="nav-profile-dropdown">
          <MenuItem eventKey="1" href="/profile">Profile</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
        </NavDropdown>
        <NavItem eventKey={3} onClick={this.props.logout}>Logout</NavItem>
      </Nav>
    </Navbar>);
  }
}
