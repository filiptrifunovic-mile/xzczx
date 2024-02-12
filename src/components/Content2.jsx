const Content2 = () => {
  const imageStyle = {
    objectPosition: "50% 50%",
  };

  const imageStyle3 = {
    objectPosition: "61% 44.5%",
  };
  const imageStyle2 = {
    color: "#9B2D35",
  };
  const imageStyle4 = {
    color: "#BC5E1A",
  };
  const imageStyle5 = {
    color: "#77908E",
  };
  const imageStyle7 = {
    color: "#AFAC57",
  };
  const imageStyle8 = {
    color: "#019CDC",
  };
  const imageStyle9 = {
    textAlign: "left",
  };
  const imageStyle10 = {
    width: "300px",
  };

  return (
    <div id="site-content" className="site-content">
      <div className="module-banner js-banner">
        <div className="bg-image js-banner-background">
          <img
            src="https://www.brisans.com.au/storage/temp/public/ed3/347/592/img_ac00b7e849a8aa896d9b555e44966293_2000_0_0_0_auto_webp_b32fcb30535fdf7ea7378e9df8df3132742d5cfd__2000.webp"
            data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_ac00b7e849a8aa896d9b555e44966293_2000_0_0_0_auto.jpg"
            style={imageStyle}
            srcSet="https://www.brisans.com.au/storage/temp/public/ed3/347/592/img_ac00b7e849a8aa896d9b555e44966293_2000_0_0_0_auto_webp_b32fcb30535fdf7ea7378e9df8df3132742d5cfd__2000.webp 2000w, https://www.brisans.com.au/storage/temp/public/ed3/347/592/img_ac00b7e849a8aa896d9b555e44966293_2000_0_0_0_auto_webp_b32fcb30535fdf7ea7378e9df8df3132742d5cfd__400.webp 400w, https://www.brisans.com.au/storage/temp/public/ed3/347/592/img_ac00b7e849a8aa896d9b555e44966293_2000_0_0_0_auto_webp_b32fcb30535fdf7ea7378e9df8df3132742d5cfd__768.webp 768w, https://www.brisans.com.au/storage/temp/public/ed3/347/592/img_ac00b7e849a8aa896d9b555e44966293_2000_0_0_0_auto_webp_b32fcb30535fdf7ea7378e9df8df3132742d5cfd__1024.webp 1024w"
            sizes="(max-width: 2000px) 100vw, 2000px"
            alt="Riding BMW R 1250 GS Triple Black off road with a rear wheel slide"
          />
        </div>
        <div className="container">
          <div className="left" data-aos="fade-up">
            <div className="logo">
              <img
                src="https://www.brisans.com.au/storage/temp/public/080/cf5/789/BMW-Motorrad-Logo-2_webp_8141ce84163193d98496371b4d1438b7e13e3eed__200.webp"
                data-webp-img-fallback="https://www.brisans.com.au/storage/app/media/logos/New/BMW-Motorrad-Logo-2.png"
                srcSet="https://www.brisans.com.au/storage/temp/public/080/cf5/789/BMW-Motorrad-Logo-2_webp_8141ce84163193d98496371b4d1438b7e13e3eed__200.webp 200w"
                sizes="(max-width: 200px) 100vw, 200px"
                alt="BMW Motorcycles Logo"
              />
            </div>
            <h6>BMW Motorrad</h6>
            <h1>BMW Motorrad Newcastle</h1>
            <div className="copy">
              <h4>
                <strong>
                  Brisan Motorcycles is your BMW Motorrad Specialist Dealer in
                  Newcastle.&nbsp;
                </strong>
              </h4>
              <p>
                BMW Motorrad builds awe-inspiring, dynamic motorcycles for every
                purpose.
              </p>
              <p>
                It has remained at the technological cutting edge ever since BMW
                first started producing motorcycles back in 1923. When it comes
                to design, engines, chassis, environmental responsibility and
                safety - BMW Motorrad is always one step ahead.
              </p>
            </div>
          </div>
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
      <div className="module-bike-filters js-filters js-bike-filters">
        <div className="container">
          <div className="borders">
            <div className="left">
              <div className="mobile-filters-toggle js-filters-toggle">
                Filter Your Search
              </div>
              <form
                className="filters-form js-filters-form js-auto-submit js-update-url"
                data-request="GetBikesAjax::onUpdate"
                data-request-update="'bikes/results': '#results'"
                data-request-success="updatePagination();"
              >
                <input type="hidden" name="page" value="1" />
                <input type="hidden" name="sort" value="" />
                <input type="hidden" name="tag" value="" />
                <input
                  type="hidden"
                  name="url"
                  value="https://www.brisans.com.au/new-bikes/bmw-motorrad"
                />
                <button type="submit" className="d-none ajax-submit">
                  Filter
                </button>
                <div className="filters-top">
                  <h5>Filter</h5>
                  <button type="button" className="reset js-filters-reset">
                    X Clear
                  </button>
                </div>
                <div className="filters">
                  <div className="accordion js-accordion" data-starts-open>
                    <div className="accordion-title js-accordion-title">
                      Category
                    </div>
                    <div className="accordion-content js-accordion-content">
                      <div className="checkboxes">
                        <div className="checkbox">
                          <input
                            type="checkbox"
                            name="categories[]"
                            value="1"
                          />
                          <label>Road Bikes</label>
                        </div>
                        <div className="checkbox">
                          <input
                            type="checkbox"
                            name="categories[]"
                            value="3"
                          />
                          <label>Adventure</label>
                        </div>
                        <div className="checkbox">
                          <input
                            type="checkbox"
                            name="categories[]"
                            value="6"
                          />
                          <label>LAMs</label>
                        </div>
                        <div className="checkbox">
                          <input
                            type="checkbox"
                            name="categories[]"
                            value="4"
                          />
                          <label>Scooters</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion js-accordion">
                    <div className="accordion-title js-accordion-title">
                      Subcategory
                    </div>
                    <div className="accordion-content js-accordion-content">
                      <div className="checkboxes">
                        <div className="checkbox">
                          <input
                            type="checkbox"
                            name="subcategories[]"
                            value="12"
                          />
                          <label>Naked/Roadster</label>
                        </div>
                        <div className="checkbox">
                          <input
                            type="checkbox"
                            name="subcategories[]"
                            value="6"
                          />
                          <label>Retro/Modern Classic</label>
                        </div>
                        <div className="checkbox">
                          <input
                            type="checkbox"
                            name="subcategories[]"
                            value="3"
                          />
                          <label>Sports</label>
                        </div>
                        <div className="checkbox">
                          <input
                            type="checkbox"
                            name="subcategories[]"
                            value="5"
                          />
                          <label>Supersports</label>
                        </div>
                        <div className="checkbox">
                          <input
                            type="checkbox"
                            name="subcategories[]"
                            value="2"
                          />
                          <label>Tourer</label>
                        </div>
                        <div className="checkbox">
                          <input
                            type="checkbox"
                            name="subcategories[]"
                            value="4"
                          />
                          <label>Cruiser</label>
                        </div>
                        <div className="checkbox">
                          <input
                            type="checkbox"
                            name="subcategories[]"
                            value="1"
                          />
                          <label>Road-Adventure</label>
                        </div>
                        <div className="checkbox">
                          <input
                            type="checkbox"
                            name="subcategories[]"
                            value="15"
                          />
                          <label>Adventure-Road</label>
                        </div>
                        <div className="checkbox">
                          <input
                            type="checkbox"
                            name="subcategories[]"
                            value="8"
                          />
                          <label>Adventure-Off-Road</label>
                        </div>
                        <div className="checkbox">
                          <input
                            type="checkbox"
                            name="subcategories[]"
                            value="21"
                          />
                          <label>Roadster</label>
                        </div>
                        <div className="checkbox">
                          <input
                            type="checkbox"
                            name="subcategories[]"
                            value="23"
                          />
                          <label>LAMS-Adventure</label>
                        </div>
                        <div className="checkbox">
                          <input
                            type="checkbox"
                            name="subcategories[]"
                            value="24"
                          />
                          <label>Scooters</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion js-accordion">
                    <div className="accordion-title js-accordion-title">
                      Price
                    </div>
                    <div className="accordion-content js-accordion-content">
                      <div className="dropdowns">
                        <div className="dropdown js-filters-dropdown">
                          <label>Minimum</label>
                          <select className="nice-select" name="price_min">
                            <option value="0">Any</option>
                            <option value="5000">$5,000</option>
                            <option value="10000">$10,000</option>
                            <option value="15000">$15,000</option>
                            <option value="20000">$20,000</option>
                            <option value="25000">$25,000</option>
                            <option value="27500">$27,500</option>
                            <option value="30000">$30,000</option>
                            <option value="35000">$35,000</option>
                            <option value="40000">$40,000</option>
                            <option value="45000">$45,000</option>
                            <option value="50000">$50,000</option>
                            <option value="55000">$55,000</option>
                            <option value="60000">$60,000</option>
                            <option value="65000">$65,000</option>
                            <option value="70000">$70,000</option>
                          </select>
                        </div>
                        <div className="dropdown js-filters-dropdown">
                          <label>Maximum</label>
                          <select className="nice-select" name="price_max">
                            <option value="0">Any</option>
                            <option value="5000">$5,000</option>
                            <option value="10000">$10,000</option>
                            <option value="15000">$15,000</option>
                            <option value="20000">$20,000</option>
                            <option value="25000">$25,000</option>
                            <option value="27500">$27,500</option>
                            <option value="30000">$30,000</option>
                            <option value="35000">$35,000</option>
                            <option value="40000">$40,000</option>
                            <option value="45000">$45,000</option>
                            <option value="50000">$50,000</option>
                            <option value="55000">$55,000</option>
                            <option value="60000">$60,000</option>
                            <option value="65000">$65,000</option>
                            <option value="70000">$70,000</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <input type="hidden" name="brand" value="2" />
                  <div className="accordion js-accordion">
                    <div className="accordion-title js-accordion-title">
                      Capacity
                    </div>
                    <div className="accordion-content js-accordion-content">
                      <div className="dropdowns">
                        <div className="dropdown js-filters-dropdown">
                          <label>Minimum</label>
                          <select className="nice-select" name="capacity_min">
                            <option value="0">Any</option>
                            <option value="50">50CC</option>
                            <option value="125">125CC</option>
                            <option value="250">250CC</option>
                            <option value="660">660CC</option>
                            <option value="1000">1000CC</option>
                            <option value="1250">1250CC</option>
                            <option value="1800">1800CC</option>
                            <option value="2500">2500CC</option>
                          </select>
                        </div>
                        <div className="dropdown js-filters-dropdown">
                          <label>Maximum</label>
                          <select className="nice-select" name="capacity_max">
                            <option value="0">Any</option>
                            <option value="50">50CC</option>
                            <option value="125">125CC</option>
                            <option value="250">250CC</option>
                            <option value="660">660CC</option>
                            <option value="1000">1000CC</option>
                            <option value="1250">1250CC</option>
                            <option value="1800">1800CC</option>
                            <option value="2500">2500CC</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion js-accordion">
                    <div className="accordion-title js-accordion-title">
                      Powertrain
                    </div>
                    <div className="accordion-content js-accordion-content">
                      <div className="checkboxes">
                        <div className="checkbox">
                          <input
                            type="checkbox"
                            name="powertrains[]"
                            value="petrol"
                          />
                          <label>Petrol</label>
                        </div>
                        <div className="checkbox">
                          <input
                            type="checkbox"
                            name="powertrains[]"
                            value="electric"
                          />
                          <label>Electric</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn-holder">
                    <button type="button" className="btn js-filters-toggle">
                      Filter
                    </button>
                  </div>
                </div>
                <div className="mobile-filters-toggle js-filters-toggle">
                  X Close
                </div>
              </form>
            </div>
            <div className="right">
              <div className="right-top">
                <div className="tags">
                  <div className="tag js-filters-tag" data-id="1">
                    <img
                      src="https://www.brisans.com.au/storage/app/media/icons/sale.svg"
                      alt="icons sale"
                    />
                    <span style={imageStyle2}>Sale</span>
                  </div>
                  <div className="tag js-filters-tag" data-id="2">
                    <img
                      src="https://www.brisans.com.au/storage/app/media/icons/runout.svg"
                      alt="icons runout"
                    />
                    <span style={imageStyle4}>Run-Out Sale</span>
                  </div>
                  <div className="tag js-filters-tag" data-id="3">
                    <img
                      src="https://www.brisans.com.au/storage/app/media/icons/calendar.svg"
                      alt="icons calendar"
                    />
                    <span style={imageStyle5}>Pre-Order</span>
                  </div>
                  <div className="tag js-filters-tag" data-id="4">
                    <img
                      src="https://www.brisans.com.au/storage/app/media/icons/lams.svg"
                      alt="icons lams"
                    />
                    <span style={imageStyle7}>LAMs</span>
                  </div>
                  <div className="tag js-filters-tag" data-id="5">
                    <img
                      src="https://www.brisans.com.au/storage/app/media/icons/finance.svg"
                      alt="icons finance"
                    />
                    <span style={imageStyle8}>Finance Offer</span>
                  </div>
                </div>
                <div className="sort">
                  <div className="dropdown js-filters-dropdown">
                    <label>Sort By</label>
                    <select className="nice-select js-filters-sort" name="sort">
                      <option value="sort_order-asc">Most Popular</option>
                      <option value="title-asc">
                        Alphabetical Order (a-z)
                      </option>
                      <option value="title-desc">
                        Alphabetical Order (z-a)
                      </option>
                      <option value="price-asc">Price (low-high)</option>
                      <option value="price-desc">Price (high-low)</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="results" id="results">
                <div className="bikes">
                  <div className="bikes-inner">
                    <div className="bike-listing has-bg-image">
                      <div className="listing-inner">
                        <div className="bg-image">
                          <img
                            loading="lazy"
                            src="https://www.brisans.com.au/storage/temp/public/62f/6b3/0aa/img_9a735db2e9f2f3c355ca6ae3502f728c_0_528_0_0_auto_webp_b17b4f4023180e8a2ba86caeaa52291280f41fbd__554.webp"
                            data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_9a735db2e9f2f3c355ca6ae3502f728c_0_528_0_0_auto.jpg"
                            style={imageStyle}
                            srcSet="https://www.brisans.com.au/storage/temp/public/62f/6b3/0aa/img_9a735db2e9f2f3c355ca6ae3502f728c_0_528_0_0_auto_webp_b17b4f4023180e8a2ba86caeaa52291280f41fbd__554.webp 554w, https://www.brisans.com.au/storage/temp/public/62f/6b3/0aa/img_9a735db2e9f2f3c355ca6ae3502f728c_0_528_0_0_auto_webp_b17b4f4023180e8a2ba86caeaa52291280f41fbd__400.webp 400w"
                            sizes="(max-width: 554px) 100vw, 554px"
                            alt="Action image of BMW S 1000 RR M-Sport in Light White Colourway, left three quarter long shot on race track"
                          />
                        </div>
                        <div className="text-top">
                          <h6>BMW Motorrad</h6>
                          <h2>S 1000 RR 2024</h2>
                          <h4>
                            <span>$27,980</span>
                          </h4>
                        </div>
                        <div className="image">
                          <img
                            loading="lazy"
                            src="https://www.brisans.com.au/storage/temp/public/bb3/22d/9a4/img_545530844f681ba31a6db31316b73d5c_342_0_0_0_auto_webp_1981b0cc4abe40ae979b039cc2d94bf1edbcf950__342.webp"
                            data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_545530844f681ba31a6db31316b73d5c_342_0_0_0_auto.jpg"
                            style={imageStyle}
                            srcSet="https://www.brisans.com.au/storage/temp/public/bb3/22d/9a4/img_545530844f681ba31a6db31316b73d5c_342_0_0_0_auto_webp_1981b0cc4abe40ae979b039cc2d94bf1edbcf950__342.webp 342w"
                            sizes="(max-width: 342px) 100vw, 342px"
                            alt="Studio image of BMW S 1000 RR sportsbike in Black Storm Metallic colourway, available at Brisan Motorcycles Newcastle"
                          />
                        </div>
                        <div className="text-bottom">
                          <div className="tags"></div>
                          <div className="more-colours">
                            More colours available
                          </div>
                        </div>
                        <a
                          href="https://www.brisans.com.au/new-bikes/bmw-motorrad/s-1000-rr-2024"
                          className="block-link"
                        >
                          S 1000 RR 2024
                        </a>
                      </div>
                    </div>
                    <div className="bike-listing has-bg-image">
                      <div className="listing-inner">
                        <div className="bg-image">
                          <img
                            loading="lazy"
                            src="https://www.brisans.com.au/storage/temp/public/62f/6b3/0aa/img_9a735db2e9f2f3c355ca6ae3502f728c_0_528_0_0_auto_webp_b17b4f4023180e8a2ba86caeaa52291280f41fbd__554.webp"
                            data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_9a735db2e9f2f3c355ca6ae3502f728c_0_528_0_0_auto.jpg"
                            style={imageStyle}
                            srcSet="https://www.brisans.com.au/storage/temp/public/62f/6b3/0aa/img_9a735db2e9f2f3c355ca6ae3502f728c_0_528_0_0_auto_webp_b17b4f4023180e8a2ba86caeaa52291280f41fbd__554.webp 554w, https://www.brisans.com.au/storage/temp/public/62f/6b3/0aa/img_9a735db2e9f2f3c355ca6ae3502f728c_0_528_0_0_auto_webp_b17b4f4023180e8a2ba86caeaa52291280f41fbd__400.webp 400w"
                            sizes="(max-width: 554px) 100vw, 554px"
                            alt="Action image of BMW S 1000 RR M-Sport in Light White Colourway, left three quarter long shot on race track"
                          />
                        </div>
                        <div className="text-top">
                          <h6>BMW Motorrad</h6>
                          <h2>S 1000 RR Sport 2024</h2>
                          <h4>
                            <span>$30,380</span>
                          </h4>
                        </div>
                        <div className="image">
                          <img
                            loading="lazy"
                            src="https://www.brisans.com.au/storage/temp/public/715/6cd/1cf/img_bda91a83611aa9e4895ae81d9a30188b_342_0_0_0_auto_webp_cce996cc490d21b0e667b4436a4af5f265eb8646__342.webp"
                            data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_bda91a83611aa9e4895ae81d9a30188b_342_0_0_0_auto.jpg"
                            style={imageStyle}
                            srcSet="https://www.brisans.com.au/storage/temp/public/715/6cd/1cf/img_bda91a83611aa9e4895ae81d9a30188b_342_0_0_0_auto_webp_cce996cc490d21b0e667b4436a4af5f265eb8646__342.webp 342w"
                            sizes="(max-width: 342px) 100vw, 342px"
                            alt="Studio image of BMW S 1000 RR sportsbike in Racing Red colourway, available at Brisan Motorcycles Newcastle"
                          />
                        </div>
                        <div className="text-bottom">
                          <div className="tags"></div>
                          <div className="more-colours">
                            More colours available
                          </div>
                        </div>
                        <a
                          href="https://www.brisans.com.au/new-bikes/bmw-motorrad/s-1000-rr-sport-2024"
                          className="block-link"
                        >
                          S 1000 RR Sport 2024
                        </a>
                      </div>
                    </div>
                    <div className="bike-listing has-bg-image">
                      <div className="listing-inner">
                        <div className="bg-image">
                          <img
                            loading="lazy"
                            src="https://www.brisans.com.au/storage/temp/public/62f/6b3/0aa/img_9a735db2e9f2f3c355ca6ae3502f728c_0_528_0_0_auto_webp_b17b4f4023180e8a2ba86caeaa52291280f41fbd__554.webp"
                            data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_9a735db2e9f2f3c355ca6ae3502f728c_0_528_0_0_auto.jpg"
                            style={imageStyle}
                            srcSet="https://www.brisans.com.au/storage/temp/public/62f/6b3/0aa/img_9a735db2e9f2f3c355ca6ae3502f728c_0_528_0_0_auto_webp_b17b4f4023180e8a2ba86caeaa52291280f41fbd__554.webp 554w, https://www.brisans.com.au/storage/temp/public/62f/6b3/0aa/img_9a735db2e9f2f3c355ca6ae3502f728c_0_528_0_0_auto_webp_b17b4f4023180e8a2ba86caeaa52291280f41fbd__400.webp 400w"
                            sizes="(max-width: 554px) 100vw, 554px"
                            alt="Action image of BMW S 1000 RR M-Sport in Light White Colourway, left three quarter long shot on race track"
                          />
                        </div>
                        <div className="text-top">
                          <h6>BMW Motorrad</h6>
                          <h2>S 1000 RR Race 2024</h2>
                          <h4>
                            <span>$34,190</span>
                          </h4>
                        </div>
                        <div className="image">
                          <img
                            loading="lazy"
                            src="https://www.brisans.com.au/storage/temp/public/bb3/22d/9a4/img_545530844f681ba31a6db31316b73d5c_342_0_0_0_auto_webp_1981b0cc4abe40ae979b039cc2d94bf1edbcf950__342.webp"
                            data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_545530844f681ba31a6db31316b73d5c_342_0_0_0_auto.jpg"
                            style={imageStyle}
                            srcSet="https://www.brisans.com.au/storage/temp/public/bb3/22d/9a4/img_545530844f681ba31a6db31316b73d5c_342_0_0_0_auto_webp_1981b0cc4abe40ae979b039cc2d94bf1edbcf950__342.webp 342w"
                            sizes="(max-width: 342px) 100vw, 342px"
                            alt="Studio image of BMW S 1000 RR sportsbike in Black Storm Metallic colourway, available at Brisan Motorcycles Newcastle"
                          />
                        </div>
                        <div className="text-bottom">
                          <div className="tags"></div>
                          <div className="more-colours">
                            More colours available
                          </div>
                        </div>
                        <a
                          href="https://www.brisans.com.au/new-bikes/bmw-motorrad/s-1000-rr-race-2024"
                          className="block-link"
                        >
                          S 1000 RR Race 2024
                        </a>
                      </div>
                    </div>
                    <div className="bike-listing has-bg-image">
                      <div className="listing-inner">
                        <div className="bg-image">
                          <img
                            loading="lazy"
                            src="https://www.brisans.com.au/storage/temp/public/62f/6b3/0aa/img_9a735db2e9f2f3c355ca6ae3502f728c_0_528_0_0_auto_webp_b17b4f4023180e8a2ba86caeaa52291280f41fbd__554.webp"
                            data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_9a735db2e9f2f3c355ca6ae3502f728c_0_528_0_0_auto.jpg"
                            style={imageStyle}
                            srcSet="https://www.brisans.com.au/storage/temp/public/62f/6b3/0aa/img_9a735db2e9f2f3c355ca6ae3502f728c_0_528_0_0_auto_webp_b17b4f4023180e8a2ba86caeaa52291280f41fbd__554.webp 554w, https://www.brisans.com.au/storage/temp/public/62f/6b3/0aa/img_9a735db2e9f2f3c355ca6ae3502f728c_0_528_0_0_auto_webp_b17b4f4023180e8a2ba86caeaa52291280f41fbd__400.webp 400w"
                            sizes="(max-width: 554px) 100vw, 554px"
                            alt="Action image of BMW S 1000 RR M-Sport in Light White Colourway, left three quarter long shot on race track"
                          />
                        </div>
                        <div className="text-top">
                          <h6>BMW Motorrad</h6>
                          <h2>S 1000 RR M-Sport 2024</h2>
                          <h4>
                            <span>$38,930</span>
                          </h4>
                        </div>
                        <div className="image">
                          <img
                            loading="lazy"
                            src="https://www.brisans.com.au/storage/temp/public/05b/610/341/img_5ca9e7e94b574d2f8703bd9dbc7b5637_342_0_0_0_auto_webp_3b76a982bb2dcc4ecb321894e4edb59b9a48bb4a__342.webp"
                            data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_5ca9e7e94b574d2f8703bd9dbc7b5637_342_0_0_0_auto.jpg"
                            style={imageStyle}
                            srcSet="https://www.brisans.com.au/storage/temp/public/05b/610/341/img_5ca9e7e94b574d2f8703bd9dbc7b5637_342_0_0_0_auto_webp_3b76a982bb2dcc4ecb321894e4edb59b9a48bb4a__342.webp 342w"
                            sizes="(max-width: 342px) 100vw, 342px"
                            alt="BMW S 1000 RR sportsbike Tricolour Brisan Motorcycles Newcastle"
                          />
                        </div>
                        <div className="text-bottom">
                          <div className="tags"></div>
                        </div>
                        <a
                          href="https://www.brisans.com.au/new-bikes/bmw-motorrad/s-1000-rr-m-sport-2024"
                          className="block-link"
                        >
                          S 1000 RR M-Sport 2024
                        </a>
                      </div>
                    </div>
                    <div className="bike-listing has-bg-image">
                      <div className="listing-inner">
                        <div className="text-top">
                          <h6>BMW Motorrad</h6>
                          <h2>R 1250 RS 2023</h2>
                          <h4>
                            <span className="strikethrough">$24,890</span>{" "}
                            <span>$23,390</span>
                          </h4>
                        </div>
                        <div className="image">
                          <img
                            loading="lazy"
                            src="https://www.brisans.com.au/storage/temp/public/88b/c72/ab8/img_bfc79dc09b267eeb3b22aa9169e54600_342_0_0_0_auto_webp_186a0733643ffeecf76d90fbb25f25c3500a532d__342.webp"
                            data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_bfc79dc09b267eeb3b22aa9169e54600_342_0_0_0_auto.jpg"
                            style={imageStyle}
                            srcSet="https://www.brisans.com.au/storage/temp/public/88b/c72/ab8/img_bfc79dc09b267eeb3b22aa9169e54600_342_0_0_0_auto_webp_186a0733643ffeecf76d90fbb25f25c3500a532d__342.webp 342w"
                            sizes="(max-width: 342px) 100vw, 342px"
                            alt="2023-Models BMW-Motorrad R-1250-RS-White"
                          />
                        </div>
                        <div className="text-bottom">
                          <div className="tags">
                            <div className="tag" title="Sale">
                              <img
                                src="https://www.brisans.com.au/storage/app/media/icons/sale.svg"
                                alt="icons sale"
                              />
                            </div>
                            <div className="tag" title="Run-Out Sale">
                              <img
                                src="https://www.brisans.com.au/storage/app/media/icons/runout.svg"
                                alt="icons runout"
                              />
                            </div>
                          </div>
                        </div>
                        <a
                          href="https://www.brisans.com.au/new-bikes/bmw-motorrad/r-1250-rs-2023"
                          className="block-link"
                        >
                          R 1250 RS 2023
                        </a>
                      </div>
                    </div>
                    <div className="bike-listing has-bg-image">
                      <div className="listing-inner">
                        <div className="text-top">
                          <h6>BMW Motorrad</h6>
                          <h2>R 1250 RS Sport 2023</h2>
                          <h4>
                            <span className="strikethrough">$29,590</span>{" "}
                            <span>$28,090</span>
                          </h4>
                        </div>
                        <div className="image">
                          <img
                            loading="lazy"
                            src="https://www.brisans.com.au/storage/temp/public/150/22e/d7c/img_b3a978e409e083e0fd69c581b2c081b5_342_0_0_0_auto_webp_893e28cf5aefecf7130d03b1a9dced4667fcc594__342.webp"
                            data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_b3a978e409e083e0fd69c581b2c081b5_342_0_0_0_auto.jpg"
                            style={imageStyle}
                            srcSet="https://www.brisans.com.au/storage/temp/public/150/22e/d7c/img_b3a978e409e083e0fd69c581b2c081b5_342_0_0_0_auto_webp_893e28cf5aefecf7130d03b1a9dced4667fcc594__342.webp 342w"
                            sizes="(max-width: 342px) 100vw, 342px"
                            alt="2023-Models BMW-Motorrad R-1250-RS-Sport"
                          />
                        </div>
                        <div className="text-bottom">
                          <div className="tags">
                            <div className="tag" title="Sale">
                              <img
                                src="https://www.brisans.com.au/storage/app/media/icons/sale.svg"
                                alt="icons sale"
                              />
                            </div>
                            <div className="tag" title="Run-Out Sale">
                              <img
                                src="https://www.brisans.com.au/storage/app/media/icons/runout.svg"
                                alt="icons runout"
                              />
                            </div>
                          </div>
                        </div>
                        <a
                          href="https://www.brisans.com.au/new-bikes/bmw-motorrad/r-1250-rs-sport-2023"
                          className="block-link"
                        >
                          R 1250 RS Sport 2023
                        </a>
                      </div>
                    </div>
                    <div className="bike-listing has-bg-image">
                      <div className="listing-inner">
                        <div className="text-top">
                          <h6>BMW Motorrad</h6>
                          <h2>R 1250 RS Triple Black 2023</h2>
                          <h4>
                            <span className="strikethrough">$29,790</span>{" "}
                            <span>$28,290</span>
                          </h4>
                        </div>
                        <div className="image">
                          <img
                            loading="lazy"
                            src="https://www.brisans.com.au/storage/temp/public/9bd/02e/538/img_26542394777733bc84e232cede8e8c67_342_0_0_0_auto_webp_8930e66fa645cec3b5131fc145a5bce42128b976__342.webp"
                            data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_26542394777733bc84e232cede8e8c67_342_0_0_0_auto.jpg"
                            style={imageStyle}
                            srcSet="https://www.brisans.com.au/storage/temp/public/9bd/02e/538/img_26542394777733bc84e232cede8e8c67_342_0_0_0_auto_webp_8930e66fa645cec3b5131fc145a5bce42128b976__342.webp 342w"
                            sizes="(max-width: 342px) 100vw, 342px"
                            alt="2023-Models BMW-Motorrad R-1250-RS-Triple-Black"
                          />
                        </div>
                        <div className="text-bottom">
                          <div className="tags">
                            <div className="tag" title="Sale">
                              <img
                                src="https://www.brisans.com.au/storage/app/media/icons/sale.svg"
                                alt="icons sale"
                              />
                            </div>
                            <div className="tag" title="Run-Out Sale">
                              <img
                                src="https://www.brisans.com.au/storage/app/media/icons/runout.svg"
                                alt="icons runout"
                              />
                            </div>
                          </div>
                        </div>
                        <a
                          href="https://www.brisans.com.au/new-bikes/bmw-motorrad/r-1250-rs-triple-black-2023"
                          className="block-link"
                        >
                          R 1250 RS Triple Black 2023
                        </a>
                      </div>
                    </div>
                    <div className="bike-listing has-bg-image">
                      <div className="listing-inner">
                        <div className="text-top">
                          <h6>BMW Motorrad</h6>
                          <h2>R 1250 RS 2024</h2>
                          <h4>
                            <span>$25,190</span>
                          </h4>
                        </div>
                        <div className="image">
                          <img
                            loading="lazy"
                            src="https://www.brisans.com.au/storage/temp/public/88b/c72/ab8/img_bfc79dc09b267eeb3b22aa9169e54600_342_0_0_0_auto_webp_186a0733643ffeecf76d90fbb25f25c3500a532d__342.webp"
                            data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_bfc79dc09b267eeb3b22aa9169e54600_342_0_0_0_auto.jpg"
                            style={imageStyle}
                            srcSet="https://www.brisans.com.au/storage/temp/public/88b/c72/ab8/img_bfc79dc09b267eeb3b22aa9169e54600_342_0_0_0_auto_webp_186a0733643ffeecf76d90fbb25f25c3500a532d__342.webp 342w"
                            sizes="(max-width: 342px) 100vw, 342px"
                            alt="2023-Models BMW-Motorrad R-1250-RS-White"
                          />
                        </div>
                        <div className="text-bottom">
                          <div className="tags"></div>
                        </div>
                        <a
                          href="https://www.brisans.com.au/new-bikes/bmw-motorrad/r-1250-rs-2024"
                          className="block-link"
                        >
                          R 1250 RS 2024
                        </a>
                      </div>
                    </div>
                    <div className="bike-listing has-bg-image">
                      <div className="listing-inner">
                        <div className="text-top">
                          <h6>BMW Motorrad</h6>
                          <h2>R 1250 RS Sport 2024</h2>
                          <h4>
                            <span>$29,870</span>
                          </h4>
                        </div>
                        <div className="image">
                          <img
                            loading="lazy"
                            src="https://www.brisans.com.au/storage/temp/public/150/22e/d7c/img_b3a978e409e083e0fd69c581b2c081b5_342_0_0_0_auto_webp_893e28cf5aefecf7130d03b1a9dced4667fcc594__342.webp"
                            data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_b3a978e409e083e0fd69c581b2c081b5_342_0_0_0_auto.jpg"
                            style={imageStyle}
                            srcSet="https://www.brisans.com.au/storage/temp/public/150/22e/d7c/img_b3a978e409e083e0fd69c581b2c081b5_342_0_0_0_auto_webp_893e28cf5aefecf7130d03b1a9dced4667fcc594__342.webp 342w"
                            sizes="(max-width: 342px) 100vw, 342px"
                            alt="2023-Models BMW-Motorrad R-1250-RS-Sport"
                          />
                        </div>
                        <div className="text-bottom">
                          <div className="tags"></div>
                        </div>
                        <a
                          href="https://www.brisans.com.au/new-bikes/bmw-motorrad/r-1250-rs-sport-2024"
                          className="block-link"
                        >
                          R 1250 RS Sport 2024
                        </a>
                      </div>
                    </div>
                    <div className="bike-listing has-bg-image">
                      <div className="listing-inner">
                        <div className="text-top">
                          <h6>BMW Motorrad</h6>
                          <h2>R 1250 RS Triple Black 2024</h2>
                          <h4>
                            <span>$30,110</span>
                          </h4>
                        </div>
                        <div className="image">
                          <img
                            loading="lazy"
                            src="https://www.brisans.com.au/storage/temp/public/9bd/02e/538/img_26542394777733bc84e232cede8e8c67_342_0_0_0_auto_webp_8930e66fa645cec3b5131fc145a5bce42128b976__342.webp"
                            data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_26542394777733bc84e232cede8e8c67_342_0_0_0_auto.jpg"
                            style={imageStyle}
                            srcSet="https://www.brisans.com.au/storage/temp/public/9bd/02e/538/img_26542394777733bc84e232cede8e8c67_342_0_0_0_auto_webp_8930e66fa645cec3b5131fc145a5bce42128b976__342.webp 342w"
                            sizes="(max-width: 342px) 100vw, 342px"
                            alt="2023-Models BMW-Motorrad R-1250-RS-Triple-Black"
                          />
                        </div>
                        <div className="text-bottom">
                          <div className="tags"></div>
                        </div>
                        <a
                          href="https://www.brisans.com.au/new-bikes/bmw-motorrad/r-1250-rs-triple-black-2024"
                          className="block-link"
                        >
                          R 1250 RS Triple Black 2024
                        </a>
                      </div>
                    </div>
                    <div className="bike-listing has-bg-image">
                      <div className="listing-inner">
                        <div className="text-top">
                          <h6>BMW Motorrad</h6>
                          <h2>M 1000 RR 2023</h2>
                          <h4>
                            <span>$55,510</span>
                          </h4>
                        </div>
                        <div className="image">
                          <img
                            loading="lazy"
                            src="https://www.brisans.com.au/storage/temp/public/1cb/d04/4fd/img_1145214da6f0ade47ad2eddddcb56483_342_0_0_0_auto_webp_73627a882f3a8aeb84dcfb096eff70a2fe85d527__342.webp"
                            data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_1145214da6f0ade47ad2eddddcb56483_342_0_0_0_auto.jpg"
                            style={imageStyle}
                            srcSet="https://www.brisans.com.au/storage/temp/public/1cb/d04/4fd/img_1145214da6f0ade47ad2eddddcb56483_342_0_0_0_auto_webp_73627a882f3a8aeb84dcfb096eff70a2fe85d527__342.webp 342w"
                            sizes="(max-width: 342px) 100vw, 342px"
                            alt="2023-Models BMW-Motorrad M-1000-RR-White"
                          />
                        </div>
                        <div className="text-bottom">
                          <div className="tags"></div>
                        </div>
                        <a
                          href="https://www.brisans.com.au/new-bikes/bmw-motorrad/m-1000-rr-2023"
                          className="block-link"
                        >
                          M 1000 RR 2023
                        </a>
                      </div>
                    </div>
                    <div className="bike-listing has-bg-image">
                      <div className="listing-inner">
                        <div className="text-top">
                          <h6>BMW Motorrad</h6>
                          <h2>M 1000 RR Competition Package 2023</h2>
                          <h4>
                            <span>$63,440</span>
                          </h4>
                        </div>
                        <div className="image">
                          <img
                            loading="lazy"
                            src="https://www.brisans.com.au/storage/temp/public/18d/9d1/132/img_1589a180d8de98787b2bc804c7dca28d_342_0_0_0_auto_webp_a9f0feeb0f05fe8d58102b24db17a25355ce1201__342.webp"
                            data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_1589a180d8de98787b2bc804c7dca28d_342_0_0_0_auto.jpg"
                            style={imageStyle}
                            srcSet="https://www.brisans.com.au/storage/temp/public/18d/9d1/132/img_1589a180d8de98787b2bc804c7dca28d_342_0_0_0_auto_webp_a9f0feeb0f05fe8d58102b24db17a25355ce1201__342.webp 342w"
                            sizes="(max-width: 342px) 100vw, 342px"
                            alt="2023-Models BMW-Motorrad M-1000-RR-Black"
                          />
                        </div>
                        <div className="text-bottom">
                          <div className="tags"></div>
                        </div>
                        <a
                          href="https://www.brisans.com.au/new-bikes/bmw-motorrad/m-1000-rr-competition-package-2023"
                          className="block-link"
                        >
                          M 1000 RR Competition Package 2023
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* pagination  */}

                <div
                  className="pagination-holder js-pagination"
                  data-form=".js-filters-form"
                >
                  <nav>
                    <ul className="pagination">
                      <li
                        className="page-item disabled"
                        aria-disabled="true"
                        aria-label="pagination.previous"
                      >
                        <span className="page-link" aria-hidden="true">
                          &lsaquo;
                        </span>
                      </li>

                      <li className="page-item active" aria-current="page">
                        <span className="page-link">1</span>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/?page=2">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/?page=3">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/?page=4">
                          4
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/?page=5">
                          5
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/?page=6">
                          6
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/?page=7">
                          7
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/?page=8">
                          8
                        </a>
                      </li>

                      <li className="page-item disabled" aria-disabled="true">
                        <span className="page-link">...</span>
                      </li>

                      <li className="page-item">
                        <a className="page-link" href="/?page=12">
                          12
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/?page=13">
                          13
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link"
                          href="/?page=2"
                          rel="next"
                          aria-label="pagination.next"
                        >
                          &rsaquo;
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="module-accordions module-padding bg-navy">
        <div className="container">
          <div className="left" data-aos="fade-right">
            <h6>Brisan Motorcycles Newcastle</h6>
            <h2 className="h1">Choose BMW Motorrad</h2>
          </div>
          <div className="right" data-aos="fade-up">
            <div className="accordion js-accordion" data-starts-open>
              <div className="accordion-title js-accordion-title">
                5 Year Warranty
              </div>
              <div className="accordion-content js-accordion-content">
                <div className="copy">
                  <div dir="auto">
                    BMW Motorrad takes warranty coverage to the next level,
                    providing 5 years of cover from your date of delivery at
                    Brisan Motorcycles for all new BMW motorcycles – providing
                    free repair or replacement services should a technical
                    defect arise.
                  </div>
                  <ul>
                    <li>
                      <div dir="auto">
                        <img
                          height="16"
                          width="16"
                          alt="5️⃣"
                          src="https://www.brisans.com.au/storage/temp/public/7b5/d2c/829/1702432799409__16.jpeg"
                          className="fr-fic fr-dii"
                          data-result="success"
                          draggable="false"
                          srcSet="https://www.brisans.com.au/storage/temp/public/7b5/d2c/829/1702432799409__16.jpeg 16w"
                          sizes="(max-width: 16px) 100vw, 16px"
                        />
                        &nbsp;years repairs
                      </div>
                    </li>
                    <li>
                      <div dir="auto">
                        <img
                          height="16"
                          width="16"
                          alt="🌏"
                          src="https://www.brisans.com.au/storage/temp/public/c3a/ab3/bf2/1702432799376__16.jpeg"
                          className="fr-fic fr-dii"
                          data-result="success"
                          draggable="false"
                          srcSet="https://www.brisans.com.au/storage/temp/public/c3a/ab3/bf2/1702432799376__16.jpeg 16w"
                          sizes="(max-width: 16px) 100vw, 16px"
                        />
                        Valid worldwide
                      </div>
                    </li>
                    <li>
                      <div dir="auto">
                        <img
                          height="16"
                          width="16"
                          alt="❗️"
                          src="https://www.brisans.com.au/storage/temp/public/518/d28/769/1702432799270__16.jpeg"
                          className="fr-fic fr-dii"
                          data-result="success"
                          draggable="false"
                          srcSet="https://www.brisans.com.au/storage/temp/public/518/d28/769/1702432799270__16.jpeg 16w"
                          sizes="(max-width: 16px) 100vw, 16px"
                        />
                        No mileage limit
                      </div>
                    </li>
                    <li>
                      <div dir="auto">
                        <a tabIndex="-1" draggable="false"></a>
                        <img
                          height="16"
                          width="16"
                          alt="🛠"
                          src="https://www.brisans.com.au/storage/temp/public/32d/309/ddf/1702432799329__16.jpeg"
                          className="fr-fic fr-dii"
                          data-result="success"
                          draggable="false"
                          srcSet="https://www.brisans.com.au/storage/temp/public/32d/309/ddf/1702432799329__16.jpeg 16w"
                          sizes="(max-width: 16px) 100vw, 16px"
                        />
                        All repairs done using original BMW Motorrad parts
                      </div>
                    </li>
                  </ul>
                  <figure data-label="5-year-warranty-sq-video.mp4">
                    <span
                      className="fr-video fr-dvi fr-draggable"
                      // contentEditable="false"
                    >
                      <video
                        controls=""
                        height="320"
                        src="https://www.brisans.com.au/storage/app/media/Brands-Content/BMW-Motorrad/5-year-warranty-sq-video.mp4"
                        width="320"
                      >
                        <br />
                      </video>
                    </span>
                  </figure>
                </div>
              </div>
            </div>
            <div className="accordion js-accordion">
              <div className="accordion-title js-accordion-title">
                Service Inclusive Packages
              </div>
              <div className="accordion-content js-accordion-content">
                <div className="copy">
                  <p style={imageStyle9}>
                    Have you ever wanted to just ride and not worry about when
                    to Service your Motorcycle?
                  </p>
                  <p>
                    Brisans can now take care of this for you when you purchase
                    a selected Oil Inclusive or Service Inclusive package.
                    Maximise your riding enjoyment, and leave your servicing
                    concerns in the capable hands of our authorised BMW Motorrad
                    technicians.
                  </p>
                  <ul>
                    <li>3-year/30,000km and 5-year/50,000km options</li>
                    <li>
                      Oil Inclusive
                      <ul>
                        <li>Engine oil service</li>
                        <li>Oil filter change</li>
                      </ul>
                    </li>
                    <li>
                      Service Inclusive
                      <ul>
                        <li>Engine oil service</li>
                        <li>Oil filter change</li>
                        <li>First-check (1,000km)</li>
                        <li>Valve clearance check</li>
                        <li>Fork oil change</li>
                        <li>Gearbox oil change</li>
                        <li>Spark plug replacement</li>
                        <li>Brake fluid</li>
                        <li>Air filter change</li>
                        <li>CVT belt replacement</li>
                        <li>Fuel filter change</li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    <br />
                  </p>
                  <p>
                    All maintenance work includes BMW Motorrad original
                    replacement parts. *Some services do not apply to all
                    motorcycles.
                  </p>
                  <p>
                    <img
                      src="https://www.brisans.com.au/storage/temp/public/a96/0a0/d7c/advantec-1-1080x1080-0-0-0-0-1702434070__320.png"
                      style={imageStyle10}
                      className="fr-fic fr-dib"
                      draggable="false"
                      srcSet="https://www.brisans.com.au/storage/temp/public/a96/0a0/d7c/advantec-1-1080x1080-0-0-0-0-1702434070__320.png 320w"
                      sizes="(max-width: 320px) 100vw, 320px"
                    />
                    &nbsp;
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion js-accordion">
              <div className="accordion-title js-accordion-title">
                24/7 Roadside Assist
              </div>
              <div className="accordion-content js-accordion-content">
                <div className="copy">
                  <p>
                    Included in the first three years of new bike ownership from
                    the date of first registration at Brisan Motorcycles, you
                    can ride your BMW motorcycle across the length and breadth
                    of Australia, secure in the knowledge that BMW Motorcycle
                    Roadside Assistance will be with you every step of the way.
                  </p>
                  <ul>
                    <li>CALL 1800 808 111</li>
                    <li>National Support 24 Hours a day, 365 days a year</li>
                  </ul>
                  <p>
                    &nbsp;
                    <img
                      src="https://www.brisans.com.au/storage/temp/public/250/46a/18b/roadsideassistance-whitetext-0-0-0-0-1702434140__320.png"
                      style={imageStyle10}
                      className="fr-fic fr-dib"
                      draggable="false"
                      srcSet="https://www.brisans.com.au/storage/temp/public/250/46a/18b/roadsideassistance-whitetext-0-0-0-0-1702434140__320.png 320w"
                      sizes="(max-width: 320px) 100vw, 320px"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="module-copy-plus-fading-bg module-cta-plus-brands module-brands-plus-links js-cta-plus-brands">
        <div className="background js-cta-background">
          <div className="sticky">
            <div className="bg-image">
              <img
                loading="lazy"
                src="https://www.brisans.com.au/storage/temp/public/a9f/3b1/9b9/img_d5ce3ab01164c66aece9a11beabd815a_2000_0_0_0_auto_webp_6b1f8acf32f1b4ef74f4b944d4dd8db19025d3fb__2000.webp"
                data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_d5ce3ab01164c66aece9a11beabd815a_2000_0_0_0_auto.jpg"
                style={imageStyle3}
                srcSet="https://www.brisans.com.au/storage/temp/public/a9f/3b1/9b9/img_d5ce3ab01164c66aece9a11beabd815a_2000_0_0_0_auto_webp_6b1f8acf32f1b4ef74f4b944d4dd8db19025d3fb__2000.webp 2000w, https://www.brisans.com.au/storage/temp/public/a9f/3b1/9b9/img_d5ce3ab01164c66aece9a11beabd815a_2000_0_0_0_auto_webp_6b1f8acf32f1b4ef74f4b944d4dd8db19025d3fb__400.webp 400w, https://www.brisans.com.au/storage/temp/public/a9f/3b1/9b9/img_d5ce3ab01164c66aece9a11beabd815a_2000_0_0_0_auto_webp_6b1f8acf32f1b4ef74f4b944d4dd8db19025d3fb__768.webp 768w, https://www.brisans.com.au/storage/temp/public/a9f/3b1/9b9/img_d5ce3ab01164c66aece9a11beabd815a_2000_0_0_0_auto_webp_6b1f8acf32f1b4ef74f4b944d4dd8db19025d3fb__1024.webp 1024w"
                sizes="(max-width: 2000px) 100vw, 2000px"
                alt="Subcategories Road-Supersport-Subcat"
              />
            </div>
          </div>
        </div>
        <div className="overlay overlay1 js-cta-overlay1"></div>
        <div className="overlay overlay2 js-cta-overlay2"></div>
        <div className="spacer"></div>
        <div className="cta">
          <div className="container">
            <div className="text" data-aos="fade-up">
              <h6>
                Brisan Motorcycles is your one-stop shop for the latest BMW
                motorcycle models.
              </h6>
              <h2 className="h1">BMW Motorcycles Newcastle</h2>
              <div className="copy">
                <h2>
                  Brisans is proud to offer a wide range of BMW motorcycles that
                  are designed to deliver top-notch performance, style, and
                  comfort for riders of all skill levels.
                </h2>
                <p>
                  From the sleek and sporty S 1000 RR to the versatile and
                  adventure-ready R 1300 GS, learner approved G 310 R and G 310
                  GS, the petrol-powered range of C 400 scooters or the new CE
                  04 electric scooter, our BMW motorcycle lineup offers
                  something for everyone. Heres a closer look at some of our top
                  models:
                </p>
                <h3>S 1000 RR:</h3>
                <p>
                  This high-performance sportbike features a powerful 999cc
                  engine, dynamic traction control, and cutting-edge electronics
                  for an unrivaled riding experience. With its lightweight
                  design and aggressive styling, the S 1000 RR is the perfect
                  choice for riders who demand nothing but the best.
                </p>
                <h3>R 1300 GS:</h3>
                <p>
                  The ultimate adventure bike, the R 1300 GS is built to take on
                  any terrain and any challenge. With a powerful 1300cc engine,
                  electronic suspension, and advanced riding modes, this bike
                  delivers unparalleled versatility and performance. Whether
                  youre cruising on the highway or exploring off-road trails,
                  the R 1300 GS is the perfect companion for your next
                  adventure.
                </p>
                <h3>R nineT:</h3>
                <p>
                  A classic bike with a modern twist, the R nineT combines retro
                  styling with modern technology for a unique and unforgettable
                  riding experience. With its air-cooled flat twin engine,
                  high-quality materials, and customizable design, the R nineT
                  is the perfect choice for riders who want a bike thats as
                  unique as they are.
                </p>
                <h3>F 750 GS:</h3>
                <p>
                  This versatile and agile adventure bike is designed for riders
                  who demand the perfect balance of power, comfort, and agility.
                  With a 853cc engine, adjustable suspension, and advanced
                  riding modes, the F 750 GS is the perfect choice for riders
                  who want to explore new roads and push their limits.
                </p>
                <p>
                  These are just a few of the many BMW motorcycle models
                  available at Brisan Motorcycles. To learn more about our BMW
                  lineup, including detailed descriptions and specifications,
                  please visit our website or stop by our dealership to speak
                  with one of our knowledgeable sales representatives. Were
                  committed to helping you find the perfect BMW motorcycle for
                  your riding style and preferences, and we look forward to
                  serving you soon!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="module-customer-reviews js-reviews-slider-container">
        <div className="top">
          <div className="container">
            <div className="flex">
              <h6>BMW Motorrad Newcastle Reviews</h6>
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
        <div className="slider-container">
          <div className="slider js-reviews-slider">
            <div className="slide">
              <div className="inner">
                <div className="image-cover">
                  <img
                    loading="lazy"
                    src="https://localcoders.blob.core.windows.net/social/608b015c-a3f1-4f74-8349-d5f800679408.jpg           "
                    alt="Review - Steven - Merewether"
                  />
                  /<div className="date">This month</div>
                </div>
                <div className="text">
                  <div className="rating">
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                  </div>
                  <div className="copy">
                    I can&#039;t thank and commend Nick enough for his wonderful
                    service and fantastic manner with the purchase of my new BMW
                    scooter. Nick made everything go smoothly and was a pleasure
                    to deal with as did others at Brisans who were part of the
                    experience. This is the second bike I have bought from
                    Brisans and I would rate them the number one motorbike
                    dealer in our region. Thanks again Nick for all your efforts
                    and ease to work with!
                  </div>
                  <div className="details">
                    <div className="author">
                      <strong>Steven</strong> - Merewether
                    </div>
                    <div className="salesperson">
                      assisted by Nicholas Hawkins
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="inner">
                <div className="image-cover">
                  <img
                    loading="lazy"
                    src="https://localcoders.blob.core.windows.net/social/e69322c5-5aff-45ac-b0f6-6394816a2ff0.jpg           "
                    alt="Review - Dr Vincent - Balgowlah"
                  />
                  <div className="date">This month</div>
                </div>
                <div className="text">
                  <div className="rating">
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                  </div>
                  <div className="copy">
                    Carlos and Carmel came through! Last one available &amp; my
                    first adventure bike. Picked up late Friday, in Noosa Sunday
                    afternoon. A 900km run. Beautiful.
                  </div>
                  <div className="details">
                    <div className="author">
                      <strong>Dr Vincent</strong> - Balgowlah
                    </div>
                    <div className="salesperson">
                      assisted by Carlos Machado
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="inner">
                <div className="image-cover">
                  <img
                    loading="lazy"
                    src="https://localcoders.blob.core.windows.net/social/99a6f09b-8662-4a3d-a45c-506079537719.jpg           "
                    alt="Review - Antony - Lemon Tree Passage"
                  />
                  <div className="date">This month</div>
                </div>
                <div className="text">
                  <div className="rating">
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                  </div>
                  <div className="copy">
                    Robbie was very good to deal with, very helpfull from start
                    to finish, hassle free buying
                  </div>
                  <div className="details">
                    <div className="author">
                      <strong>Antony</strong> - Lemon Tree Passage
                    </div>
                    <div className="salesperson">
                      assisted by Robbie Stephenson
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="inner">
                <div className="image-cover">
                  <img
                    loading="lazy"
                    src="https://localcoders.blob.core.windows.net/social/daf79470-2053-4d4b-8bc3-7e3b620a6fd9.jpg           "
                    alt="Review - Daniel - Point Clare"
                  />
                  <div className="date">Last month</div>
                </div>
                <div className="text">
                  <div className="rating">
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-grey.svg"
                      alt="Star"
                    />
                  </div>
                  <div className="copy">
                    Thanks to Nick for sorting things out with my New S1000 XR.
                    A small issue with freight that Nick sorted out prior to
                    delivery which im very thankful for..
                  </div>
                  <div className="details">
                    <div className="author">
                      <strong>Daniel</strong> - Point Clare
                    </div>
                    <div className="salesperson">
                      assisted by Nicholas Hawkins
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="inner">
                <div className="image-cover">
                  <img
                    loading="lazy"
                    src="https://localcoders.blob.core.windows.net/social/d595ff8c-b469-4a2c-8309-0c1499de9971.jpg           "
                    alt="Review - Bruce - Kahibah"
                  />
                  <div className="date">November 2023</div>
                </div>
                <div className="text">
                  <div className="rating">
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                  </div>
                  <div className="copy">
                    Cheers Brisans. Professional, experienced, friendly, helpful
                    information from Kayne made the transaction easy and
                    relaxed, everything explained and sorted, no probs.
                  </div>
                  <div className="details">
                    <div className="author">
                      <strong>Bruce</strong> - Kahibah
                    </div>
                    <div className="salesperson">
                      assisted by Kayne Gasbarri
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="inner">
                <div className="image-cover">
                  <img
                    loading="lazy"
                    src="https://localcoders.blob.core.windows.net/social/78d9d6d0-1c0e-4e31-8eea-fdfa0d9f71c1.jpg           "
                    alt="Review - Clive - East Maitland"
                  />
                  <div className="date">November 2023</div>
                </div>
                <div className="text">
                  <div className="rating">
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                  </div>
                  <div className="copy"></div>
                  <div className="details">
                    <div className="author">
                      <strong>Clive</strong> - East Maitland
                    </div>
                    <div className="salesperson">
                      assisted by Kayne Gasbarri
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="inner">
                <div className="image-cover">
                  <img
                    loading="lazy"
                    src="https://localcoders.blob.core.windows.net/social/630f7335-dd8d-4db4-b7f0-af63e8d071b8.jpg           "
                    alt="Review - Carl - Warners Bay"
                  />
                  <div className="date">November 2023</div>
                </div>
                <div className="text">
                  <div className="rating">
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                  </div>
                  <div className="copy">
                    Nick was great, got everything sorted quickly and answered
                    all my questions. Very professional all round
                  </div>
                  <div className="details">
                    <div className="author">
                      <strong>Carl</strong> - Warners Bay
                    </div>
                    <div className="salesperson">
                      assisted by Nicholas Hawkins
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="inner">
                <div className="image-cover">
                  <img
                    loading="lazy"
                    src="https://localcoders.blob.core.windows.net/social/bcc9d9ea-7b14-471f-b2d3-5093a788907c.jpg           "
                    alt="Review - Darcy - North Rothbury"
                  />
                  <div className="date">September 2023</div>
                </div>
                <div className="text">
                  <div className="rating">
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                  </div>
                  <div className="copy">
                    Kayne Was exceptional great to deal with, Definitely knows
                    what he is selling, Would recommend
                  </div>
                  <div className="details">
                    <div className="author">
                      <strong>Darcy</strong> - North Rothbury
                    </div>
                    <div className="salesperson">
                      assisted by Kayne Gasbarri
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="inner">
                <div className="image-cover">
                  <img
                    loading="lazy"
                    src="https://localcoders.blob.core.windows.net/social/3e4f1bb7-1866-4304-9f90-95d97c421a1e.jpg           "
                    alt="Review - Brandon - Wentworth Point"
                  />
                  <div className="date">June 2023</div>
                </div>
                <div className="text">
                  <div className="rating">
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                  </div>
                  <div className="copy">
                    Kanye is an absolute lord. He got me on the bike much sooner
                    than I expected. Highly recommend this guy if you’re looking
                    for a bike.
                  </div>
                  <div className="details">
                    <div className="author">
                      <strong>Brandon</strong> - Wentworth Point
                    </div>
                    <div className="salesperson">
                      assisted by Kayne Gasbarri
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="inner">
                <div className="image-cover">
                  <img
                    loading="lazy"
                    src="https://localcoders.blob.core.windows.net/social/34767cb0-d78c-49fc-b867-ac1ff4fa166f.jpg           "
                    alt="Review - Philip - Pelaw Main"
                  />
                  <div className="date">June 2023</div>
                </div>
                <div className="text">
                  <div className="rating">
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                    <img
                      src="https://www.brisans.com.au/themes/zimple/assets/images/star-blue.svg"
                      alt="Star"
                    />
                  </div>
                  <div className="copy">
                    It was a very smooth experience. I walked in not really
                    knowing what I wanted and the sales team were very patient
                    with me and gave me numerous choices and test rides with no
                    pressure to make a purchase or decision. The bike was
                    delivered smoothly and can highly recommend Brisans for your
                    next bike.
                  </div>
                  <div className="details">
                    <div className="author">
                      <strong>Philip</strong> - Pelaw Main
                    </div>
                    <div className="salesperson">
                      assisted by Kayne Gasbarri
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content2;
