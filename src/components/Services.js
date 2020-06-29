import React from 'react';

class Services extends React.Component {
  render() {
  	return (
        <section className="section pt-5" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1 className="section-title text-center">Our Services</h1>
                        <div className="section-title-border margin-t-20"></div>
                        <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">We craft digital campaigns, creative strategies and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.</p>
                    </div>
                </div>
                <div className="row margin-t-30">
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-diamond text-custom"></i>
                            <h4 className="padding-t-15">Campaign Setup</h4>
                            <p className="padding-t-15 text-muted">We'll walk you through our easy-process to get started on launching your campaigns</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-display2 text-custom"></i>
                            <h4 className="padding-t-15">Management</h4>
                            <p className="padding-t-15 text-muted">We regularly find new strategies to continue optimizing your campaign</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-light text-custom"></i>
                            <h4 className="padding-t-15">Creative Strategy Solutions</h4>
                            <p className="padding-t-15 text-muted">From video production to graphics, we'll deliver the optimal creative for your campaign needs</p>
                        </div>
                    </div>
                </div>
                {/*
                <div className="row margin-t-30">
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-science text-custom"></i>
                            <h4 className="padding-t-15">Awesome Support</h4>
                            <p className="padding-t-15 text-muted">It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-news-paper text-custom"></i>
                            <h4 className="padding-t-15">Truly Multipurpose</h4>
                            <p className="padding-t-15 text-muted">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-plane text-custom"></i>
                            <h4 className="padding-t-15">Easy to customize</h4>
                            <p className="padding-t-15 text-muted">Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia.</p>
                        </div>
                    </div>
                </div>*/}
            </div>
        </section>
  	);
  }
}
export default Services;