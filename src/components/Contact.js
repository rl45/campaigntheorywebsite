import React from 'react';

class Contact extends React.Component {
  render() {
  	return (
        <section className="section" id="contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <h1 className="section-title text-center">Get In Touch</h1>
                    <div className="section-title-border margin-t-20"></div>
                    <p className="section-subtitle text-muted text-center font-secondary padding-t-30">We'd love to help grow your business.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="mt-4 pt-4">
                       {/*} <p className="mt-4"><span className="h5">Office Address 1:</span><br /> <span className="text-muted d-block mt-2">4461 Cedar Street Moro, AR 72368</span></p>
                        <p className="mt-4"><span className="h5">Office Address 2:</span><br /> <span className="text-muted d-block mt-2">2467 Swick Hill Street <br/>New Orleans, LA 70171</span></p>*/}
                        <p className="mt-4"><span className="h5">Working Hours:</span><br /> <span className="text-muted d-block mt-2">9:00AM To 6:00PM</span></p>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="custom-form mt-4 pt-4">
                        <div id="message"></div>
                        <form action="https://formspree.io/xbjzawdl" method="POST">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group mt-2">
                                        <input name="name" id="name" type="text" className="form-control" placeholder="Your name*" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group mt-2">
                                        <input name="email" id="email" type="email"  name="_replyto" className="form-control" placeholder="Your email*" />
                                    </div>
                                </div>                                
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group mt-2">
                                        <input type="text" name="subject" className="form-control" id="subject" placeholder="Your Subject.." />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group mt-2">
                                        <textarea name="message" id="comments" rows="4" className="form-control" placeholder="Your message..."></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group mt-2">
                                       <div data-netlify-recaptcha="true"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 text-right">
                                    <button type="submit" id="submit" name="send" className="submitBnt btn btn-custom" value="Send Message">Send Message</button>
                                    <div id="simple-msg"></div>
                                </div>
                            </div>
                        </form>
                    </div>  
                </div>
            </div>
        </div>
    </section> 
  	);
  }
}
export default Contact;