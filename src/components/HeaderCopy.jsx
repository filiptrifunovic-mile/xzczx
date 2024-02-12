const HeaderCopy = () => {
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

  return (
    <header>
      <nav className="navbar js-navigation">
        <div className="container">
          <a href="tel:02 4940 8777" className="mobile-phone">
            Call
          </a>
          <a className="navbar-brand" href="/">
            <img
              className="img-fluid"
              // src="https://www.brisans.com.au/storage/app/media/logos/logo.svg"
              // style={{ width: "200px" }}
              src="/public/logo3.png"
              alt="logos logo"
            />
          </a>
          <button className="navbar-toggle js-navbar-toggle" type="button">
            <span className="navbar-toggle-icon"></span>
          </button>
          <div className="navbar-menu">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="https://www.brisans.com.au/about">
                  <span className="img">
                    <img
                      src="https://www.brisans.com.au/storage/app/media/icons/info.svg"
                      alt="icons info"
                    />
                  </span>
                  About
                </a>
              </li>
              <li className="nav-item">
                <span className="nav-link js-mega-toggle" data-mega="new-bikes">
                  <span className="flex">
                    <span className="img">
                      <img
                        src="https://www.brisans.com.au/storage/app/media/icons/bike.svg"
                        alt="icons bike"
                      />
                    </span>{" "}
                    New Bikes
                  </span>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link js-mega-toggle" data-mega="brands">
                  <span className="flex">
                    <span className="img">
                      <img
                        src="https://www.brisans.com.au/storage/app/media/icons/shield.svg"
                        alt="icons shield"
                      />
                    </span>{" "}
                    Brands
                  </span>
                </span>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.brisans.com.au/used-bikes"
                >
                  <span className="img">
                    <img
                      src="https://www.brisans.com.au/storage/app/media/icons/motocross.svg"
                      alt="icons motocross"
                    />
                  </span>
                  Used Bikes
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.brisans.com.au/contact"
                >
                  <span className="img">
                    <img
                      src="https://www.brisans.com.au/storage/app/media/icons/phone-2.svg"
                      alt="icons phone-2"
                    />
                  </span>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="navbar-mega navbar-mega-bikes js-mega-menu"
          data-mega="new-bikes"
        >
          <div className="container">
            <div className="back js-mega-close">New Bikes</div>
            <div className="flex">
              <div className="left">
                <div className="category js-mega-category" data-id="1">
                  <div className="title">
                    <a href="https://www.brisans.com.au/new-bikes/road-bikes">
                      Road Bikes
                    </a>
                  </div>
                  <div className="subcategories">
                    <a
                      href="https://www.brisans.com.au/new-bikes/road-bikes/naked-roadster"
                      className="link"
                    >
                      Naked/Roadster
                    </a>
                    <a
                      href="https://www.brisans.com.au/new-bikes/road-bikes/retro-modern-classNameic"
                      className="link"
                    >
                      Retro/Modern classNameic
                    </a>
                    <a
                      href="https://www.brisans.com.au/new-bikes/road-bikes/sports"
                      className="link"
                    >
                      Sports
                    </a>
                    <a
                      href="https://www.brisans.com.au/new-bikes/road-bikes/supersports"
                      className="link"
                    >
                      Supersports
                    </a>
                    <a
                      href="https://www.brisans.com.au/new-bikes/road-bikes/tourer"
                      className="link"
                    >
                      Tourer
                    </a>
                    <a
                      href="https://www.brisans.com.au/new-bikes/road-bikes/cruiser"
                      className="link"
                    >
                      Cruiser
                    </a>
                    <a
                      href="https://www.brisans.com.au/new-bikes/road-bikes/adventure"
                      className="link"
                    >
                      Road-Adventure
                    </a>
                  </div>
                </div>
                <div className="category js-mega-category" data-id="2">
                  <div className="title">
                    <a href="https://www.brisans.com.au/new-bikes/adventure">
                      Adventure
                    </a>
                  </div>
                  <div className="subcategories">
                    <a
                      href="https://www.brisans.com.au/new-bikes/adventure/road"
                      className="link"
                    >
                      Adventure-Road
                    </a>
                    <a
                      href="https://www.brisans.com.au/new-bikes/adventure/off-road"
                      className="link"
                    >
                      Adventure-Off-Road
                    </a>
                  </div>
                </div>
                <div className="category js-mega-category" data-id="3">
                  <div className="title">
                    <a href="https://www.brisans.com.au/new-bikes/lams">LAMs</a>
                  </div>
                  <div className="subcategories">
                    <a
                      href="https://www.brisans.com.au/new-bikes/lams/learner-sports"
                      className="link"
                    >
                      Sports
                    </a>
                    <a
                      href="https://www.brisans.com.au/new-bikes/lams/learner-naked-roadster"
                      className="link"
                    >
                      Roadster
                    </a>
                    <a
                      href="https://www.brisans.com.au/new-bikes/lams/cruisers"
                      className="link"
                    >
                      Cruiser
                    </a>
                    <a
                      href="https://www.brisans.com.au/new-bikes/lams/learner-adventure"
                      className="link"
                    >
                      LAMS-Adventure
                    </a>
                    <a
                      href="https://www.brisans.com.au/new-bikes/lams/learner-scooters"
                      className="link"
                    >
                      Scooters
                    </a>
                  </div>
                </div>
                <div className="category js-mega-category" data-id="4">
                  <div className="title">
                    <a href="https://www.brisans.com.au/new-bikes/sxs-utvs">
                      SxS + UTVs
                    </a>
                  </div>
                  <div className="subcategories">
                    <a
                      href="https://www.brisans.com.au/new-bikes/sxs-utvs/youth-fun-vehicles"
                      className="link"
                    >
                      Youth ATV/ORVs
                    </a>
                    <a
                      href="https://www.brisans.com.au/new-bikes/sxs-utvs/agriculture-commercial"
                      className="link"
                    >
                      Agriculture/Commercial
                    </a>
                    <a
                      href="https://www.brisans.com.au/new-bikes/sxs-utvs/utility"
                      className="link"
                    >
                      Utility
                    </a>
                    <a
                      href="https://www.brisans.com.au/new-bikes/sxs-utvs/electric"
                      className="link"
                    >
                      Electric
                    </a>
                    <a
                      href="https://www.brisans.com.au/new-bikes/sxs-utvs/recreation"
                      className="link"
                    >
                      Recreation
                    </a>
                  </div>
                </div>
                <div className="category js-mega-category" data-id="5">
                  <div className="title">
                    <a href="https://www.brisans.com.au/new-bikes/dirt-bikes">
                      Dirt Bikes
                    </a>
                  </div>
                  <div className="subcategories">
                    <a
                      href="https://www.brisans.com.au/new-bikes/dirt-bikes/kids-fun"
                      className="link"
                    >
                      Fun Bikes
                    </a>
                    <a
                      href="https://www.brisans.com.au/new-bikes/dirt-bikes/enduro-trail"
                      className="link"
                    >
                      Enduro/Trail
                    </a>
                    <a
                      href="https://www.brisans.com.au/new-bikes/dirt-bikes/motocross"
                      className="link"
                    >
                      Motocross
                    </a>
                    <a
                      href="https://www.brisans.com.au/new-bikes/dirt-bikes/agriculture"
                      className="link"
                    >
                      Agriculture
                    </a>
                  </div>
                </div>
                <div className="category js-mega-category" data-id="6">
                  <div className="title">
                    <a href="https://www.brisans.com.au/new-bikes/scooters">
                      Scooters
                    </a>
                  </div>
                  <div className="subcategories"></div>
                </div>
              </div>
              <div className="right">
                <div className="image-cover">
                  <img
                    loading="lazy"
                    className="js-mega-image active"
                    data-id="1"
                    src="https://www.brisans.com.au/storage/temp/public/a6b/487/562/img_6bec44f35bef2e0e24e677007bf06ce9_569_0_0_0_auto_webp_685a8fc62e4378ae3de383e2c40037abce7f31ba__569.webp"
                    data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_6bec44f35bef2e0e24e677007bf06ce9_569_0_0_0_auto.jpg"
                    style={imageStyle2}
                    srcSet="https://www.brisans.com.au/storage/temp/public/a6b/487/562/img_6bec44f35bef2e0e24e677007bf06ce9_569_0_0_0_auto_webp_685a8fc62e4378ae3de383e2c40037abce7f31ba__569.webp 569w, https://www.brisans.com.au/storage/temp/public/a6b/487/562/img_6bec44f35bef2e0e24e677007bf06ce9_569_0_0_0_auto_webp_685a8fc62e4378ae3de383e2c40037abce7f31ba__400.webp 400w"
                    sizes="(max-width: 569px) 100vw, 569px"
                    alt="Mega-Menu-Images Road"
                  />
                  <img
                    loading="lazy"
                    className="js-mega-image"
                    data-id="2"
                    src="https://www.brisans.com.au/storage/temp/public/f4e/e73/6cd/img_8a2617581aeaf3aa3898b033d4e36ac0_569_0_0_0_auto_webp_fb56fdf755981eac3458f24ee8bc074119630637__569.webp"
                    data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_8a2617581aeaf3aa3898b033d4e36ac0_569_0_0_0_auto.jpg"
                    style={imageStyle}
                    srcSet="https://www.brisans.com.au/storage/temp/public/f4e/e73/6cd/img_8a2617581aeaf3aa3898b033d4e36ac0_569_0_0_0_auto_webp_fb56fdf755981eac3458f24ee8bc074119630637__569.webp 569w, https://www.brisans.com.au/storage/temp/public/f4e/e73/6cd/img_8a2617581aeaf3aa3898b033d4e36ac0_569_0_0_0_auto_webp_fb56fdf755981eac3458f24ee8bc074119630637__400.webp 400w"
                    sizes="(max-width: 569px) 100vw, 569px"
                    alt="Mega-Menu-Images Adventure"
                  />
                  <img
                    loading="lazy"
                    className="js-mega-image"
                    data-id="3"
                    src="https://www.brisans.com.au/storage/temp/public/55b/91e/75a/img_7e6f7cec2f460b492bc1c8cc82dad02c_569_0_0_0_auto_webp_0a3de3bd0420ba8407a56ca96311f0add24665f7__569.webp"
                    data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_7e6f7cec2f460b492bc1c8cc82dad02c_569_0_0_0_auto.jpg"
                    style={imageStyle}
                    srcSet="https://www.brisans.com.au/storage/temp/public/55b/91e/75a/img_7e6f7cec2f460b492bc1c8cc82dad02c_569_0_0_0_auto_webp_0a3de3bd0420ba8407a56ca96311f0add24665f7__569.webp 569w, https://www.brisans.com.au/storage/temp/public/55b/91e/75a/img_7e6f7cec2f460b492bc1c8cc82dad02c_569_0_0_0_auto_webp_0a3de3bd0420ba8407a56ca96311f0add24665f7__400.webp 400w"
                    sizes="(max-width: 569px) 100vw, 569px"
                    alt="Mega-Menu-Images LAMS"
                  />
                  <img
                    loading="lazy"
                    className="js-mega-image"
                    data-id="4"
                    src="https://www.brisans.com.au/storage/temp/public/23a/9bd/dd8/img_687778ef7d294a698ca6312dc010e1f9_569_0_0_0_auto_webp_603b8d09e3af4f75cada22615152c92fbc44b339__569.webp"
                    data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_687778ef7d294a698ca6312dc010e1f9_569_0_0_0_auto.jpg"
                    style={imageStyle3}
                    srcSet="https://www.brisans.com.au/storage/temp/public/23a/9bd/dd8/img_687778ef7d294a698ca6312dc010e1f9_569_0_0_0_auto_webp_603b8d09e3af4f75cada22615152c92fbc44b339__569.webp 569w, https://www.brisans.com.au/storage/temp/public/23a/9bd/dd8/img_687778ef7d294a698ca6312dc010e1f9_569_0_0_0_auto_webp_603b8d09e3af4f75cada22615152c92fbc44b339__400.webp 400w"
                    sizes="(max-width: 569px) 100vw, 569px"
                    alt="Mega-Menu-Images SXS"
                  />
                  <img
                    loading="lazy"
                    className="js-mega-image"
                    data-id="5"
                    src="https://www.brisans.com.au/storage/temp/public/f0f/524/d23/img_e29924edaadf8905af1d4142a2160bc6_569_0_0_0_auto_webp_289b40e244db277e5c84c0324d39eb879ca0674a__569.webp"
                    data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_e29924edaadf8905af1d4142a2160bc6_569_0_0_0_auto.jpg"
                    style={imageStyle4}
                    srcSet="https://www.brisans.com.au/storage/temp/public/f0f/524/d23/img_e29924edaadf8905af1d4142a2160bc6_569_0_0_0_auto_webp_289b40e244db277e5c84c0324d39eb879ca0674a__569.webp 569w, https://www.brisans.com.au/storage/temp/public/f0f/524/d23/img_e29924edaadf8905af1d4142a2160bc6_569_0_0_0_auto_webp_289b40e244db277e5c84c0324d39eb879ca0674a__400.webp 400w"
                    sizes="(max-width: 569px) 100vw, 569px"
                    alt="Mega-Menu-Images Off-Road"
                  />
                  <img
                    loading="lazy"
                    className="js-mega-image"
                    data-id="6"
                    src="https://www.brisans.com.au/storage/temp/public/d81/0fb/51d/img_18cda6d719e1732709a82416073aa915_569_0_0_0_auto_webp_5dfb919017a243ef0b689e4bd6573d3476e23c5b__569.webp"
                    data-webp-img-fallback="https://www.brisans.com.au/storage/app/resources/resize/img_18cda6d719e1732709a82416073aa915_569_0_0_0_auto.jpg"
                    style={imageStyle5}
                    srcSet="https://www.brisans.com.au/storage/temp/public/d81/0fb/51d/img_18cda6d719e1732709a82416073aa915_569_0_0_0_auto_webp_5dfb919017a243ef0b689e4bd6573d3476e23c5b__569.webp 569w, https://www.brisans.com.au/storage/temp/public/d81/0fb/51d/img_18cda6d719e1732709a82416073aa915_569_0_0_0_auto_webp_5dfb919017a243ef0b689e4bd6573d3476e23c5b__400.webp 400w"
                    sizes="(max-width: 569px) 100vw, 569px"
                    alt="Mega-Menu-Images Scooter"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="navbar-mega navbar-mega-brands js-mega-menu"
          data-mega="brands"
        >
          <div className="container">
            <div className="back js-mega-close">Brands</div>
            <div className="flex">
              <div className="left">
                <div className="category">
                  <div className="title">Brands</div>
                  <div className="subcategories">
                    <div className="link js-mega-category" data-id="1">
                      <a href="https://www.brisans.com.au/new-bikes/aprilia">
                        Aprilia
                      </a>
                    </div>
                    <div className="link js-mega-category" data-id="2">
                      <a href="https://www.brisans.com.au/new-bikes/bmw-motorrad">
                        BMW Motorrad
                      </a>
                    </div>
                    <div className="link js-mega-category" data-id="3">
                      <a href="https://www.brisans.com.au/new-bikes/fonz">
                        Fonz
                      </a>
                    </div>
                    <div className="link js-mega-category" data-id="4">
                      <a href="https://www.brisans.com.au/new-bikes/indian-motorcycle">
                        Indian Motorcycle
                      </a>
                    </div>
                    <div className="link js-mega-category" data-id="5">
                      <a href="https://www.brisans.com.au/new-bikes/kawasaki">
                        Kawasaki
                      </a>
                    </div>
                    <div className="link js-mega-category" data-id="6">
                      <a href="https://www.brisans.com.au/new-bikes/moto-guzzi">
                        Moto Guzzi
                      </a>
                    </div>
                    <div className="link js-mega-category" data-id="7">
                      <a href="https://www.brisans.com.au/new-bikes/piaggio">
                        Piaggio
                      </a>
                    </div>
                    <div className="link js-mega-category" data-id="8">
                      <a href="https://www.brisans.com.au/new-bikes/polaris">
                        Polaris
                      </a>
                    </div>
                    <div className="link js-mega-category" data-id="9">
                      <a href="https://www.brisans.com.au/new-bikes/royal-enfield">
                        Royal Enfield
                      </a>
                    </div>
                    <div className="link js-mega-category" data-id="10">
                      <a href="https://www.brisans.com.au/new-bikes/suzuki">
                        Suzuki
                      </a>
                    </div>
                    <div className="link js-mega-category" data-id="11">
                      <a href="https://www.brisans.com.au/new-bikes/sym-scoota">
                        SYM Scoota
                      </a>
                    </div>
                    <div className="link js-mega-category" data-id="12">
                      <a href="https://www.brisans.com.au/new-bikes/triumph">
                        Triumph
                      </a>
                    </div>
                    <div className="link js-mega-category" data-id="13">
                      <a href="https://www.brisans.com.au/new-bikes/vespa">
                        Vespa
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="image">
                  <div className="logo js-mega-image active" data-id="1">
                    <img
                      loading="lazy"
                      src="https://www.brisans.com.au/storage/app/media/placeholder/aprilia-colour.svg"
                      data-webp-img-fallback="https://www.brisans.com.au/storage/app/media/placeholder/aprilia-colour.svg"
                      alt="placeholder aprilia-colour"
                    />
                  </div>
                  <div className="logo js-mega-image" data-id="2">
                    <img
                      loading="lazy"
                      src="https://www.brisans.com.au/storage/temp/public/080/cf5/789/BMW-Motorrad-Logo-2_webp_8141ce84163193d98496371b4d1438b7e13e3eed__200.webp"
                      data-webp-img-fallback="https://www.brisans.com.au/storage/app/media/logos/New/BMW-Motorrad-Logo-2.png"
                      srcSet="https://www.brisans.com.au/storage/temp/public/080/cf5/789/BMW-Motorrad-Logo-2_webp_8141ce84163193d98496371b4d1438b7e13e3eed__200.webp 200w"
                      sizes="(max-width: 200px) 100vw, 200px"
                      alt="BMW Motorcycles Logo"
                    />
                  </div>
                  <div className="logo js-mega-image" data-id="3">
                    <img
                      loading="lazy"
                      src="https://www.brisans.com.au/storage/temp/public/dcb/719/2e9/Fonz-Logo_webp_356d3256091615186035d5b6de2e83d5127ec47a__200.webp"
                      data-webp-img-fallback="https://www.brisans.com.au/storage/app/media/logos/New/Fonz-Logo.png"
                      srcSet="https://www.brisans.com.au/storage/temp/public/dcb/719/2e9/Fonz-Logo_webp_356d3256091615186035d5b6de2e83d5127ec47a__200.webp 200w"
                      sizes="(max-width: 200px) 100vw, 200px"
                      alt="Fonz Logo"
                    />
                  </div>
                  <div className="logo js-mega-image" data-id="4">
                    <img
                      loading="lazy"
                      src="https://www.brisans.com.au/storage/temp/public/abd/b45/c23/Indian-Motorcycle_webp_45c16c7231f9c44298f1c5934a921c0c112183f9__200.webp"
                      data-webp-img-fallback="https://www.brisans.com.au/storage/app/media/logos/New/Updated/Indian-Motorcycle.png"
                      srcSet="https://www.brisans.com.au/storage/temp/public/abd/b45/c23/Indian-Motorcycle_webp_45c16c7231f9c44298f1c5934a921c0c112183f9__200.webp 200w"
                      sizes="(max-width: 200px) 100vw, 200px"
                      alt="logos New Updated Indian-Motorcycle"
                    />
                  </div>
                  <div className="logo js-mega-image" data-id="5">
                    <img
                      loading="lazy"
                      src="https://www.brisans.com.au/storage/temp/public/a80/f45/46f/Kawasaki-Logo-New-CI_webp_ea19c57e61c9aba40faba3ee3993b9acf3a755a6__200.webp"
                      data-webp-img-fallback="https://www.brisans.com.au/storage/app/media/logos/Kawasaki-Logo-New-CI.png"
                      srcSet="https://www.brisans.com.au/storage/temp/public/a80/f45/46f/Kawasaki-Logo-New-CI_webp_ea19c57e61c9aba40faba3ee3993b9acf3a755a6__200.webp 200w"
                      sizes="(max-width: 200px) 100vw, 200px"
                      alt="Kawasaki Motorcycles - Let The good Times Roll - Brand Logo"
                    />
                  </div>
                  <div className="logo js-mega-image" data-id="6">
                    <img
                      loading="lazy"
                      src="https://www.brisans.com.au/storage/temp/public/6be/c95/133/Moto-Guzzi-White_webp_3284f6262808b9daff432f7aac907388f674303f__200.webp"
                      data-webp-img-fallback="https://www.brisans.com.au/storage/app/media/logos/New/Moto-Guzzi-White.png"
                      srcSet="https://www.brisans.com.au/storage/temp/public/6be/c95/133/Moto-Guzzi-White_webp_3284f6262808b9daff432f7aac907388f674303f__200.webp 200w"
                      sizes="(max-width: 200px) 100vw, 200px"
                      alt="Moto Guzzi Logo"
                    />
                  </div>
                  <div className="logo js-mega-image" data-id="7">
                    <img
                      loading="lazy"
                      src="https://www.brisans.com.au/storage/temp/public/396/137/a29/Piaggio-lockup-white_webp_e5c9b33b1c2af8acd033917e4feae620c189a1bc__200.webp"
                      data-webp-img-fallback="https://www.brisans.com.au/storage/app/media/logos/New/Piaggio-lockup-white.png"
                      srcSet="https://www.brisans.com.au/storage/temp/public/396/137/a29/Piaggio-lockup-white_webp_e5c9b33b1c2af8acd033917e4feae620c189a1bc__200.webp 200w"
                      sizes="(max-width: 200px) 100vw, 200px"
                      alt="Piaggio Logo Lockup"
                    />
                  </div>
                  <div className="logo js-mega-image" data-id="8">
                    <img
                      loading="lazy"
                      src="https://www.brisans.com.au/storage/temp/public/1eb/c85/fd9/Polaris-Off-Road-Logo_webp_68c7d79fbebf340e24da621395a5636a8f62a9ca__200.webp"
                      data-webp-img-fallback="https://www.brisans.com.au/storage/app/media/logos/New/Polaris-Off-Road-Logo.png"
                      srcSet="https://www.brisans.com.au/storage/temp/public/1eb/c85/fd9/Polaris-Off-Road-Logo_webp_68c7d79fbebf340e24da621395a5636a8f62a9ca__200.webp 200w"
                      sizes="(max-width: 200px) 100vw, 200px"
                      alt="Polaris Off Road Vehicles Logo"
                    />
                  </div>
                  <div className="logo js-mega-image" data-id="9">
                    <img
                      loading="lazy"
                      src="https://www.brisans.com.au/storage/temp/public/89d/2d1/876/Royal-Enfield-Logo_webp_caf4d8293936ac99a1cd9c55becb834745929d06__200.webp"
                      data-webp-img-fallback="https://www.brisans.com.au/storage/app/media/logos/New/Royal-Enfield-Logo.png"
                      srcSet="https://www.brisans.com.au/storage/temp/public/89d/2d1/876/Royal-Enfield-Logo_webp_caf4d8293936ac99a1cd9c55becb834745929d06__200.webp 200w"
                      sizes="(max-width: 200px) 100vw, 200px"
                      alt="Royal Enfield Logo"
                    />
                  </div>
                  <div className="logo js-mega-image" data-id="10">
                    <img
                      loading="lazy"
                      src="https://www.brisans.com.au/storage/temp/public/895/4fb/8ce/Suzuki-Logo-2_webp_9bea10de315e1fb5aa5382b4862b49acdb55371d__200.webp"
                      data-webp-img-fallback="https://www.brisans.com.au/storage/app/media/logos/New/Suzuki-Logo-2.png"
                      srcSet="https://www.brisans.com.au/storage/temp/public/895/4fb/8ce/Suzuki-Logo-2_webp_9bea10de315e1fb5aa5382b4862b49acdb55371d__200.webp 200w"
                      sizes="(max-width: 200px) 100vw, 200px"
                      alt="Suzuki Motorcycles Logo"
                    />
                  </div>
                  <div className="logo js-mega-image" data-id="11">
                    <img
                      loading="lazy"
                      src="https://www.brisans.com.au/storage/temp/public/3c0/eb0/5a6/Sym-Logo_webp_1cd380e5ca2be76812a257a24799632e84f7635c__200.webp"
                      data-webp-img-fallback="https://www.brisans.com.au/storage/app/media/logos/New/Sym-Logo.png"
                      srcSet="https://www.brisans.com.au/storage/temp/public/3c0/eb0/5a6/Sym-Logo_webp_1cd380e5ca2be76812a257a24799632e84f7635c__200.webp 200w"
                      sizes="(max-width: 200px) 100vw, 200px"
                      alt="SYM Scooter logo"
                    />
                  </div>
                  <div className="logo js-mega-image" data-id="12">
                    <img
                      loading="lazy"
                      src="https://www.brisans.com.au/storage/app/media/logos/triumph.svg"
                      data-webp-img-fallback="https://www.brisans.com.au/storage/app/media/logos/triumph.svg"
                      alt="logos triumph"
                    />
                  </div>
                  <div className="logo js-mega-image" data-id="13">
                    <img
                      loading="lazy"
                      src="https://www.brisans.com.au/storage/temp/public/fd7/ad7/084/Vespa-Logo_webp_8efd6f9c93274b9ebf65221559446f19bd21cc28__200.webp"
                      data-webp-img-fallback="https://www.brisans.com.au/storage/app/media/logos/New/Vespa-Logo.png"
                      srcSet="https://www.brisans.com.au/storage/temp/public/fd7/ad7/084/Vespa-Logo_webp_8efd6f9c93274b9ebf65221559446f19bd21cc28__200.webp 200w"
                      sizes="(max-width: 200px) 100vw, 200px"
                      alt="Vespa scooters logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderCopy;
