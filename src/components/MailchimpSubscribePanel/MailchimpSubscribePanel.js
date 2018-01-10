import React from 'react';
import './MailchimpSubscribePanel.scss';

export default function MailchimpSubscribePanel() {
  return (
    <div className="mailchimp_subscribe_panel">
      {/*Begin MailChimp Signup Form */}
      {/*<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css"/>*/}
      <div id="mc_embed_signup">
        <form action="https://the-cs.us15.list-manage.com/subscribe/post?u=ca4210a8d0ca626df3e077efb&amp;id=c94d0e0371" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <div id="mc_embed_signup_scroll">
	          <h2>Subscribe to our mailing list!</h2>
            <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
            <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span>
            </label>
	          <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL"/>
          </div>
          <div className="mc-field-group">
	          <label htmlFor="mce-FNAME">First Name </label>
	          <input type="text" value="" name="FNAME" className="" id="mce-FNAME"/>
          </div>
          <div className="mc-field-group">
	          <label htmlFor="mce-LNAME">Last Name </label>
	          <input type="text" value="" name="LNAME" className="" id="mce-LNAME"/>
          </div>
	        <div id="mce-responses" className="clear">
		        <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
		        <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
	        </div>    
	        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
          <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_ca4210a8d0ca626df3e077efb_c94d0e0371" tabIndex="-1" value=""/></div>
            <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button green"/></div>
          </div>
        </form>
      </div>
    </div>
  );
  
}