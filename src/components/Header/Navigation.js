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
    var navitems = lodash.find(router.routes, { navRoute: 'true' }).childRoutes;
    var NavItems = navitems.map(function routeIteration(route, index) {
      const active = (currentRoute.pathname === route.path) ? 'active' : null;
      return (<NavItem
        key={index}
        eventKey={index}
        href={route.path}
        className={active}
        >
          {route.name}
      </NavItem>);
    });

    return (<Navbar fixedTop fluid>
      <NavBrand>{appName}</NavBrand>
      <Nav>
        {NavItems}
      </Nav>
      <Nav right>
        <NavDropdown eventKey={1} title={'Hey There ' + user.firstName} id="nav-profile-dropdown">
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Aother action</MenuItem>
          <MenuItem eventKey="3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
        </NavDropdown>
        <NavItem eventKey={2} onClick={this.props.logout}>Logout</NavItem>
      </Nav>
    </Navbar>);
  }
}
