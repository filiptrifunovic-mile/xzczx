const Content3 = () => {
  const imageStyle = {
    objectPosition: "50% 50%",
  };

  const imageStyle1 = {
    background: "#c0392b",
  };
  const imageStyle2 = {
    background: "#000000",
  };
  const imageStyle3 = {
    enableBackground: "new 0 0 144 108",
  };

  return (
    <div id="site-content" className="site-content">
      <div className="module-bike-detail">
        <div className="container">
          <div className="left">
            <div className="sticky">
              <div className="top">
                <a
                  href="https://www.brisans.com.au/new-bikes/bmw-motorrad#results"
                  className="btn btn-back"
                >
                  Back<span className="desktop">&nbsp;to listings</span>
                </a>
                <div className="tags"></div>
              </div>
              <div className="bike-slider-container js-bike-slider-container">
                <div className="title">
                  <h6>BMW Motorrad</h6>
                  <h1 className="display">S 1000 RR 2024</h1>
                </div>
                <div className="bike-slider js-bike-slider">
                  <div className="slide">
                    <div className="image">
                      <div className="image-contain">
                        <img
                          src="https://www.brisans.com.au/storage/temp/public/469/9c4/b81/img_e35db0f6844cd85d15a04178717b7fba_730_0_0_0_auto_webp_3bcd38d55a29be99e2b1df8409fe2bbf9386719f__730.webp"
                          data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_e35db0f6844cd85d15a04178717b7fba_730_0_0_0_auto.jpg"
                          style={imageStyle}
                          srcSet="https://www.brisans.com.au/storage/temp/public/469/9c4/b81/img_e35db0f6844cd85d15a04178717b7fba_730_0_0_0_auto_webp_3bcd38d55a29be99e2b1df8409fe2bbf9386719f__730.webp 730w, https://www.brisans.com.au/storage/temp/public/469/9c4/b81/img_e35db0f6844cd85d15a04178717b7fba_730_0_0_0_auto_webp_3bcd38d55a29be99e2b1df8409fe2bbf9386719f__400.webp 400w"
                          sizes="(max-width: 730px) 100vw, 730px"
                          alt="Studio image of BMW S 1000 RR sportsbike in Black Storm Metallic colourway, available at Brisan Motorcycles Newcastle"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="slide">
                    <div className="image">
                      <div className="image-contain">
                        <img
                          src="https://www.brisans.com.au/storage/temp/public/657/591/481/img_7808bd0027e49d4a669512aeca3c5fcb_730_0_0_0_auto_webp_4ca179be569e29cc62970c66a21b31a6bd837bbc__730.webp"
                          data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_7808bd0027e49d4a669512aeca3c5fcb_730_0_0_0_auto.jpg"
                          style={imageStyle}
                          srcSet="https://www.brisans.com.au/storage/temp/public/657/591/481/img_7808bd0027e49d4a669512aeca3c5fcb_730_0_0_0_auto_webp_4ca179be569e29cc62970c66a21b31a6bd837bbc__730.webp 730w, https://www.brisans.com.au/storage/temp/public/657/591/481/img_7808bd0027e49d4a669512aeca3c5fcb_730_0_0_0_auto_webp_4ca179be569e29cc62970c66a21b31a6bd837bbc__400.webp 400w"
                          sizes="(max-width: 730px) 100vw, 730px"
                          alt="Studio image of BMW S 1000 RR sportsbike in Racing Red colourway, available at Brisan Motorcycles Newcastle"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="arrows">
                  <div className="arrow prev js-slider-prev">
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/pagination-left.svg"
                      alt="Prev"
                    />
                  </div>
                  <div className="arrow next js-slider-next">
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/pagination-right.svg"
                      alt="Next"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="brand-logo">
              <img
                src="https://www.brisans.com.au/storage/temp/public/1fc/0a8/9e0/BMW-Motorrad-Logo-2__200.png"
                srcSet="https://www.brisans.com.au/storage/temp/public/1fc/0a8/9e0/BMW-Motorrad-Logo-2__200.png 200w"
                sizes="(max-width: 200px) 100vw, 200px"
                alt="BMW Motorcycles Logo"
              />
            </div>
            <div className="tagline">
              <h2 className="h1">Fast just got faster</h2>
            </div>
            <div className="price">
              <h4>
                <span>$27,980 Ride Away</span>
              </h4>
              <div className="copy">
                <p>
                  $140.07 per week with a $500 deposit* 11.55% pa comparison
                  rate^
                </p>
              </div>
            </div>
            <div className="summary copy">
              <p>
                The S 1000 RR is now even more focused and more precisely geared
                towards pure performance. For those who increasingly demand
                more. More from themselves. More each lap. And more from their
                RR. Simply put: <strong>#NeverStopChallenging</strong>. Leading
                the way is a matter of millimetres, especially in the circles
                the RR has always been a part of. Thats why we have streamlined
                and evolved the S 1000 RR where it matters most: from the new
                steering angle sensor with Brake Slide Assist and Slide Control
                as well as the integration of M components and improvements to
                the electronics and crucial processes for modifying the bike for
                the race track. And all this with a clear goal in mind claiming
                the pole position over and over again.
              </p>
            </div>
            <div className="btn-holder">
              <button
                type="button"
                className="btn js-popout-trigger"
                data-popout="enquiry-form"
                data-prefill='{"bike":"S 1000 RR 2024"}'
              >
                Enquire Now
              </button>
            </div>
            <div className="section options">
              <h2>Options</h2>
              <div className="accordions">
                <div className="accordion js-accordion" data-starts-open>
                  <div className="accordion-title js-accordion-title">
                    <h5>Colour Options</h5>
                  </div>
                  <div className="accordion-content js-accordion-content">
                    <div className="colours">
                      <div className="colour">
                        <div className="circle" style={imageStyle2}></div>
                        <div className="text">Black Storm Metallic</div>
                      </div>
                      <div className="colour">
                        <div className="circle" style={imageStyle1}></div>
                        <div className="text">Racing Red +$680</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion js-accordion" data-starts-open>
                  <div className="accordion-title js-accordion-title">
                    <h5>Upgrade Options</h5>
                  </div>
                  <div className="accordion-content js-accordion-content">
                    <div className="upgrades copy">
                      S 1000 RR 2024: $27,980
                      <br /> S 1000 RR Sport 2024: $30,380
                      <br /> S 1000 RR Race 2024: $34,190
                      <br /> S 1000 RR M-Sport 2024: $38,930
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section finance">
              <h2>Finance</h2>
              <div className="copy">
                $140.07 per week with a $500 deposit* 11.55% pa comparison rate^
              </div>
              <div className="accordions">
                <div className="accordion js-accordion">
                  <div className="accordion-title js-accordion-title">
                    <h5>Terms</h5>
                  </div>
                  <div className="accordion-content js-accordion-content">
                    <div className="copy">
                      <p>
                        Per Week payment based on 9.95% pa over 5 years with a
                        $500 deposit. Interest Rate may vary depending on our
                        credit assessment and the detail in your application.
                        Interest rates may change and margins may apply in some
                        circumstances. Any offer of credit which may be made to
                        you by BOQ Credit Pty Limited ABN 92 080 151 266 (BOQC)
                        (Australian Credit License Number 393331). Any offer of
                        credit will only be made following provision to you of
                        the required disclosure documents (as required by law)
                        and our assessment of you application. BOQC is a wholly
                        owned subsidiary of Bank of Queensland Limited ABN 32
                        009 656 740 (BOQ). BOQ does not guarantee or otherwise
                        support the obligations or performance of BOQC or the
                        products it offers. Fees and charges are payable.
                        Interest rates quoted are indicative only and are
                        subject to change without notice. The interest rate will
                        vary and is determined for each customer by BOQC’s
                        standard credit assessment criteria. Repayments are
                        based on 9.95% pa over 60 months with a $500 Deposit.
                        ^Comparison rate is calculated based on a secured loan
                        of $30,000 at 9.95% pa for a term of 5years. WARNING:
                        This comparison rate is true only for the examples given
                        and may not include all fees and charges. Different
                        terms, fees or other loan amounts might result in a
                        differ comparison rate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section features">
              <h2>Features</h2>
              <div className="accordions">
                <div className="accordion js-accordion" data-starts-open>
                  <div className="accordion-title js-accordion-title">
                    <h5>S 1000 RR Standard Equipment</h5>
                  </div>
                  <div className="accordion-content js-accordion-content">
                    <div className="copy">
                      <ul>
                        <li>
                          Gear Shift Assist Pro, DTC, Integral ABS, ABS Pro,
                          Race ABS
                        </li>
                        <li>
                          Dynamic Brake Control, Adjustable Steering Stabiliser,
                          MSR
                        </li>
                        <li>M Chassis Kit, M Winglet, M Lightweight Battery</li>
                        <li>
                          Dynamic Brake Light, Comfort Turn Indicator, LED
                          Headlight and Taillight
                        </li>
                        <li>TFT Display with Connectivity</li>
                        <li>
                          Hill Start Control, Passenger Kit, Pillion Seat Cover
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion js-accordion">
                  <div className="accordion-title js-accordion-title">
                    <h5>S 1000 RR Optional Equipment</h5>
                  </div>
                  <div className="accordion-content js-accordion-content">
                    <div className="copy">
                      <p>Anti-theft Alarm System $397</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section features">
              <h2>Specifications</h2>
              <div className="accordions">
                <div className="accordion js-accordion" data-starts-open>
                  <div className="accordion-title js-accordion-title">
                    <h5>Engine</h5>
                  </div>
                  <div className="accordion-content js-accordion-content">
                    <div className="copy">
                      <p>999cc inline four-cylinder engine with ShiftCam</p>
                    </div>
                  </div>
                </div>
                <div className="accordion js-accordion">
                  <div className="accordion-title js-accordion-title">
                    <h5>Transmission</h5>
                  </div>
                  <div className="accordion-content js-accordion-content">
                    <div className="copy">
                      <p>
                        Constant-mesh 6-speed gearbox with straight cut gears,
                        Chain driven 525 17/45&nbsp;
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion js-accordion">
                  <div className="accordion-title js-accordion-title">
                    <h5>Maximum Power</h5>
                  </div>
                  <div className="accordion-content js-accordion-content">
                    <div className="copy">
                      <p>210hp @ 13,750rpm</p>
                    </div>
                  </div>
                </div>
                <div className="accordion js-accordion">
                  <div className="accordion-title js-accordion-title">
                    <h5>Maximum Torque</h5>
                  </div>
                  <div className="accordion-content js-accordion-content">
                    <div className="copy">
                      <p>113Nm @ 11,000rpm</p>
                    </div>
                  </div>
                </div>
                <div className="accordion js-accordion">
                  <div className="accordion-title js-accordion-title">
                    <h5>Fuel Tank Capacity</h5>
                  </div>
                  <div className="accordion-content js-accordion-content">
                    <div className="copy">
                      <p>16.5 litres</p>
                    </div>
                  </div>
                </div>
                <div className="accordion js-accordion">
                  <div className="accordion-title js-accordion-title">
                    <h5>Wet Weight</h5>
                  </div>
                  <div className="accordion-content js-accordion-content">
                    <div className="copy">
                      <p>197kg</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-holder">
              <button
                type="button"
                className="btn js-popout-trigger"
                data-popout="enquiry-form"
                data-prefill='{"bike":"S 1000 RR 2024"}'
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="module-brands-plus-links">
        <div className="brands-links">
          <div className="brands js-brands">
            <div className="brands-title">
              <div className="container">
                <h6></h6>
              </div>
            </div>
            <div className="container">
              <div className="flex">
                <div className="brand js-brand">
                  <div className="logo">
                    <img
                      src="https://www.brisans.com.au/storage/app/media/placeholder/aprilia-colour.svg"
                      alt="placeholder aprilia-colour"
                    />
                  </div>
                  <a
                    href="https://www.brisans.com.au/new-bikes/aprilia"
                    className="block-link"
                  >
                    Aprilia
                  </a>
                </div>
                <div className="brand js-brand">
                  <div className="logo">
                    <img
                      src="https://www.brisans.com.au/storage/temp/public/1fc/0a8/9e0/BMW-Motorrad-Logo-2__200.png"
                      srcSet="https://www.brisans.com.au/storage/temp/public/1fc/0a8/9e0/BMW-Motorrad-Logo-2__200.png 200w"
                      sizes="(max-width: 200px) 100vw, 200px"
                      alt="BMW Motorcycles Logo"
                    />
                  </div>
                  <a
                    href="https://www.brisans.com.au/new-bikes/bmw-motorrad"
                    className="block-link"
                  >
                    BMW Motorrad
                  </a>
                </div>
                <div className="brand js-brand">
                  <div className="logo">
                    <img
                      src="https://www.brisans.com.au/storage/temp/public/fe0/1e1/b3a/Fonz-Logo__200.png"
                      srcSet="https://www.brisans.com.au/storage/temp/public/fe0/1e1/b3a/Fonz-Logo__200.png 200w"
                      sizes="(max-width: 200px) 100vw, 200px"
                      alt="Fonz Logo"
                    />
                  </div>
                  <a
                    href="https://www.brisans.com.au/new-bikes/fonz"
                    className="block-link"
                  >
                    Fonz
                  </a>
                </div>
                <div className="brand js-brand">
                  <div className="logo">
                    <img
                      src="https://www.brisans.com.au/storage/temp/public/ec3/a9b/522/Indian-Motorcycle__200.png"
                      srcSet="https://www.brisans.com.au/storage/temp/public/ec3/a9b/522/Indian-Motorcycle__200.png 200w"
                      sizes="(max-width: 200px) 100vw, 200px"
                      alt="logos New Updated Indian-Motorcycle"
                    />
                  </div>
                  <a
                    href="https://www.brisans.com.au/new-bikes/indian-motorcycle"
                    className="block-link"
                  >
                    Indian Motorcycle
                  </a>
                </div>
                <div className="brand js-brand">
                  <div className="logo">
                    <img
                      src="https://www.brisans.com.au/storage/temp/public/65c/3b7/4a5/Kawasaki-Logo-New-CI__200.png"
                      srcSet="https://www.brisans.com.au/storage/temp/public/65c/3b7/4a5/Kawasaki-Logo-New-CI__200.png 200w"
                      sizes="(max-width: 200px) 100vw, 200px"
                      alt="Kawasaki Motorcycles - Let The good Times Roll - Brand Logo"
                    />
                  </div>
                  <a
                    href="https://www.brisans.com.au/new-bikes/kawasaki"
                    className="block-link"
                  >
                    Kawasaki
                  </a>
                </div>
                <div className="brand js-brand">
                  <div className="logo">
                    <img
                      src="https://www.brisans.com.au/storage/temp/public/da1/63d/886/Moto-Guzzi-White__200.png"
                      srcSet="https://www.brisans.com.au/storage/temp/public/da1/63d/886/Moto-Guzzi-White__200.png 200w"
                      sizes="(max-width: 200px) 100vw, 200px"
                      alt="Moto Guzzi Logo"
                    />
                  </div>
                  <a
                    href="https://www.brisans.com.au/new-bikes/moto-guzzi"
                    className="block-link"
                  >
                    Moto Guzzi
                  </a>
                </div>
                <div className="brand js-brand">
                  <div className="logo">
                    <img
                      src="https://www.brisans.com.au/storage/temp/public/368/70e/57c/Piaggio-lockup-white__200.png"
                      srcSet="https://www.brisans.com.au/storage/temp/public/368/70e/57c/Piaggio-lockup-white__200.png 200w"
                      sizes="(max-width: 200px) 100vw, 200px"
                      alt="Piaggio Logo Lockup"
                    />
                  </div>
                  <a
                    href="https://www.brisans.com.au/new-bikes/piaggio"
                    className="block-link"
                  >
                    Piaggio
                  </a>
                </div>
                <div className="brand js-brand">
                  <div className="logo">
                    <img
                      src="https://www.brisans.com.au/storage/temp/public/095/496/dd2/Polaris-Off-Road-Logo__200.png"
                      srcSet="https://www.brisans.com.au/storage/temp/public/095/496/dd2/Polaris-Off-Road-Logo__200.png 200w"
                      sizes="(max-width: 200px) 100vw, 200px"
                      alt="Polaris Off Road Vehicles Logo"
                    />
                  </div>
                  <a
                    href="https://www.brisans.com.au/new-bikes/polaris"
                    className="block-link"
                  >
                    Polaris
                  </a>
                </div>
                <div className="brand js-brand">
                  <div className="logo">
                    <img
                      src="https://www.brisans.com.au/storage/temp/public/91d/315/e48/Royal-Enfield-Logo__200.png"
                      srcSet="https://www.brisans.com.au/storage/temp/public/91d/315/e48/Royal-Enfield-Logo__200.png 200w"
                      sizes="(max-width: 200px) 100vw, 200px"
                      alt="Royal Enfield Logo"
                    />
                  </div>
                  <a
                    href="https://www.brisans.com.au/new-bikes/royal-enfield"
                    className="block-link"
                  >
                    Royal Enfield
                  </a>
                </div>
                <div className="brand js-brand">
                  <div className="logo">
                    <img
                      src="https://www.brisans.com.au/storage/temp/public/23e/78c/6c2/Suzuki-Logo-2__200.png"
                      srcSet="https://www.brisans.com.au/storage/temp/public/23e/78c/6c2/Suzuki-Logo-2__200.png 200w"
                      sizes="(max-width: 200px) 100vw, 200px"
                      alt="Suzuki Motorcycles Logo"
                    />
                  </div>
                  <a
                    href="https://www.brisans.com.au/new-bikes/suzuki"
                    className="block-link"
                  >
                    Suzuki
                  </a>
                </div>
                <div className="brand js-brand">
                  <div className="logo">
                    <img
                      src="https://www.brisans.com.au/storage/temp/public/bde/c37/16d/Sym-Logo__200.png"
                      srcSet="https://www.brisans.com.au/storage/temp/public/bde/c37/16d/Sym-Logo__200.png 200w"
                      sizes="(max-width: 200px) 100vw, 200px"
                      alt="SYM Scooter logo"
                    />
                  </div>
                  <a
                    href="https://www.brisans.com.au/new-bikes/sym-scoota"
                    className="block-link"
                  >
                    SYM Scoota
                  </a>
                </div>
                <div className="brand js-brand">
                  <div className="logo">
                    <img
                      src="https://www.brisans.com.au/storage/app/media/logos/triumph.svg"
                      alt="logos triumph"
                    />
                  </div>
                  <a
                    href="https://www.brisans.com.au/new-bikes/triumph"
                    className="block-link"
                  >
                    Triumph
                  </a>
                </div>
                <div className="brand js-brand">
                  <div className="logo">
                    <img
                      src="https://www.brisans.com.au/storage/temp/public/0a4/6e7/c61/Vespa-Logo__200.png"
                      srcSet="https://www.brisans.com.au/storage/temp/public/0a4/6e7/c61/Vespa-Logo__200.png 200w"
                      sizes="(max-width: 200px) 100vw, 200px"
                      alt="Vespa scooters logo"
                    />
                  </div>
                  <a
                    href="https://www.brisans.com.au/new-bikes/vespa"
                    className="block-link"
                  >
                    Vespa
                  </a>
                </div>
                <div className="arrows js-brand-arrows">
                  <div className="arrow prev js-brand-prev">
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/pagination-left.svg"
                      alt="Prev"
                    />
                  </div>
                  <div className="arrow next js-brand-next">
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/pagination-right.svg"
                      alt="Next"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="links">
            <div className="container">
              <div className="flex">
                <div className="link">
                  <div className="inner">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        // xmlns:xlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Layer_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 144 108"
                        style={imageStyle3}
                        xmlSpace="preserve"
                      >
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          className="st0"
                          d="M113.5,107.5h-83c-16.6,0-30-13.4-30-30v-47c0-16.6,13.4-30,30-30l83,0c16.6,0,30,13.4,30,30v47  C143.5,94.1,130.1,107.5,113.5,107.5z"
                          fill="transparent"
                          stroke="#4F4F4F"
                        />
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          className="st0"
                          d="M113.5,107.5h-83c-16.6,0-30-13.4-30-30v-47c0-16.6,13.4-30,30-30l83,0c16.6,0,30,13.4,30,30v47  C143.5,94.1,130.1,107.5,113.5,107.5z"
                          fill="transparent"
                          stroke="#fff"
                        />
                      </svg>
                      <img
                        src="https://www.brisans.com.au/storage/app/media/placeholder/spanner.svg"
                        alt="placeholder spanner"
                      />
                    </div>
                    <div className="text">
                      <h3>Book a Service</h3>
                      <div className="copy">
                        <p>
                          Need any motorcycle servicing work done? See Brisans
                        </p>
                      </div>
                      <a className="btn" href="/book-service">
                        <span>Book a Service</span>
                      </a>
                    </div>
                  </div>
                  <a className="block-link" href="/book-service">
                    <span>Book a Service</span>
                  </a>
                </div>
                <div className="link">
                  <div className="inner">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        // xmlns:xlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Layer_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 144 108"
                        style={imageStyle3}
                        xmlSpace="preserve"
                      >
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          className="st0"
                          d="M113.5,107.5h-83c-16.6,0-30-13.4-30-30v-47c0-16.6,13.4-30,30-30l83,0c16.6,0,30,13.4,30,30v47  C143.5,94.1,130.1,107.5,113.5,107.5z"
                          fill="transparent"
                          stroke="#4F4F4F"
                        />
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          className="st0"
                          d="M113.5,107.5h-83c-16.6,0-30-13.4-30-30v-47c0-16.6,13.4-30,30-30l83,0c16.6,0,30,13.4,30,30v47  C143.5,94.1,130.1,107.5,113.5,107.5z"
                          fill="transparent"
                          stroke="#fff"
                        />
                      </svg>
                      <img
                        src="https://www.brisans.com.au/storage/app/media/placeholder/money.svg"
                        alt="placeholder money"
                      />
                    </div>
                    <div className="text">
                      <h3>Finance</h3>
                      <div className="copy">
                        <p>
                          Competitive finance options from a range of lenders.
                          Chat with a Business Manager today!
                        </p>
                      </div>
                      <a className="btn" href="/finance">
                        <span>Find Out More</span>
                      </a>
                    </div>
                  </div>
                  <a className="block-link" href="/finance">
                    <span>Find Out More</span>
                  </a>
                </div>
                <div className="link">
                  <div className="inner">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        // xmlns:xlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Layer_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 144 108"
                        style={imageStyle3}
                        xmlSpace="preserve"
                      >
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          className="st0"
                          d="M113.5,107.5h-83c-16.6,0-30-13.4-30-30v-47c0-16.6,13.4-30,30-30l83,0c16.6,0,30,13.4,30,30v47  C143.5,94.1,130.1,107.5,113.5,107.5z"
                          fill="transparent"
                          stroke="#4F4F4F"
                        />
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          className="st0"
                          d="M113.5,107.5h-83c-16.6,0-30-13.4-30-30v-47c0-16.6,13.4-30,30-30l83,0c16.6,0,30,13.4,30,30v47  C143.5,94.1,130.1,107.5,113.5,107.5z"
                          fill="transparent"
                          stroke="#fff"
                        />
                      </svg>
                      <img
                        src="https://www.brisans.com.au/storage/app/media/placeholder/helmet.svg"
                        alt="placeholder helmet"
                      />
                    </div>
                    <div className="text">
                      <h3>Clothing &amp; Accessories</h3>
                      <div className="copy">
                        <p>
                          Brisans has a range of clothing parts and accessories
                          to fit you out and get the job done.
                        </p>
                      </div>
                      <a className="btn" href="/parts-accessories-clothing">
                        <span>Find Out More</span>
                      </a>
                    </div>
                  </div>
                  <a className="block-link" href="/parts-accessories-clothing">
                    <span>Find Out More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content3;
