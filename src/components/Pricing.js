import React from 'react';
import { Link } from 'react-router-dom';

class Pricing extends React.Component {
  render() {
  	return (
        <section className="section pt-5" id="pricing">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <h1 className="section-title text-center">Simple, straightforward pricing</h1>
                    <div className="section-title-border margin-t-20"></div>
                    <p className="section-subtitle font-secondary text-muted text-center padding-t-30"></p>
                </div>
            </div>
            <div className="row margin-t-50">
                <div className="col-lg-4">
                    <div className="text-center pricing-box hover-effect">
                        <h4 className="text-uppercase">Economy</h4>
                        <h1>$399</h1>
                        <h6 className="text-uppercase text-muted">Billing Per Month</h6>
                        <div className="pricing-border"></div>
                        <div className="plan-features margin-t-30">
                            <p>Platform: <b className="text-custom">Facebook, Instagram</b></p>
                            <p>Optimization: <b className="text-custom">2 per month</b></p>
                            <p>Target Locations: <b className="text-custom">3</b></p>
                            <p>Creative: <b className="text-custom">Illustration</b></p>
                            <p>Revisions <b className="text-custom">2</b></p>
                            <p><b className="text-custom">No</b> Hidden Fees</p>
                        </div>
                        <a href="https://subscriptions.zoho.com/subscribe/c94c4dbb4d6db226ea226c8f7dc81649b9de07abf9a0975fad482bf477cf719e/1" className="btn btn-custom waves-effect waves-light margin-t-30">Get Started with Economy</a>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="text-center pricing-box bg-white hover-effect price-active">
                        <h4 className="text-uppercase">Deluxe</h4>
                        <h1>$499</h1>
                        <h6 className="text-uppercase text-muted">Billing Per Month</h6>
                        <div className="pricing-border"></div>
                        <div className="plan-features margin-t-30">
                            <p>Platform: <b className="text-custom">Facebook, Instagram, AdWords</b></p>
                            <p>Optimization: <b className="text-custom">2 per month</b></p>
                            <p>Target Locations: <b className="text-custom">5</b></p>
                            <p>Creative: <b className="text-custom">Illustration</b></p>
                            <p>Revisions <b className="text-custom">2</b></p>
                            <p><b className="text-custom">No</b> Hidden Fees</p>
                        </div>
                        <a href="https://subscriptions.zoho.com/subscribe/c94c4dbb4d6db226ea226c8f7dc81649b9de07abf9a0975fad482bf477cf719e/2" className="btn btn-custom waves-effect waves-light margin-t-30">Get Started with Deluxe</a>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="text-center pricing-box hover-effect">
                        <h4 className="text-uppercase">Ultimate</h4>
                        <h1>$799</h1>
                        <h6 className="text-uppercase text-muted">Billing Per Month</h6>
                        <div className="pricing-border"></div>
                        <div className="plan-features margin-t-30">
                            <p>Platform: <b className="text-custom">Facebook, Instagram, AdWords</b></p>
                            <p>Optimization: <b className="text-custom">3 per month</b></p>
                            <p>Target Locations: <b className="text-custom">10</b></p>
                            <p>Creative: <b className="text-custom">Illustration, Videography</b></p>
                            <p>Revisions <b className="text-custom">3</b></p>
                            <p><b className="text-custom">No</b> Hidden Fees</p>
                        </div>
                        <a href="https://subscriptions.zoho.com/subscribe/c94c4dbb4d6db226ea226c8f7dc81649b9de07abf9a0975fad482bf477cf719e/3" className="btn btn-custom waves-effect waves-light margin-t-30">Get Started with Ultimate</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  	);
  }
}
export default Pricing;