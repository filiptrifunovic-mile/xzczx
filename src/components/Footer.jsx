const Footer = () => {
  return (
    <div id="site-footer" className="site-footer">
      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="left">
              <div className="left-top">
                <h2 className="h1">
                  Visit our <br />
                  showroom for the full <br />
                  Brisans Experience
                </h2>
                <div className="copy">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=250+Maitland+Road+Islington+NSW+2296+Australia"
                    target="_blank"
                  >
                    250 Maitland Road, Islington NSW 2296
                  </a>
                  <br />
                  <a href="tel:0249408777">02 4940 8777</a>
                </div>
                <div className="buttons">
                  <button
                    data-popout="newsletter-form"
                    className="btn js-popout-trigger"
                  >
                    Join Mailing List
                  </button>
                  <button
                    data-popout="enquiry-form"
                    className="btn btn-white js-popout-trigger"
                  >
                    Enquiry Form
                  </button>
                </div>
              </div>
              <div className="socials">
                <a
                  className="social-icon"
                  href="https://facebook.com/motorcycleshowroom"
                  target="_blank"
                >
                  <img
                    src="https://www.brisans.com.au/storage/app/media/logos/fb.svg"
                    alt="logos fb"
                  />
                </a>
                <a
                  className="social-icon"
                  href="https://instagram.com/brisanmotorcycles"
                  target="_blank"
                >
                  <img
                    src="https://www.brisans.com.au/storage/app/media/logos/insta.svg"
                    alt="logos insta"
                  />
                </a>
                <a
                  className="social-icon"
                  href="https://www.youtube.com/brisanmotorcycles"
                  target="_blank"
                >
                  <img
                    src="https://www.brisans.com.au/storage/app/media/logos/youtube.svg"
                    alt="logos youtube"
                  />
                </a>
              </div>
            </div>
            <div className="right">
              <div className="column">
                <div className="link large">New Bikes</div>
                <div className="children">
                  <a className="link small" href="/new-bikes/road-bikes">
                    Road Bikes
                  </a>
                  <a className="link small" href="/new-bikes/dirt-bikes">
                    Off-Road Bikes
                  </a>
                  <a className="link small" href="/new-bikes/scooters">
                    Scooters
                  </a>
                  <a className="link small" href="/new-bikes/sxs-utvs">
                    SxS + UTVs
                  </a>
                  <a className="link small" href="/new-bikes/adventure">
                    Adventure
                  </a>
                </div>
                <a
                  className="link large"
                  href="https://www.brisans.com.au/about"
                >
                  About
                </a>
                <a
                  className="link large"
                  href="https://www.brisans.com.au/used-bikes"
                >
                  Used Bikes
                </a>
                <a
                  className="link large"
                  href="https://www.brisans.com.au/book-service"
                >
                  Servicing
                </a>
                <a
                  className="link large"
                  href="https://www.brisans.com.au/contact"
                >
                  Contact
                </a>
              </div>
              <div className="column">
                <div className="link large">Brands</div>
                <a
                  className="link small"
                  href="https://www.brisans.com.au/new-bikes/aprilia"
                >
                  Aprilia
                </a>
                <a
                  className="link small"
                  href="https://www.brisans.com.au/new-bikes/bmw-motorrad"
                >
                  BMW Motorrad
                </a>
                <a
                  className="link small"
                  href="https://www.brisans.com.au/new-bikes/fonz"
                >
                  Fonz
                </a>
                <a
                  className="link small"
                  href="https://www.brisans.com.au/new-bikes/indian-motorcycle"
                >
                  Indian Motorcycle
                </a>
                <a
                  className="link small"
                  href="https://www.brisans.com.au/new-bikes/kawasaki"
                >
                  Kawasaki
                </a>
                <a
                  className="link small"
                  href="https://www.brisans.com.au/new-bikes/moto-guzzi"
                >
                  Moto Guzzi
                </a>
                <a
                  className="link small"
                  href="https://www.brisans.com.au/new-bikes/piaggio"
                >
                  Piaggio
                </a>
                <a
                  className="link small"
                  href="https://www.brisans.com.au/new-bikes/polaris"
                >
                  Polaris
                </a>
                <a
                  className="link small"
                  href="https://www.brisans.com.au/new-bikes/royal-enfield"
                >
                  Royal Enfield
                </a>
                <a
                  className="link small"
                  href="https://www.brisans.com.au/new-bikes/suzuki"
                >
                  Suzuki
                </a>
                <a
                  className="link small"
                  href="https://www.brisans.com.au/new-bikes/sym-scoota"
                >
                  SYM Scoota
                </a>
                <a
                  className="link small"
                  href="https://www.brisans.com.au/new-bikes/triumph"
                >
                  Triumph
                </a>
                <a
                  className="link small"
                  href="https://www.brisans.com.au/new-bikes/vespa"
                >
                  Vespa
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="copyright">
              &copy; 2024 Brisan Motorcycles. All rights reserved.
            </div>
            <div className="right">
              <div className="column">
                <a href="/terms">Terms</a>
                <span>/</span> <a href="/privacy-policy">Privacy Policy</a>
              </div>
              <div className="column">
                <a
                  href="https://zimple.digital/"
                  target="_blank"
                  className="zimple"
                >
                  website by Zimple
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Forma 1 */}
      <div className="popout js-popout" data-hash="enquiry-form">
        <div className="popout-overlay js-popout-close"></div>
        <div className="popout-body">
          <div className="popout-content">
            <div className="popout-close js-popout-close">
              <img
                loading="lazy"
                src="https://www.brisans.com.au/themes/zimple/assets/images/close-white.svg"
                alt="Close"
              />
            </div>
            <h2 className="h1">Make an Enquiry</h2>
            <div className="copy">
              <h4>
                After your enquiry is submitted, it will be assigned to a
                relevant team member to assist you further.
              </h4>
            </div>

            <div className="5"></div>

            <form
              method="POST"
              action="https://www.brisans.com.au"
              acceptCharset="UTF-8"
              id="enquiry-form"
              className=""
              data-request="displayForm::onSubmit"
              data-request-data='"form":"enquiry-form"'
              data-attach-loading=""
              data-request-success="if (data.result !== undefined) {
            $(&#039;form&#039;).removeClass(&#039;oc-loading&#039;);
            $(&#039;body&#039;).removeClass(&#039;oc-loading&#039;);
            $(&#039;.stripe-loading-indicator&#039;).addClass(&#039;loaded&#039;);
            $(this)[0].reset();
            $(&#039;form&#039;).find(&#039;.focused, .filled&#039;).removeClass(&#039;focused&#039;).removeClass(&#039;filled&#039;);
            $(&#039;form&#039;).find(&#039;.nice-select .current&#039;).empty();
            var count = 0;
            $(&#039;.g-recaptcha&#039;).each(function () {
                grecaptcha.reset(count);
                count++;
            });
            Forms.onSuccess(this);
            GA.onFormSuccess(data.X_OCTOBER_REDIRECT);
        }"
              data-request-error="
            Forms.onError(this);
            var count = 0;
            $(&#039;.g-recaptcha&#039;).each(function () {
                grecaptcha.reset(count);
                count++;
            });
        "
            >
              <input
                name="_session_key"
                type="hidden"
                value="9NTGbBj44yIIE08MTADQeiMK3nMceD0sfeWW4wKC"
              />
              <input
                name="_token"
                type="hidden"
                value="WFzUCQWB6OYePlAdpvKUWfP1P7mSGtblWMCLG63L"
              />
              <div
                className="alert alert-success alert-dismissible fade"
                role="alert"
              >
                Thank you for contacting us. We will be in touch as soon as
                possible
              </div>
              <div
                className="alert alert-danger alert-dismissible fade"
                role="alert"
              >
                Error submitting form. Please try again.
              </div>
              <div className="row">
                <div className="col-12 col-md-6 form-group">
                  <label htmlFor="name" className="">
                    Your name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value=""
                    className=" form-control"
                    placeholder=""
                    required
                  />
                </div>
                <div className="col-12 col-md-6 form-group">
                  <label htmlFor="phone" className="">
                    Phone
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value=""
                    className=" form-control"
                    placeholder=""
                    required
                  />
                </div>
                <div className="col-12 col-md-6 form-group">
                  <label htmlFor="email" className="">
                    Email
                  </label>

                  <input
                    id="email"
                    type="text"
                    name="email"
                    value=""
                    className=" form-control"
                    placeholder=""
                    required
                  />
                </div>
                <div className="col-12 col-md-6 form-group">
                  <label htmlFor="bike" className="">
                    Bike
                  </label>

                  <input
                    id="bike"
                    type="text"
                    name="bike"
                    value=""
                    className=" form-control"
                    placeholder=""
                  />
                </div>
                <div className="col-12 col-md-6 form-group">
                  <label htmlFor="finance-1023071022" className="">
                    Do you require finance?
                  </label>

                  <select
                    id="finance-1023071022"
                    className=" form-control nice-select"
                    name="finance"
                  >
                    <option value="" selected></option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="col-12 col-md-6 form-group">
                  <label htmlFor="test_ride-861354005" className="">
                    Do you want to book a test ride?
                  </label>

                  <select
                    id="test_ride-861354005"
                    className=" form-control nice-select"
                    name="test_ride"
                  >
                    <option value="" selected></option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="col-12  form-group textarea">
                  <label htmlFor="content_message" className="">
                    Additional Comments
                  </label>

                  <textarea
                    id="content_message"
                    name="content_message"
                    className=" form-control"
                    placeholder=""
                  ></textarea>
                </div>

                <div className="col-12  btn-holder">
                  <button
                    id="captcha-725796204"
                    type="submit"
                    className=" g-recaptcha btn btn-primary"
                    data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    data-theme=""
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Forma 2 */}
      <div className="popout js-popout" data-hash="newsletter-form">
        <div className="popout-overlay js-popout-close"></div>
        <div className="popout-body">
          <div className="popout-content">
            <div className="popout-close js-popout-close">
              <img
                loading="lazy"
                src="https://www.brisans.com.au/themes/zimple/assets/images/close-white.svg"
                alt="Close"
              />
            </div>
            <h2 className="h1">Join our mailing list</h2>

            <div className="3"></div>

            <form
              method="POST"
              action="https://www.brisans.com.au"
              acceptCharset="UTF-8"
              id="newsletter-form"
              className="needs-validation"
              data-request="displayForm::onSubmit"
              data-request-data='"form":"newsletter-form"'
              data-attach-loading=""
              data-request-success="if (data.result !== undefined) {
            $(&#039;form&#039;).removeClass(&#039;oc-loading&#039;);
            $(&#039;body&#039;).removeClass(&#039;oc-loading&#039;);
            $(&#039;.stripe-loading-indicator&#039;).addClass(&#039;loaded&#039;);
            $(this)[0].reset();
            $(&#039;form&#039;).find(&#039;.focused, .filled&#039;).removeClass(&#039;focused&#039;).removeClass(&#039;filled&#039;);
            $(&#039;form&#039;).find(&#039;.nice-select .current&#039;).empty();
            var count = 0;
            $(&#039;.g-recaptcha&#039;).each(function () {
                grecaptcha.reset(count);
                count++;
            });
            Forms.onSuccess(this);
            GA.onFormSuccess(data.X_OCTOBER_REDIRECT);
        }"
              data-request-error="
            Forms.onError(this);
            var count = 0;
            $(&#039;.g-recaptcha&#039;).each(function () {
                grecaptcha.reset(count);
                count++;
            });
        "
            >
              <input
                name="_session_key"
                type="hidden"
                value="9NTGbBj44yIIE08MTADQeiMK3nMceD0sfeWW4wKC"
              />
              <input
                name="_token"
                type="hidden"
                value="WFzUCQWB6OYePlAdpvKUWfP1P7mSGtblWMCLG63L"
              />
              <div
                className="alert alert-success alert-dismissible fade"
                role="alert"
              >
                Thank you signing up to our newsletter.
              </div>
              <div
                className="alert alert-danger alert-dismissible fade"
                role="alert"
              >
                Error submitting form. Please try again.
              </div>
              <div className="row">
                <div className="col-12  form-group">
                  <label htmlFor="name" className="">
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value=""
                    className=" form-control"
                    placeholder=""
                    required="required"
                  />
                </div>
                <div className="col-12  form-group">
                  <label htmlFor="email" className="">
                    E-mail
                  </label>

                  <input
                    id="email"
                    type="text"
                    name="email"
                    value=""
                    className=" form-control"
                    placeholder=""
                    required="required"
                  />
                </div>

                <div className="col-12  btn-holder">
                  <button
                    id="captcha-632155545"
                    type="submit"
                    className=" g-recaptcha btn btn-primary"
                    data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    data-theme=""
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
