import React, { Component } from 'react';
import './App.css';
import Page from './page';
import Nav from './nav';
import Link from './link';

class App extends Component {

    render() {
        return (
            <div className="App">
                <div>
                    <Link to="/main" >
                        <button>Main</button>
                    </Link>
                    <Link to="/product" >
                        <button>Product</button>
                    </Link>
                    <Link to="/about" >
                        <button>About</button>
                    </Link>
                    <Link to="/contact" >
                        <button>Contact</button>
                    </Link>
                </div>
                <Nav>
                    <Page path="/main">
                        <div className="page main">
                            main
                        </div>
                    </Page>
                    <Page path="/product">
                        <div className="page product">
                            Product
                        </div>
                    </Page>
                    <Page path="/about">
                        <div className="page about">
                            About
                        </div>
                    </Page>
                    <Page path="/contact">
                        <div className="page contact">
                            Contact
                        </div>
                    </Page>
                </Nav>

            </div>
        );
    }
}

export default App;
