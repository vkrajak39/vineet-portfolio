import React from 'react';
import photo from 'c:/Users/vkraj/OneDrive/Desktop/my_portfolio/vineet-portfolio-website/src/nyBestPicture-removebg-preview.png';
import logo from "c:/Users/vkraj/OneDrive/Desktop/my_portfolio/vineet-portfolio-website/src/logo-2.png";


const Navbar = () => {
    return (
        
        <div className="container-fluid cf-custom">
            <section id="navbar">
                <nav className="navbar navbar-expand-lg  navbar-custom navbar-dark " >
                    <div className="container-fluid">
                        <a className="navbar-brand " href="/"><img className='nav-logo' src={logo} alt="vineet-icon" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav  mb-2 mb-lg-0 navbar-ul-custom">
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
                        
                            
                        </div>
                    </div>
                </nav>
            </section>

            <section className='landing-page'>

                <div className='round-absolute developer-div'>Developer</div>
                <div className='round-absolute problem-div'>Problem Solver</div>

                

                

                <div class="container text-center">
                    <div class="row">
                        <div class="col-md-9">
                            <img src={photo} alt="vineet-photo" className='landing-page-pic' />
                        </div>
                        <div class="col-md-3 landing-page-intro">
                            
                            <p>/THIS IS ME</p>
                            <h3>Passonate about Tech and Design </h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente quae amet aliquam nam quaerat consectetur recusandae in. Libero harum cum, eos repellendus animi, neque ab assumenda, nam possimus molestias quo.
                        </div>

                    </div>
                </div>
                {/* name section */}
                <div className='introducion'> Vineet Kumar<br />Rajak  👉 </div>

            </section>

            <div className='test'>

            </div>

        </div>
    );
}

export default Navbar;