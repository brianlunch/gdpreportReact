import React from 'react';
import HeaderItem from '../HeaderItem/HeaderItem'
import Title from '../Title/Title'
import {Link as ScrollLink} from 'react-scroll'
import {Link} from 'react-router-dom'
import './Header.css'
import {FaQuestionCircle, FaExclamationCircle, FaChartLine} from 'react-icons/fa'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="header" id="home">
           
            <div class="row text-left">
                <div class="col-5">
                    <Title title="GDPReport" subtitle="A tool for reporting websites that breach GDPR consent rules"/>
                </div>
                <div class="col-7 card-deck text-center">
                    <div class="row">
                        <div class="col">
                        <ScrollLink 
                            activeClass="active"
                            to="info"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration= {500}
                            >
                             <HeaderItem title="Find out more"><FaQuestionCircle/></HeaderItem>
                        </ScrollLink>
                       
                        </div>

                        <div class="col">
                        <Link
                            to="report"
                            >
                        <HeaderItem title="Report a Site "><FaExclamationCircle/></HeaderItem>
                        </Link>
                        </div>
                        <div class="col">
                        <HeaderItem title="Reported Sites"><FaChartLine/></HeaderItem>
                        </div>
                    
                   
                    
                    </div>
                    
                </div>
            </div>
        </div>
        );
    }
}



export default Header;
