function Footer(){
    return<>
   

      {/* Remove the container if you want to extend the Footer to full width. */}
      <div className="container my-5">
        {/* Footer */}
        <footer className="text-center text-lg-start text-dark" style={{backgroundColor: '#ECEFF1'}}>
          {/* Section: Social media */}
          <section className="d-flex justify-content-between p-4 text-white" style={{backgroundColor: '#21D192'}}>
            {/* Left */}
            <div className="me-5">
              <span>Get connected with us on social networks:</span>
            </div>
            {/* Left */}
            {/* Right */}
            <div>
              <a href className="text-white me-4">
                <i className="fab fa-facebook-f" />
              </a>
              <a href className="text-white me-4">
                <i className="fab fa-twitter" />
              </a>
              <a href className="text-white me-4">
                <i className="fab fa-google" />
              </a>
              <a href className="text-white me-4">
                <i className="fab fa-instagram" />
              </a>
              <a href className="text-white me-4">
                <i className="fab fa-linkedin" />
              </a>
              <a href className="text-white me-4">
                <i className="fab fa-github" />
              </a>
            </div>
            {/* Right */}
          </section>
          {/* Section: Social media */}
          {/* Section: Links  */}
          <section className>
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold">D-DARSHAN</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                  <p>
                  Traveling can provide numerous benefits such as broadening your perspective, enhancing your cultural awareness, improving your communication skills, boosting your confidence, reducing stress, creating lifelong memories, and promoting personal growth and development.
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Products</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                  <p>
                    <a href="#!" className="text-dark">Showing Temples</a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">Showing hotels</a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">Places</a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">Budget</a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                  <p>
                    <a href="#!" className="text-dark">Your Account</a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">Become an Affiliate</a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">Charges</a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">Help</a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                  <p><i className="fas fa-home mr-3" /> Pune, 412420, Maharashtra</p>
                  <p><i className="fas fa-envelope mr-3" /> prashantsawant285@gmail.com</p>
                  <p><i className="fas fa-envelope mr-3" /> roshankanwade@gmail.com</p>
                  <p><i className="fas fa-phone mr-3" /> + 91 9834859931</p>
                  <p><i className="fas fa-print mr-3" /> + 91 8050981108</p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}
          {/* Copyright */}
          <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
            © 2020 Copyright:
            <a className="text-dark" href="https://mdbootstrap.com/">DDARSHAN.com</a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </div>
      </>
}
export default Footer;