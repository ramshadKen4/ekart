import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import './Header.css';
import { AuthContext } from '../../store/Context';
import Firebase from '../../config/firebase';

function Header() {
    let userIconList;
    const { user, setUser } = useContext(AuthContext)
    console.log(user)
    if (!user) {
        userIconList =
            <ul>
                <li><Link to={'login'}>Login</Link></li>
                <li><Link to={'signup'}>Register</Link></li>
            </ul>;
    } else {
        userIconList = <ul><li onClick={() => { Firebase.auth().signOut() }}><span className="logout">Logout</span></li></ul>;

    }
    return (
        <header class="header">
            {/*Top bar*/}
            <div class="top_bar">
                <div class="container">
                    <div class="row">
                        <div class="col d-flex flex-row">
                            <div class="top_bar_contact_item"><div class="top_bar_icon"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918577/phone.png" alt="" /></div>+221 33 66 22</div>
                            <div class="top_bar_contact_item"><div class="top_bar_icon"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918597/mail.png" alt="" /></div><a href="mailto:fastsales@gmail.com">support@elecxtra.io</a></div>
                            <div class="top_bar_content ml-auto">
                                <div class="top_bar_menu">
                                    <ul class="standard_dropdown top_bar_dropdown">
                                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                                        <li className='top_bar_menu_location'>
                                            Locations
                                        </li>
                                        <li>
                                            {user ? user.displayName : 'please online'}
                                        </li>
                                        <li>
                                            <a href="#">$ US dollar<i class="fas fa-chevron-down"></i></a>
                                            <ul>
                                                <li><a href="#">EUR Euro</a></li>
                                                <li><a href="#">GBP British Pound</a></li>
                                                <li><a href="#">JPY Japanese Yen</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">En<i class="fas fa-chevron-down"></i></a>
                                            <ul>
                                                <li><a href="#">Italian</a></li>
                                                <li><a href="#">Spanish</a></li>
                                                <li><a href="#">Japanese</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*-- Header Main -->*/}

            <div class="header_main">
                <div class="container">
                    <div class="row">

                        {/* logo */}
                        <div class="col-lg-2 col-sm-3 col-3 order-1">
                            <div class="logo_container">
                                <div class="logo"><Link to={"/"}><img src='/svg/logo.svg'></img></Link></div>
                            </div>
                        </div>


                        <div class="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">

                            <div class="header_search">
                                <div class="header_search_content">
                                    <div class="header_search_form_container">
                                        <form action="#" class="header_search_form clearfix">
                                            <input type="search" required="required" class="header_search_input" placeholder="Search for products..." />
                                            <button type="submit" class="header_search_button trans_300" value="Submit"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918770/search.png" alt="" /></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
                            <div class="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                                <div class="wishlist d-flex flex-row align-items-center justify-content-end">
                                    <div class="wishlist_icon">
                                        <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918681/heart.png" alt="" /></div>
                                    <div class="wishlist_content">
                                        <div class="wishlist_text"><a href="#"></a></div>
                                        <div class="wishlist_count"></div>
                                    </div>
                                </div>

                                {/*cart*/}
                                <div class="cart">
                                    <div class="cart_container d-flex flex-row align-items-center justify-content-end">
                                        <div class="cart_icon">
                                            <a href='/cart' ><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918704/cart.png" alt="" /></a>
                                            <div class="cart_count"><span>3</span></div>
                                        </div>
                                        <div class="cart_content">
                                            <div class="cart_text"><a href="#"></a></div>

                                        </div>
                                    </div>
                                </div>
                                <div class="user">
                                    <div class="user_container d-flex flex-row align-items-center justify-content-end">
                                        <div class="standard_dropdown main_nav_dropdown user_icon">
                                            <li class="hassubs">
                                                <a href="#" className='user_icon'><i class="fa fa-user-circle fa-2x user_icon" aria-hidden="true" style={{ fontSize: '40px' }}></i></a>
                                                {userIconList}
                                            </li>
                                        </div>
                                    </div>
                                </div>
                                <div >
                                    <div className="classified_button ml-4 d-flex flex-row align-items-center justify-content-end">
                                        <button>Classifieds</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* main nav */}

            <nav class="main_nav">
                <div class="container">
                    <div class="row">
                        <div class="col">

                            <div class="main_nav_content d-flex flex-row">


                                <div class="main_nav_menu">
                                    <ul class="standard_dropdown main_nav_dropdown">
                                        <li class="hassubs">
                                            <a href="#">All Categories<i class="fas fa-chevron-down"></i></a>
                                            <ul>
                                                <li>
                                                    <a href="#">Lenovo<i class="fas fa-chevron-down"></i></a>
                                                    <ul>
                                                        <li><a href="#">Lenovo 1<i class="fas fa-chevron-down"></i></a></li>
                                                        <li><a href="#">Lenovo 3<i class="fas fa-chevron-down"></i></a></li>
                                                        <li><a href="#">Lenovo 2<i class="fas fa-chevron-down"></i></a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">DELL<i class="fas fa-chevron-down"></i></a></li>
                                                <li><a href="#">APPLE<i class="fas fa-chevron-down"></i></a></li>
                                                <li><a href="#">HP<i class="fas fa-chevron-down"></i></a></li>
                                            </ul>
                                        </li>
                                        <li><a href="">Books</a></li>
                                        <li><a href="">Electronics</a></li>
                                        <li><a href="">Real Estate</a></li>
                                        <li><a href="">Cars-Bikes</a></li>
                                        <li><a href="">Dorm-Furniture</a></li>
                                        <li><a href="">Men</a></li>
                                        <li><a href="">Woman</a></li>
                                        <li><a href="">Music</a></li>
                                        <li><a href="">Hobbies Games</a></li>
                                        <li><a href="">Toys</a></li>
                                        <li><a href="">Kid</a></li>

                                    </ul>
                                </div>


                                <div class="menu_trigger_container ml-auto">
                                    <div class="menu_trigger d-flex flex-row align-items-center justify-content-end">
                                        <div class="menu_burger">
                                            <div class="menu_trigger_text">menu</div>
                                            <div class="cat_burger menu_burger_inner"><span></span><span></span><span></span></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>



            <div class="page_menu">
                <div class="container">
                    <div class="row">
                        <div class="col">

                            <div class="page_menu_content">

                                <div class="page_menu_search">
                                    <form action="#">
                                        <input type="search" required="required" class="page_menu_search_input" placeholder="Search for products..." />
                                    </form>
                                </div>
                                <ul class="page_menu_nav">
                                    <li class="page_menu_item has-children">
                                        <a href="#">Language<i class="fa fa-angle-down"></i></a>
                                        <ul class="page_menu_selection">
                                            <li><a href="#">English<i class="fa fa-angle-down"></i></a></li>
                                            <li><a href="#">Italian<i class="fa fa-angle-down"></i></a></li>
                                            <li><a href="#">Spanish<i class="fa fa-angle-down"></i></a></li>
                                            <li><a href="#">Japanese<i class="fa fa-angle-down"></i></a></li>
                                        </ul>
                                    </li>
                                    <li class="page_menu_item has-children">
                                        <a href="#">Currency<i class="fa fa-angle-down"></i></a>
                                        <ul class="page_menu_selection">
                                            <li><a href="#">US Dollar<i class="fa fa-angle-down"></i></a></li>
                                            <li><a href="#">EUR Euro<i class="fa fa-angle-down"></i></a></li>
                                            <li><a href="#">GBP British Pound<i class="fa fa-angle-down"></i></a></li>
                                            <li><a href="#">JPY Japanese Yen<i class="fa fa-angle-down"></i></a></li>
                                        </ul>
                                    </li>
                                    <li class="page_menu_item">
                                        <a href="#">Home<i class="fa fa-angle-down"></i></a>
                                    </li>
                                    <li class="page_menu_item has-children">
                                        <a href="#">Super Deals<i class="fa fa-angle-down"></i></a>
                                        <ul class="page_menu_selection">
                                            <li><a href="#">Super Deals<i class="fa fa-angle-down"></i></a></li>
                                            <li class="page_menu_item has-children">
                                                <a href="#">Menu Item<i class="fa fa-angle-down"></i></a>
                                                <ul class="page_menu_selection">
                                                    <li><a href="#">Menu Item<i class="fa fa-angle-down"></i></a></li>
                                                    <li><a href="#">Menu Item<i class="fa fa-angle-down"></i></a></li>
                                                    <li><a href="#">Menu Item<i class="fa fa-angle-down"></i></a></li>
                                                    <li><a href="#">Menu Item<i class="fa fa-angle-down"></i></a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Menu Item<i class="fa fa-angle-down"></i></a></li>
                                            <li><a href="#">Menu Item<i class="fa fa-angle-down"></i></a></li>
                                            <li><a href="#">Menu Item<i class="fa fa-angle-down"></i></a></li>
                                        </ul>
                                    </li>
                                    <li class="page_menu_item has-children">
                                        <a href="#">Featured Brands<i class="fa fa-angle-down"></i></a>
                                        <ul class="page_menu_selection">
                                            <li><a href="#">Featured Brands<i class="fa fa-angle-down"></i></a></li>
                                            <li><a href="#">Menu Item<i class="fa fa-angle-down"></i></a></li>
                                            <li><a href="#">Menu Item<i class="fa fa-angle-down"></i></a></li>
                                            <li><a href="#">Menu Item<i class="fa fa-angle-down"></i></a></li>
                                        </ul>
                                    </li>
                                    <li class="page_menu_item has-children">
                                        <a href="#">Trending Styles<i class="fa fa-angle-down"></i></a>
                                        <ul class="page_menu_selection">
                                            <li><a href="#">Trending Styles<i class="fa fa-angle-down"></i></a></li>
                                            <li><a href="#">Menu Item<i class="fa fa-angle-down"></i></a></li>
                                            <li><a href="#">Menu Item<i class="fa fa-angle-down"></i></a></li>
                                            <li><a href="#">Menu Item<i class="fa fa-angle-down"></i></a></li>
                                        </ul>
                                    </li>
                                    <li class="page_menu_item"><a href="blog.html">blog<i class="fa fa-angle-down"></i></a></li>
                                    <li class="page_menu_item"><a href="contact.html">contact<i class="fa fa-angle-down"></i></a></li>
                                </ul>

                                <div class="menu_contact">
                                    <div class="menu_contact_item"><div class="menu_contact_icon"><img src="images/phone_white.png" alt="" /></div>+38 068 005 3570</div>
                                    <div class="menu_contact_item"><div class="menu_contact_icon"><img src="images/mail_white.png" alt="" /></div><a href="mailto:fastsales@gmail.com">fastsales@gmail.com</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header