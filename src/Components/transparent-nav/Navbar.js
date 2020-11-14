import React, { useState } from 'react';
import { Link as ScrollLink} from 'react-scroll';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
//hooks
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

//icons
import { FaBars } from "react-icons/fa";


/*
    To do on nav - pass in signed in user 
    - change navbar items based on if logged in or not
    - (logout / login) etc.
*/

const Nav = ({user}) => {

    const [collapsed, toggleCollapsed] = useState(true)
    const [classOne, setClassOne] = useState('collapse navbar-collapse')
    const [classTwo, setClassTwo] = useState ('navbar-toggler navbar-toggler-right collapsed')
    const [classThree, setClassThree] = useState('navbar navbar-expand-lg fixed-top ')

    async function toggleNavbar(){
        await toggleCollapsed(!collapsed)
        const classOneUpdated = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwoUpdated = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        setClassOne(classOneUpdated)
        setClassTwo(classTwoUpdated)
    }

    useScrollPosition(
        ({ prevPos, currPos }) => {
          if (currPos.y<-10){
            setClassThree('navbar navbar-expand-lg fixed-top  active ')
          }else{
            setClassThree('navbar navbar-expand-lg fixed-top ')
          }
        },
      )

    
    return (
    <nav className={classThree}>
        <div className="container">
            
            <button  onClick={toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <FaBars size={20} color="black"/>
            </button>
            <div className={`${classOne}`} id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            exact activeClassName="nav-link--active"
                            to="/"
                            >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <ScrollLink className="nav-link"
                            activeClass="active"
                            to="info"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration= {500}
                            >
                            More Info
                        </ScrollLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            exact activeClassName="nav-link--active"
                            to="report"
                          
                            >
                            Report Site
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            exact activeClassName="nav-link--active"
                            to="reported"
                            
                            >
                            Reoported Sites
                        </NavLink>
                    </li>
                    
                    
                </ul>
            </div>
        </div>
    </nav>
    );
}

export default Nav;