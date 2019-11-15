import React,  { Component }  from 'react'
import Cart from './Cart'
import logo from '../assets/img/logo/logo-10.png'
class Navbar extends React.Component {
   render () {
       return (
           <header>
           <div className="header-bottom wrapper-padding-2 res-header-sm sticker header-sticky-3 furits-header">
               <div className="container-fluid">
                   <div className="header-bottom-wrapper">
                       <div className="logo-2 ptb-35">
                           <a href="index.html">
                               <img src= {logo} alt=""/>
                           </a>
                       </div>
                       <div className="menu-style-2 handicraft-menu menu-hover">
                           <nav>
                               <ul>
                                   <li><a href="#">home</a>
                                   </li>
                                   <li><a href="#">pages</a>
                                   </li>
                               </ul>
                           </nav>
                       </div>
                       <div className="furits-login-cart">
                           <div className="header-cart-4 furits-cart">
                               <a className="icon-cart" href="#">
                                   <i className="pe-7s-shopbag"></i>
                                   <span className="handicraft-count">02</span>
                               </a>
                               <Cart/>
                           </div>
                       </div>
                   </div>
                   <div className="row">
                       <div className="mobile-menu-area handicraft-menu d-md-block col-md-12 col-lg-12 col-12 d-lg-none d-xl-none">
                           <div className="mobile-menu">
                               <nav id="mobile-menu-active">
                                   <ul className="menu-overflow">
                                       <li><a href="#">HOME</a>
                                           <ul>
                                               <li><a href="index.html">Fashion</a></li>
                                           </ul>
                                       </li>
                                       <li><a href="#">pages</a>
                                           <ul>
                                               <li><a href="about-us.html">about us</a></li>
                                           </ul>
                                       </li>
                                       <li><a href="#">shop</a>
                                           <ul>
                                               <li><a href="shop-grid-2-col.html"> grid 2 column</a></li>
                                           </ul>
                                       </li>
                                       <li><a href="#">BLOG</a>
                                           <ul>
                                               <li><a href="blog.html">blog 3 colunm</a></li>
                                           </ul>
                                       </li>
                                       <li><a href="contact.html"> Contact  </a></li>
                                   </ul>
                               </nav>                            
                           </div>
</div>
                   </div>
               </div>
           </div>
       </header>
       )
   }
}
export default Navbar