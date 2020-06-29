import React from 'react';
import { Link } from 'react-router-dom';

class Descriptions extends React.Component {
  render() {
  	return (
          <section className="section section-lg bg-web-desc">
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <br/>
                        <h2 className="text-white">Promote your business today</h2>
                        <p className="padding-t-15 home-desc">We understand you're busy and running a business. We want to be a part of your journey to succeed with you. Our satisfication is when our clients win.</p>
                       {/* <Link to="JavaScript:Void(0);" className="btn btn-bg-white margin-t-30 waves-effect waves-light mb-5">View Plan & Pricing</Link>*/}
                       <br/>
                       <br/>
                       <br/>
                       <br/>
                    </div>
                </div>
            </div>
            <div className="bg-pattern-effect">
                <img src="images/bg-pattern.png" alt="" />
            </div>
        </section>
  	);
  }
}
export default Descriptions;