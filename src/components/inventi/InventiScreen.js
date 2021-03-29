import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import speedometer from '../../styles/img/speedometer.svg';
import info from '../../styles/img/info.svg';
import user from '../../styles/img/user.svg';
import comando from '../../styles/img/comando.svg';
import graph from '../../styles/img/graph.svg';
import {  BrowserRouter as Router, Route, useHistory, useLocation, NavLink} from 'react-router-dom'
 
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { LoadScreen } from '../load/LoadScreen';
import { inventiPrueba } from './inventiPrueba';
import { InventiAppBar } from './InventiAppBar';
import { SpeedScreen } from '../speed/SpeedScreen';

export const InventiScreen = () => {

/*     let location = useLocation();
    let history= useHistory(); */

    return (
        <Router>
    <Route render={({ location, history }) => (
        <>
        <SideNav
        onSelect={(selected) => {
            const to = '/' + selected;
            if (location.pathname !== to) {
                history.push(to);
            }
        }}
       
    >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="speed" >
                <NavIcon>
                <img src={speedometer} className="auth__img-navicon" alt="" />
                    {/* <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                </NavIcon>
                <NavText >
                    <span className="auth__nav-text">     SPEED</span>
                
                </NavText>
            </NavItem>
            <NavItem eventKey="charts">
                <NavIcon>
                <img src={comando} className="auth__img-navicon-comand" alt="" />
                   {/*  <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} /> */}
                </NavIcon>
                <NavText>
                <span className="auth__nav-text">    PING </span>
                 
                </NavText>
                <NavItem eventKey="charts/linechart">
                    <NavText>
                        
                        Line Chart
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts/barchart">
                    <NavText>
                        Bar Chart
                    </NavText>
                </NavItem>
            </NavItem>
            <NavItem eventKey="info">
                <NavIcon>
                <img src={info} className="auth__img-navicon" alt="" />
                  {/*   <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                </NavIcon>
                <NavText>
                <span className="auth__nav-text"> 
                    INFO PC
                    </span>
                </NavText>
            </NavItem>
            <NavItem eventKey="user">
                <NavIcon>
                <img src={user} className="auth__img-navicon" alt="" />
                 {/*    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                </NavIcon>
                <NavText>
                <span className="auth__nav-text">
                   USER
                   </span>
                </NavText>
            </NavItem>
            <NavItem eventKey="web">
                
                <NavIcon>
            {/*     <img src={comando} className="auth__img-navicon" alt="" /> */}
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                <span className="auth__nav-text"> 
                  WEB ACTION
                  </span>
                </NavText>
                
            </NavItem>
            <NavItem eventKey="graphs">
                <NavIcon>
                <img src={graph} className="auth__img-navicon" alt="" />
                  {/*   <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                </NavIcon>
                <NavText>
                <span className="auth__nav-text"> 
                  GRAPHS
                  </span>
                </NavText>
                
            </NavItem>
        </SideNav.Nav>
    </SideNav>
    <main>
    <InventiAppBar />
                <Route exact path="/web" component={inventiPrueba} />
                <Route exact path="/speed" component={SpeedScreen} />
            </main>
    </>
     )}
     />
 </Router>
    )
}
