import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Form, Navbar, Nav, } from 'react-bootstrap';
import './NavBar.css';

const NavBar = () => {
    const history = useHistory();
    const [search, setSearch] = useState('');

    const SearchHandler = (event) => {
        event.preventDefault()
        history.push({
            pathname: '/books',
            searchState: search
        });
    }

    return (
        <div className="navBarContainer">
            <Navbar variant="dark">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/books">Books</Nav.Link>
                </Nav>
                <form className="form-inline ml-auto" onSubmit={SearchHandler}>
                    <div className="md-form my-0">
                        <input className="form-control" type="text" placeholder="Search" aria-label="Search"
                            id="search"
                            onBlur={(e) => setSearch(e.target.value)}
                            defaultValue={search} />
                    </div>
                    <button href="#!" className="btn btn-outline-white btn-md my-0 ml-sm-2" type="submit"><b>Search</b></button>
                </form>
                <Form inline>
                </Form>
            </Navbar>
        </div >
    );
};

export default NavBar;