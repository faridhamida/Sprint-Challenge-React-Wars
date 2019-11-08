import React, { useState } from 'react';
import {
Collapse,
Navbar,
NavbarToggler,
NavbarBrand,
Nav,
NavItem,
NavLink,
UncontrolledDropdown,
DropdownToggle,
DropdownMenu,
DropdownItem
} from 'reactstrap';
import styled from "styled-components";



const Nav1 = props => {
const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);

return (
    
<div>
       
        <Navbar style={{ backgroundColor: "yellow" }} light expand="md">
            <NavbarBrand style={{ color: "purple" }}  href="/"><strong>Greatest Star Wars Characters</strong></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink style={{ color: "purple" }}  href="/components/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ color: "purple" }}  href="https://starwars.com">
                            Star Wars
            </NavLink>
                    </NavItem>
                    <UncontrolledDropdown  nav inNavbar>
                        <DropdownToggle style={{ color: "purple" }}  nav caret>
                            Menu
            </DropdownToggle>
                        <DropdownMenu right>
                            <NavLink style={{ color: "purple" }}  href="https://twitter.com/search?q=star+wars&ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5E">
                                Twitter
            </NavLink>
                            <NavLink style={{ color: "purple" }}  href="https://www.instagram.com/starwars/?hl=en">
                                Instagram
            </NavLink>
                            <DropdownItem divider />
                            <NavLink style={{ color: "purple" }}  href="https://giphy.com/gifs/star-wars-the-force-awakens-bb8-8oXYKAaKgAroA">
                                Giphy
            </NavLink>
                        </DropdownMenu>
                </UncontrolledDropdown>
                </Nav>
            </Collapse>
        </Navbar>
       
    </div>
    
);
};

export default Nav1;