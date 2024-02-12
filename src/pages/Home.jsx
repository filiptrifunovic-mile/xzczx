import Brendovi from "../components/Brendovi";
import Layout from "../components/Layout";

const imageStyle = {
  objectPosition: "50% 50%",
};
const imageStyle2 = {
  objectPosition: "61% 41.5%",
};
const imageStyle3 = {
  objectPosition: "46% 44%",
};
const imageStyle4 = {
  objectPosition: "54.5% 52%",
};
const imageStyle5 = {
  objectPosition: "58.5% 44",
};
const imageStyle6 = {
  objectPosition: "57.5% 53%",
};
const imageStyle7 = {
  objectPosition: "36% 27.5%",
};
const imageStyle8 = {
  objectPosition: "45% 45%",
};
const imageStyle9 = {
  objectPosition: "56% 45%",
};
const imageStyle13 = {
  objectPosition: "28% 52%",
};

const imageStyle10 = {
  backgroundImage:
    "url(https://www.brisans.com.au/storage/app/webp/28a/a0b/39b/img_8061a50dce5a1d29ba3fd9efb7a65b42_2000_0_0_0_auto_webp_28aa0b39be80cd84142564e489db839b0b493e26.webp)",
};
const imageStyle11 = {
  backgroundImage:
    "url(https://www.brisans.com.au/storage/app/webp/470/cff/e57/img_9e2f1c6325ec98fb3b2e6adbe809a0c5_2000_0_0_0_auto_webp_470cffe57236b769a10899bea4dafcbe37acce37.webp)",
};
const imageStyle12 = {
  backgroundImage:
    "url(https://www.brisans.com.au/storage/app/webp/485/aea/00b/img_a5c0250f9e50b0c66d19db04ad5b9db7_2000_0_0_0_auto_webp_485aea00bc5e0986e8a92b46fe97331d7469be8b.webp)",
};

