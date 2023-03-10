import React from 'react';



const Navbar = () => {
    return (
        <div className="container-fluid cf-custom">
        <section id="navbar">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img src="C:\Users\vkraj\OneDrive\Desktop\my_portfolio\vineet-portfolio-website\src\logo.png" alt="vineet-icon" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Project</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Contacts</a>
                            </li>
                            
                        
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            </section>
            
            <section className='landing-page'>

            <div className='round-absolute'>Developer</div>
            <div className='round-absolute'>Problem Solver</div>
            <img src={photo} alt="vineet-photo" />

            </section>
            
            <div className='test'>

            </div>

        </div>
    );
}

export default Navbar;