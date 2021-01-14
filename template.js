//Navbar//

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Navbar</a>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="react.html">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="press.html">Press</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}


//Sidebar//

const Sidebar = () => {
  return (
    <div className="d-none d-md-block col-md-3">
      <div className="border border-primary py-4 px-3">
      Sidebar
      </div>
    </div>
  );
}

//Footer//

const Footer = () => {
  return (
    <div className="border-top p-2" id="footer">
    Template Demo © 2020
    </div>
  );
}

//Template//

const Template = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container py-4">
        <div className="row">
          <div className="col-12 col-md-9">
          {props.children}
          </div>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}
