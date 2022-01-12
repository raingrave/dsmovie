import React from 'react';
import './styles.css'
import { ReactComponent as GithubIcon } from 'assets/images/logo-github.svg';

function Navbar() {
  return (
    <header className="dsmovie-nav-content">
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col col-md-10">
                        <h1 className="pt-2">DSMovie</h1>
                    </div>
                    <div className="col col-md-2">
                        <a href="https://github.com/devsuperior" target="_blank" rel="noreferrer">
                            <div className="dsmovie-contact-container">
                                <p className="pt-3 dsmovie-contact-link">
                                    <GithubIcon /> /raingrave
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  );
}

export default Navbar;
