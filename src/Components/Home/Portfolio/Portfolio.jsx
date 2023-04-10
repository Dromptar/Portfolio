import React from 'react';
import './portfolio.css';

const Portfolio = () => {
    return (
        <>
       
            <section id='portfolio'>
                <section className='section is-hidden-mobile'>
                <h3 className="title has-text-centered is-size-2">My work</h3>
                    <div className="container">
                        <div className="columns mt-5 is-8 is-variable is-centered">
                            <div className="column is-4-tablet is-3-desktop">
                                <div className="card">
                                    <div className="card-image has-text-centered px-10">
                                        <img src="../img/dwarf.jpg" alt="" />
                                    </div>
                                    <div className="card-content">
                                        <p></p>
                                        <p className="title is-size-5"></p>
                                    </div>
                                    <footer className="card-footer">
                                        <p className="card-footer-item">
                                            <a href="" className='has-text-grey'>View</a>
                                        </p>
                                    </footer>
                                </div>
                            </div>
                            <div className="column is-4-tablet is-3-desktop">
                                <div className="card">
                                    <div className="card-image has-text-centered px-10">
                                        <img src="../img/rand1.jpg" alt="" />
                                    </div>
                                    <div className="card-content">
                                        <p></p>
                                        <p className="title is-size-5"></p>
                                    </div>
                                    <footer className="card-footer">
                                        <p className="card-footer-item">
                                            <a href="" className='has-text-grey'>View</a>
                                        </p>
                                    </footer>
                                </div>
                            </div>
                            <div className="column is-4-tablet is-3-desktop">
                                <div className="card">
                                    <div className="card-image has-text-centered px-10">
                                        <img src="../img/rand2.jpg" alt="" />
                                    </div>
                                    <div className="card-content">
                                        <p></p>
                                        <p className="title is-size-5"></p>
                                    </div>
                                    <footer className="card-footer">
                                        <p className="card-footer-item">
                                            <a href="" className='has-text-grey'>View</a>
                                        </p>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </section>   
        </>
    );
}

export default Portfolio;
