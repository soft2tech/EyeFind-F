import {
Container,
Navbar,
Nav,
NavDropdown
} from 'react-bootstrap'
import { Link } from "react-router-dom"
import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from '../store/hooks.js'

import { decrement, increment, incrementByAmount, incrementAsync } from '../store/Slice/counterSlice'


function Header() {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()
  const [ incrementAmount, setIncrementAmount ] = useState('2');

  return (
    <>
      <Navbar className="navbar-dark" id="header" expand="lg">
        <Container>
          <Navbar.Brand className="text-white">EyeFind</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link className="nav-link navLink" to="/">
                  Home
                </Link>
              <Link className="nav-link navLink" to="/about">
                About
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;