function Home() {
  return (
    <div>
      <Layout>
        <div id="site-content" className="site-content">
          <div className="module-banner-home js-home-banner">
            <div className="background js-banner-background">
              <div className="bg-image">
                <img
                  src="/public/pozadina.webp"
                  data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_ca0827ad253e492f8e9912367b5e29fd_2000_0_0_0_auto.jpg"
                  style={imageStyle}
                  sizes="(max-width: 2000px) 100vw, 2000px"
                  alt="placeholder Website Background screenshot"
                />
              </div>
            </div>
            <div className="banner-top">
              <div className="container-small" data-aos="fade-up">
                <div className="container-small-inner">
                  <div className="banner-slider-container js-home-slider-container">
                    <div className="banner-slider js-home-slider">
                      <div className="slide">
                        <div className="text">
                          <h6>Experience Brisans</h6>
                          <h1 className="display">
                            Newcastles Largest Motorcycle Showroom
                          </h1>
                          <div className="copy">
                            <p>
                              Welcome to <strong>Brisan Motorcycles</strong>, a
                              renowned family-owned business which has satisfied
                              over 100,000 motorcycle riders, lovers and
                              enthusiasts for over 30 years across Australia. If
                              youre looking for the largest range of quality new
                              and used
                              <strong>motorcycles</strong>,{" "}
                              <strong>scooters</strong> and
                              <strong>off-road vehicles,</strong> make{" "}
                              <strong>Brisan Motorcycles</strong>{" "}
                              <strong>Newcastle</strong> the place you visit
                              first. We look forward to welcoming you to our
                              dealership where we share a valued ethic to simply
                              live, laugh and ride. What else do we need?
                            </p>
                          </div>
                          <a className="btn" href="/about">
                            <span>Discover Now</span>
                          </a>
                        </div>
                      </div>
                      <div className="slide">
                        <div className="text">
                          <h6>Off-Road</h6>
                          <h2 className="display">
                            Huge Range of Off-Road Vehicles
                          </h2>
                          <div className="copy">
                            <p>
                              Brisan Motorcycles Newcastle is also an expert in
                              off-road vehicles, with Polaris Off-Road, Kawasaki
                              and Suzuki. Whether youre looking for an ag bike,
                              workhorse, EV or full-on recreational vehicle,
                              Brisans has you covered.
                            </p>
                          </div>
                          <a className="btn" href="/new-bikes/sxs-utvs">
                            <span>Discover Now</span>
                          </a>
                        </div>
                      </div>
                      <div className="slide">
                        <div className="text">
                          <h6>Scooters</h6>
                          <h2 className="display">
                            Newcastlss #1 Destination for Scooters
                          </h2>
                          <div className="copy">
                            <p>
                              Home to Piaggio, Vespa, BMW Motorrad, SYM Scoota,
                              Suzuki and FONZ, Brisan Motorcycles has the
                              largest range of scooters in Newcastle! Stop by
                              and see the full range.
                            </p>
                          </div>
                          <a className="btn" href="/new-bikes/scooters">
                            <span>Discover Now</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="slider-tracker-holder">
                      <div className="slider-tracker js-slider-tracker"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="quote" data-aos="fade-right">
                <img
                  src="https://www.brisans.com.au/storage/temp/public/23a/3e8/b6c/quote__40.png"
                  alt="Quote"
                  srcSet="https://www.brisans.com.au/storage/temp/public/23a/3e8/b6c/quote__40.png 40w"
                  sizes="(max-width: 40px) 100vw, 40px"
                />
                <div className="copy">
                  <p>
                    Great friendly dealership with a huge range of used and new
                    bikes. Knowledgeable and able to help with all questions.
                  </p>
                </div>
                <div className="author">– Alex Brueton, Wickham</div>
              </div>
              <div className="scrolldown js-scrolldown" data-aos="fade-up">
                <div className="text">
                  <strong>Scroll down</strong>
                  <br />
                  to discover more
                </div>
                <div className="device"></div>
              </div>
            </div>
            <div className="banner-bottom">
              <div className="container container-medium">
                <div className="left" data-aos="fade-up">
                  <h6>Why Brisans?</h6>

                  <div className="copy">
                    <p>
                      The passionate, knowledgeable and friendly sales team will
                      be able to assist with all your technical questions along
                      with attractive leasing and finance options.
                    </p>
                    <p>
                      We have a range of demonstrator models: Aprilia, BMW
                      Motorrad, Indian, Kawasaki, Moto Guzzi, Royal Enfield,
                      Suzuki and Triumph. So call or email today to book your
                      ride.
                    </p>
                    <p>
                      Check out the range of scooters from BMW Motorrad,
                      Piaggio, Vespa, Fonz, Sym and Suzuki.
                    </p>
                    <p>
                      For work and play see our range of off-road vehicles from
                      Polaris, Kawasaki and Suzuki.
                    </p>
                  </div>
                  <a className="btn" href="/contact">
                    <span>Contact Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="module-new-bike-categories js-bike-categories">
            <div className="bg-image">
              <img
                loading="lazy"
                className="js-cat-image"
                data-id="1"
                src="https://www.brisans.com.au/storage/temp/public/8a2/3f7/a1b/img_a3230967325bb96f12c6496b66962eda_2000_0_0_0_auto_webp_948ba1be5fc7d38a615fd5e57cb5c2ae6aa01e1b__2000.webp"
                data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_a3230967325bb96f12c6496b66962eda_2000_0_0_0_auto.jpg"
                style={imageStyle7}
                srcSet="https://www.brisans.com.au/storage/temp/public/8a2/3f7/a1b/img_a3230967325bb96f12c6496b66962eda_2000_0_0_0_auto_webp_948ba1be5fc7d38a615fd5e57cb5c2ae6aa01e1b__2000.webp 2000w, https://www.brisans.com.au/storage/temp/public/8a2/3f7/a1b/img_a3230967325bb96f12c6496b66962eda_2000_0_0_0_auto_webp_948ba1be5fc7d38a615fd5e57cb5c2ae6aa01e1b__400.webp 400w, https://www.brisans.com.au/storage/temp/public/8a2/3f7/a1b/img_a3230967325bb96f12c6496b66962eda_2000_0_0_0_auto_webp_948ba1be5fc7d38a615fd5e57cb5c2ae6aa01e1b__768.webp 768w, https://www.brisans.com.au/storage/temp/public/8a2/3f7/a1b/img_a3230967325bb96f12c6496b66962eda_2000_0_0_0_auto_webp_948ba1be5fc7d38a615fd5e57cb5c2ae6aa01e1b__1024.webp 1024w"
                sizes="(max-width: 2000px) 100vw, 2000px"
                alt="Home-Page-Images LAMS-Ninja-400"
              />
              <img
                loading="lazy"
                className="js-cat-image"
                data-id="2"
                src="https://www.brisans.com.au/storage/temp/public/ebc/b06/8c2/img_8a2c4a1527833da109f6e7cb09188cd3_2000_0_0_0_auto_webp_f7fb38553e16cd27c4ef672aa10547822ebb49ef__2000.webp"
                data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_8a2c4a1527833da109f6e7cb09188cd3_2000_0_0_0_auto.jpg"
                style={imageStyle6}
                srcSet="https://www.brisans.com.au/storage/temp/public/ebc/b06/8c2/img_8a2c4a1527833da109f6e7cb09188cd3_2000_0_0_0_auto_webp_f7fb38553e16cd27c4ef672aa10547822ebb49ef__2000.webp 2000w, https://www.brisans.com.au/storage/temp/public/ebc/b06/8c2/img_8a2c4a1527833da109f6e7cb09188cd3_2000_0_0_0_auto_webp_f7fb38553e16cd27c4ef672aa10547822ebb49ef__400.webp 400w, https://www.brisans.com.au/storage/temp/public/ebc/b06/8c2/img_8a2c4a1527833da109f6e7cb09188cd3_2000_0_0_0_auto_webp_f7fb38553e16cd27c4ef672aa10547822ebb49ef__768.webp 768w, https://www.brisans.com.au/storage/temp/public/ebc/b06/8c2/img_8a2c4a1527833da109f6e7cb09188cd3_2000_0_0_0_auto_webp_f7fb38553e16cd27c4ef672aa10547822ebb49ef__1024.webp 1024w"
                sizes="(max-width: 2000px) 100vw, 2000px"
                alt="Home-Page-Images Adventure-Triumph-Tiger-1200"
              />
              <img
                loading="lazy"
                className="js-cat-image"
                data-id="3"
                src="https://www.brisans.com.au/storage/temp/public/de4/f0f/f12/img_9be0a89609b08d93942f8847c8bad514_2000_0_0_0_auto_webp_46896cdf2517c8568622d943f298ef5e77464b90__2000.webp"
                data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_9be0a89609b08d93942f8847c8bad514_2000_0_0_0_auto.jpg"
                style={imageStyle8}
                srcSet="https://www.brisans.com.au/storage/temp/public/de4/f0f/f12/img_9be0a89609b08d93942f8847c8bad514_2000_0_0_0_auto_webp_46896cdf2517c8568622d943f298ef5e77464b90__2000.webp 2000w, https://www.brisans.com.au/storage/temp/public/de4/f0f/f12/img_9be0a89609b08d93942f8847c8bad514_2000_0_0_0_auto_webp_46896cdf2517c8568622d943f298ef5e77464b90__400.webp 400w, https://www.brisans.com.au/storage/temp/public/de4/f0f/f12/img_9be0a89609b08d93942f8847c8bad514_2000_0_0_0_auto_webp_46896cdf2517c8568622d943f298ef5e77464b90__768.webp 768w, https://www.brisans.com.au/storage/temp/public/de4/f0f/f12/img_9be0a89609b08d93942f8847c8bad514_2000_0_0_0_auto_webp_46896cdf2517c8568622d943f298ef5e77464b90__1024.webp 1024w"
                sizes="(max-width: 2000px) 100vw, 2000px"
                alt="Home-Page-Images Road-Royal-Enfield-Interceptor"
              />
              <img
                loading="lazy"
                className="js-cat-image"
                data-id="4"
                src="https://www.brisans.com.au/storage/temp/public/8d1/216/b57/img_32f5230e179a42ffd7e9dc72f9b72723_2000_0_0_0_auto_webp_aecb72603e62e8ebe2425387dcd4e5d10efcbc36__2000.webp"
                data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_32f5230e179a42ffd7e9dc72f9b72723_2000_0_0_0_auto.jpg"
                style={imageStyle9}
                srcSet="https://www.brisans.com.au/storage/temp/public/8d1/216/b57/img_32f5230e179a42ffd7e9dc72f9b72723_2000_0_0_0_auto_webp_aecb72603e62e8ebe2425387dcd4e5d10efcbc36__2000.webp 2000w, https://www.brisans.com.au/storage/temp/public/8d1/216/b57/img_32f5230e179a42ffd7e9dc72f9b72723_2000_0_0_0_auto_webp_aecb72603e62e8ebe2425387dcd4e5d10efcbc36__400.webp 400w, https://www.brisans.com.au/storage/temp/public/8d1/216/b57/img_32f5230e179a42ffd7e9dc72f9b72723_2000_0_0_0_auto_webp_aecb72603e62e8ebe2425387dcd4e5d10efcbc36__768.webp 768w, https://www.brisans.com.au/storage/temp/public/8d1/216/b57/img_32f5230e179a42ffd7e9dc72f9b72723_2000_0_0_0_auto_webp_aecb72603e62e8ebe2425387dcd4e5d10efcbc36__1024.webp 1024w"
                sizes="(max-width: 2000px) 100vw, 2000px"
                alt="Home-Page-Images Off-Road-Polaris-General"
              />
            </div>
            <div className="columns">
              <div className="column js-cat-column" data-id="1">
                <div className="bg-image">
                  <img
                    loading="lazy"
                    src="https://www.brisans.com.au/storage/temp/public/e7e/63a/9ef/img_e2064c7ec0217946a62e1ef027d8daaf_768_0_0_0_auto_webp_507ee3947dbe5ecf04fcef36f2d5ab2c0ede262e__768.webp"
                    data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_e2064c7ec0217946a62e1ef027d8daaf_768_0_0_0_auto.jpg"
                    style={imageStyle7}
                    srcSet="https://www.brisans.com.au/storage/temp/public/e7e/63a/9ef/img_e2064c7ec0217946a62e1ef027d8daaf_768_0_0_0_auto_webp_507ee3947dbe5ecf04fcef36f2d5ab2c0ede262e__768.webp 768w, https://www.brisans.com.au/storage/temp/public/e7e/63a/9ef/img_e2064c7ec0217946a62e1ef027d8daaf_768_0_0_0_auto_webp_507ee3947dbe5ecf04fcef36f2d5ab2c0ede262e__400.webp 400w"
                    sizes="(max-width: 768px) 100vw, 768px"
                    alt="Home-Page-Images LAMS-Ninja-400"
                  />
                </div>
                <div className="text" data-aos="fade-up">
                  <h2>LAMs</h2>
                  <div className="hidden">
                    <div className="copy">
                      <p>
                        Let us guide you through the range of{" "}
                        <strong>Learner-Approved Motorcycles</strong>, whether
                        youre just starting out or have some riding experience
                        under your belt, Brisans can help you find the right
                        bike to get you through your{" "}
                        <strong>L and P Plates</strong>!
                      </p>
                    </div>
                    <a className="btn" href="/new-bikes/lams">
                      <span>Discover Now</span>
                    </a>
                  </div>
                </div>
                <a className="block-link" href="/new-bikes/lams">
                  <span>Discover Now</span>
                </a>
              </div>
              <div className="column js-cat-column" data-id="2">
                <div className="bg-image">
                  <img
                    loading="lazy"
                    src="https://www.brisans.com.au/storage/temp/public/b29/bde/49b/img_bbb3c1d02530c5c406b55afe5bb8ca14_768_0_0_0_auto_webp_e995bbde00530e61787617ff199419663f462af6__768.webp"
                    data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_bbb3c1d02530c5c406b55afe5bb8ca14_768_0_0_0_auto.jpg"
                    style={imageStyle6}
                    srcSet="https://www.brisans.com.au/storage/temp/public/b29/bde/49b/img_bbb3c1d02530c5c406b55afe5bb8ca14_768_0_0_0_auto_webp_e995bbde00530e61787617ff199419663f462af6__768.webp 768w, https://www.brisans.com.au/storage/temp/public/b29/bde/49b/img_bbb3c1d02530c5c406b55afe5bb8ca14_768_0_0_0_auto_webp_e995bbde00530e61787617ff199419663f462af6__400.webp 400w"
                    sizes="(max-width: 768px) 100vw, 768px"
                    alt="Home-Page-Images Adventure-Triumph-Tiger-1200"
                  />
                </div>
                <div className="text" data-aos="fade-up">
                  <h2>Adventure</h2>
                  <div className="hidden">
                    <div className="copy">
                      <p>
                        <strong>Adventure bikes&nbsp;</strong>come in a range of
                        sizes and go from
                        <strong>
                          light off-road capability, all the way to
                          rally-styled, desert-crossing machines
                        </strong>
                        . If you want to take the roads less travelled, the only
                        way to do it is on an adventure bike
                      </p>
                    </div>
                    <a className="btn" href="/new-bikes/adventure">
                      <span>Discover Now</span>
                    </a>
                  </div>
                </div>
                <a className="block-link" href="/new-bikes/adventure">
                  <span>Discover Now</span>
                </a>
              </div>
              <div className="column js-cat-column" data-id="3">
                <div className="bg-image">
                  <img
                    loading="lazy"
                    src="https://www.brisans.com.au/storage/temp/public/f96/c07/80e/img_5888528fae78b7b77db3ca3738bc4bf5_768_0_0_0_auto_webp_d71dcc6ca8bd227efef58502d8eb1fd31e506db4__768.webp"
                    data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_5888528fae78b7b77db3ca3738bc4bf5_768_0_0_0_auto.jpg"
                    style={imageStyle8}
                    srcSet="https://www.brisans.com.au/storage/temp/public/f96/c07/80e/img_5888528fae78b7b77db3ca3738bc4bf5_768_0_0_0_auto_webp_d71dcc6ca8bd227efef58502d8eb1fd31e506db4__768.webp 768w, https://www.brisans.com.au/storage/temp/public/f96/c07/80e/img_5888528fae78b7b77db3ca3738bc4bf5_768_0_0_0_auto_webp_d71dcc6ca8bd227efef58502d8eb1fd31e506db4__400.webp 400w"
                    sizes="(max-width: 768px) 100vw, 768px"
                    alt="Home-Page-Images Road-Royal-Enfield-Interceptor"
                  />
                </div>
                <div className="text" data-aos="fade-up">
                  <h2>Road</h2>
                  <div className="hidden">
                    <div className="copy">
                      <p>
                        Theres no greater feeling than hitting the road on two
                        wheels - whether youre riding{" "}
                        <strong>
                          Sports, Naked, Roadster, Cruiser or Touring bikes,
                          Modern Retros
                        </strong>{" "}
                        or&nbsp;<strong>Café&nbsp;Racers</strong> we all share
                        the same joy in the middle of a corner.
                      </p>
                    </div>
                    <a className="btn" href="new-bikes/road-bikes">
                      <span>Discover Now</span>
                    </a>
                  </div>
                </div>
                <a className="block-link" href="new-bikes/road-bikes">
                  <span>Discover Now</span>
                </a>
              </div>
              <div className="column js-cat-column" data-id="4">
                <div className="bg-image">
                  <img
                    loading="lazy"
                    src="https://www.brisans.com.au/storage/temp/public/f65/6bb/923/img_a4e8e930aebc4e2223a0b0d568bac237_768_0_0_0_auto_webp_983406eea6189b53bd45d9eeef04517782b2ab53__768.webp"
                    data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_a4e8e930aebc4e2223a0b0d568bac237_768_0_0_0_auto.jpg"
                    style={imageStyle9}
                    srcSet="https://www.brisans.com.au/storage/temp/public/f65/6bb/923/img_a4e8e930aebc4e2223a0b0d568bac237_768_0_0_0_auto_webp_983406eea6189b53bd45d9eeef04517782b2ab53__768.webp 768w, https://www.brisans.com.au/storage/temp/public/f65/6bb/923/img_a4e8e930aebc4e2223a0b0d568bac237_768_0_0_0_auto_webp_983406eea6189b53bd45d9eeef04517782b2ab53__400.webp 400w"
                    sizes="(max-width: 768px) 100vw, 768px"
                    alt="Home-Page-Images Off-Road-Polaris-General"
                  />
                </div>
                <div className="text" data-aos="fade-up">
                  <h2>SxS + UTVs</h2>
                  <div className="hidden">
                    <div className="copy">
                      <p>
                        Off-road vehicles come in a variety of shapes and sizes:
                        machines built for work and machines built for play.
                        With p
                        <strong>etrol, diesel and electric powerplants</strong>{" "}
                        available theres an off-road vehicle for your purpose.
                      </p>
                    </div>
                    <a className="btn" href="new-bikes/sxs-utvs">
                      <span>Discover Now</span>
                    </a>
                  </div>
                </div>
                <a className="block-link" href="new-bikes/sxs-utvs">
                  <span>Discover Now</span>
                </a>
              </div>
            </div>
          </div>
          <div className="module-new-bike-subcategories js-bike-subcategories">
            <div
              className="subcategory js-sub"
              data-id="1"
              data-bg="bg-brand-navy-700"
            >
              <div className="image">
                <div
                  className="bg-image"
                  style={imageStyle10}
                  data-webp-bg-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_8061a50dce5a1d29ba3fd9efb7a65b42_2000_0_0_0_auto.jpg"
                ></div>
              </div>
              <div className="text">
                <div className="flex">
                  <h6 data-aos="fade-up">Road Bikes</h6>
                  <h2 className="h1" data-aos="fade-up">
                    Sports
                  </h2>
                  <div className="images">
                    <div className="swatch" data-aos="zoom-in">
                      <div className="image-cover">
                        <img
                          loading="lazy"
                          src="https://www.brisans.com.au/storage/temp/public/776/719/350/img_376ac222475bbefe479337669962b422_344_0_0_0_auto_webp_1e12b5db8d54c8f4910cbe8c4220032e8529df79__344.webp"
                          data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_376ac222475bbefe479337669962b422_344_0_0_0_auto.jpg"
                          style={imageStyle}
                          srcSet="https://www.brisans.com.au/storage/temp/public/776/719/350/img_376ac222475bbefe479337669962b422_344_0_0_0_auto_webp_1e12b5db8d54c8f4910cbe8c4220032e8529df79__344.webp 344w"
                          sizes="(max-width: 344px) 100vw, 344px"
                          alt="Home-Page-Images Swatches Sport"
                        />
                      </div>
                    </div>
                    <div
                      className="bike"
                      data-aos="fade-right"
                      data-aos-delay="1000"
                    >
                      <img
                        loading="lazy"
                        src="https://www.brisans.com.au/storage/temp/public/a13/22b/723/bike-image-2_webp_6f4e8d42fb20831ef3b9109771dfaed69c77b93d__406.webp"
                        data-webp-img-fallback="https://www.brisans.com.au/storage/app/media/placeholder/bike-image-2.png"
                        srcSet="https://www.brisans.com.au/storage/temp/public/a13/22b/723/bike-image-2_webp_6f4e8d42fb20831ef3b9109771dfaed69c77b93d__406.webp 406w, https://www.brisans.com.au/storage/temp/public/a13/22b/723/bike-image-2_webp_6f4e8d42fb20831ef3b9109771dfaed69c77b93d__400.webp 400w"
                        sizes="(max-width: 406px) 100vw, 406px"
                        alt="placeholder bike-image-2"
                      />
                    </div>
                  </div>
                  <div className="flex" data-aos="fade-up">
                    <div className="copy">
                      <p>
                        Sports bikes are built to perform, with slanted-forward
                        riding positions, ultimate handling, big, powerful
                        engines and stopping power to match.
                      </p>
                    </div>
                    <a className="btn" href="/new-bikes/road-bikes/sports">
                      <span>Shop Sports Bikes</span>
                    </a>
                    <a
                      className="block-link"
                      href="/new-bikes/road-bikes/sports"
                    >
                      <span>Shop Sports Bikes</span>
                    </a>
                  </div>
                </div>
                <a className="block-link" href="/new-bikes/road-bikes/sports">
                  <span>Shop Sports Bikes</span>
                </a>
              </div>
            </div>
            <div
              className="subcategory js-sub"
              data-id="2"
              data-bg="bg-brand-green-700"
            >
              <div className="image">
                <div
                  className="bg-image"
                  style={imageStyle11}
                  data-webp-bg-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_9e2f1c6325ec98fb3b2e6adbe809a0c5_2000_0_0_0_auto.jpg"
                ></div>
              </div>
              <div className="text">
                <div className="flex">
                  <h6 data-aos="fade-up">Road Bikes</h6>
                  <h2 className="h1" data-aos="fade-up">
                    Adventure
                  </h2>
                  <div className="images">
                    <div className="swatch" data-aos="zoom-in">
                      <div className="image-cover">
                        <img
                          loading="lazy"
                          src="https://www.brisans.com.au/storage/temp/public/a99/001/39a/img_275a29ce67e191b04effd224cbe19b51_344_0_0_0_auto_webp_18525e2d6930eab4aba050cfb8f4c050d053875e__344.webp"
                          data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_275a29ce67e191b04effd224cbe19b51_344_0_0_0_auto.jpg"
                          style={imageStyle}
                          srcSet="https://www.brisans.com.au/storage/temp/public/a99/001/39a/img_275a29ce67e191b04effd224cbe19b51_344_0_0_0_auto_webp_18525e2d6930eab4aba050cfb8f4c050d053875e__344.webp 344w"
                          sizes="(max-width: 344px) 100vw, 344px"
                          alt="Home-Page-Images Swatches Adventure"
                        />
                      </div>
                    </div>
                    <div
                      className="bike"
                      data-aos="fade-right"
                      data-aos-delay="1000"
                    >
                      <img
                        loading="lazy"
                        src="https://www.brisans.com.au/storage/temp/public/e74/f81/766/bike-image-3_webp_f80fa31b495ebe27347c8775160ada787f7fc946__418.webp"
                        data-webp-img-fallback="https://www.brisans.com.au/storage/app/media/placeholder/bike-image-3.png"
                        srcSet="https://www.brisans.com.au/storage/temp/public/e74/f81/766/bike-image-3_webp_f80fa31b495ebe27347c8775160ada787f7fc946__418.webp 418w, https://www.brisans.com.au/storage/temp/public/e74/f81/766/bike-image-3_webp_f80fa31b495ebe27347c8775160ada787f7fc946__400.webp 400w"
                        sizes="(max-width: 418px) 100vw, 418px"
                        alt="placeholder bike-image-3"
                      />
                    </div>
                  </div>
                  <div className="flex" data-aos="fade-up">
                    <div className="copy">
                      <p>
                        Adventure bikes are built rugged and tough. Long travel
                        suspension and larger fuel tank capacities for soaking
                        up the bumps and long days in the saddle.
                      </p>
                    </div>
                    <a className="btn" href="/new-bikes/adventure">
                      <span>Shop Adventure Bikes</span>
                    </a>
                    <a className="block-link" href="/new-bikes/adventure">
                      <span>Shop Adventure Bikes</span>
                    </a>
                  </div>
                </div>
                <a className="block-link" href="/new-bikes/adventure">
                  <span>Shop Adventure Bikes</span>
                </a>
              </div>
            </div>
            <div
              className="subcategory js-sub"
              data-id="3"
              data-bg="bg-brand-navy-700"
            >
              <div className="image">
                <div
                  className="bg-image"
                  style={imageStyle12}
                  data-webp-bg-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_a5c0250f9e50b0c66d19db04ad5b9db7_2000_0_0_0_auto.jpg"
                ></div>
              </div>
              <div className="text">
                <div className="flex">
                  <h6 data-aos="fade-up">Road Bikes</h6>
                  <h2 className="h1" data-aos="fade-up">
                    Cruiser
                  </h2>
                  <div className="images">
                    <div className="swatch" data-aos="zoom-in">
                      <div className="image-cover">
                        <img
                          loading="lazy"
                          src="https://www.brisans.com.au/storage/temp/public/a6b/cb9/69e/img_5f59010629d6560775f6c7bf061f4bdb_344_0_0_0_auto_webp_13331bce97fcd77a5ca7daf7f43cdc84180c8a44__344.webp"
                          data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_5f59010629d6560775f6c7bf061f4bdb_344_0_0_0_auto.jpg"
                          style={imageStyle}
                          srcSet="https://www.brisans.com.au/storage/temp/public/a6b/cb9/69e/img_5f59010629d6560775f6c7bf061f4bdb_344_0_0_0_auto_webp_13331bce97fcd77a5ca7daf7f43cdc84180c8a44__344.webp 344w"
                          sizes="(max-width: 344px) 100vw, 344px"
                          alt="Home-Page-Images Swatches Cruiser"
                        />
                      </div>
                    </div>
                    <div
                      className="bike"
                      data-aos="fade-right"
                      data-aos-delay="1000"
                    >
                      <img
                        loading="lazy"
                        src="https://www.brisans.com.au/storage/temp/public/88a/4bc/328/Cruiser-Scout-Rogue_webp_bd44d7d34cbedbd0c9b3ec77ead3b1e7c55b68f2__418.webp"
                        data-webp-img-fallback="https://www.brisans.com.au/storage/app/media/Home-Page-Images/Deep-Etched/Cruiser-Scout-Rogue.png"
                        srcSet="https://www.brisans.com.au/storage/temp/public/88a/4bc/328/Cruiser-Scout-Rogue_webp_bd44d7d34cbedbd0c9b3ec77ead3b1e7c55b68f2__418.webp 418w, https://www.brisans.com.au/storage/temp/public/88a/4bc/328/Cruiser-Scout-Rogue_webp_bd44d7d34cbedbd0c9b3ec77ead3b1e7c55b68f2__400.webp 400w"
                        sizes="(max-width: 418px) 100vw, 418px"
                        alt="Home-Page-Images Deep-Etched Cruiser-Scout-Rogue"
                      />
                    </div>
                  </div>
                  <div className="flex" data-aos="fade-up">
                    <div className="copy">
                      <p>
                        Cruisers are iconic motorcycles. Instantly recognizable
                        thanks to their silhouette, low, comfortable seat height
                        and relaxed riding position.
                      </p>
                    </div>
                    <a className="btn" href="new-bikes/road-bikes/cruiser">
                      <span>Shop For Cruisers</span>
                    </a>
                    <a
                      className="block-link"
                      href="new-bikes/road-bikes/cruiser"
                    >
                      <span>Shop For Cruisers</span>
                    </a>
                  </div>
                </div>
                <a className="block-link" href="new-bikes/road-bikes/cruiser">
                  <span>Shop For Cruisers</span>
                </a>
              </div>
            </div>
          </div>
          <Brendovi />
        </div>
      </Layout>
    </div>
  );
}

export default Home;
