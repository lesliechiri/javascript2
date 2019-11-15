import React from 'react'



class Navbar extends React.Component{

    render(){
        return(
            <nav className="site-header sticky-top py-1">
  <div className="container d-flex flex-column flex-md-row justify-content-between">
    <a className="py-2" href="#">
     Greens Kiosk
    </a>
    <a className="py-2 d-none d-md-inline-block" href="#">Home</a>
    <a className="py-2 d-none d-md-inline-block" href="#">About</a>
   
  </div>
</nav>
        );
    }
}

export default Navbar;