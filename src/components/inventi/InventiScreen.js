import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import speedometer from '../../styles/img/speedometer.svg';
import info from '../../styles/img/info.svg';
import user from '../../styles/img/user.svg';
import comando from '../../styles/img/comando.svg';
import graph from '../../styles/img/graph.svg';

import cdr from '../../styles/img/cdr.svg';
import chat from '../../styles/img/chat.svg';
import favicon from '../../styles/img/favicon.ico';
import report from '../../styles/img/report.svg';
import report1 from '../../styles/img/report1.svg';
import sendEmail from '../../styles/img/sendEmail.svg';
import user2 from '../../styles/img/user2.svg';
import user1 from '../../styles/img/user1.svg';
import todo from '../../styles/img/todo.svg';
import users from '../../styles/img/users.svg';
import remote from '../../styles/img/remote.svg';
import mapCall from '../../styles/img/mapCall.svg';
import whatsapp from '../../styles/img/whatsapp.svg';
import audio from '../../styles/img/audio.svg';
import health from '../../styles/img/health.svg';
import inventory from '../../styles/img/inventory.svg';

import {  BrowserRouter as Router /* HashRouter as Router */, Route, useHistory, useLocation, NavLink} from 'react-router-dom'
 
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { LoadScreen } from '../load/LoadScreen';
import { inventiPrueba } from './inventiPrueba';
import { InventiAppBar } from './InventiAppBar';
import { SpeedScreen } from '../speed/SpeedScreen';
import { TicketScreen } from '../ticket/TicketScreen';
import { TicketReporte } from '../ticket/TicketReporte';
import { TodoApp } from '../todo/TodoApp';

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
            <NavItem eventKey="tickets">
                <NavIcon>
                <img src={favicon} className="auth__img-navicon" alt="" />
                  {/*   <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                </NavIcon>
                <NavText>
                <span className="auth__nav-text"> 
                  TICKETS
                  </span>
                </NavText>
                
            </NavItem>
            <NavItem eventKey="todo">
                <NavIcon>
                <img src={todo} className="auth__img-navicon" alt="" />
                  {/*   <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                </NavIcon>
                <NavText>
                <span className="auth__nav-text"> 
                  TODO
                  </span>
                </NavText>
                
            </NavItem>
            <NavItem eventKey="users">
                <NavIcon>
                <img src={users} className="auth__img-navicon" alt="" />
                  {/*   <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                </NavIcon>
                <NavText>
                <span className="auth__nav-text"> 
                  USERS DB
                  </span>
                </NavText>
                
            </NavItem>
            <NavItem eventKey="cdr">
                <NavIcon>
                <img src={cdr} className="auth__img-navicon" alt="" />
                  {/*   <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                </NavIcon>
                <NavText>
                <span className="auth__nav-text"> 
                  CDR
                  </span>
                </NavText>
                
            </NavItem>
            <NavItem eventKey="settings">
                <NavIcon>
                <img src={user1} className="auth__img-navicon" alt="" />
                  {/*   <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                </NavIcon>
                <NavText>
                <span className="auth__nav-text"> 
                  SETTINGS
                  </span>
                </NavText>
                
            </NavItem>
            <NavItem eventKey="send">
                <NavIcon>
                <img src={sendEmail} className="auth__img-navicon" alt="" />
                  {/*   <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                </NavIcon>
                <NavText>
                <span className="auth__nav-text"> 
                  ENVÍO
                  </span>
                </NavText>
                
            </NavItem>
            <NavItem eventKey="chat">
                <NavIcon>
                <img src={chat} className="auth__img-navicon" alt="" />
                  {/*   <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                </NavIcon>
                <NavText>
                <span className="auth__nav-text"> 
                  CHAT
                  </span>
                </NavText>
                
            </NavItem>
            <NavItem eventKey="reports">
                <NavIcon>
                <img src={report1} className="auth__img-navicon" alt="" />
                  {/*   <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                </NavIcon>
                <NavText>
                <span className="auth__nav-text"> 
                  REPORTS
                  </span>
                </NavText>
                
            </NavItem>
            <NavItem eventKey="call">
                <NavIcon>
                <img src={mapCall} className="auth__img-navicon" alt="" />
                  {/*   <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                </NavIcon>
                <NavText>
                <span className="auth__nav-text"> 
                  MAP CALL
                  </span>
                </NavText>
                
            </NavItem>
            <NavItem eventKey="whatsapp">
                <NavIcon>
                <img src={whatsapp} className="auth__img-navicon" alt="" />
                  {/*   <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                </NavIcon>
                <NavText>
                <span className="auth__nav-text"> 
                  WHATSAPP
                  </span>
                </NavText>
                
            </NavItem>
            <NavItem eventKey="inventory">
                <NavIcon>
                <img src={inventory} className="auth__img-navicon" alt="" />
                  {/*   <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                </NavIcon>
                <NavText>
                <span className="auth__nav-text"> 
                  INVENTORY
                  </span>
                </NavText>
                
            </NavItem>
            <NavItem eventKey="convert">
                <NavIcon>
                <img src={audio} className="auth__img-navicon" alt="" />
                  {/*   <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                </NavIcon>
                <NavText>
                <span className="auth__nav-text"> 
                  CONVERT AUDIO
                  </span>
                </NavText>
                
            </NavItem>
            <NavItem eventKey="health">
                <NavIcon>
                <img src={health} className="auth__img-navicon" alt="" />
                  {/*   <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                </NavIcon>
                <NavText>
                <span className="auth__nav-text"> 
                  HEALTH PC
                  </span>
                </NavText>
                
            </NavItem>
        </SideNav.Nav>
    </SideNav>
    <main>
    <InventiAppBar />
                <Route exact path="/web" component={inventiPrueba} />
                <Route exact path="/speed" component={SpeedScreen} />
                <Route exact path="/tickets" component={TicketScreen} />
                <Route exact path="/todo" component={TodoApp} />
               {/*  <Route exact path="/tickets/reporteTickets" component={TicketReporte} /> */}
            </main>
            
    </>
     )}
     />
 </Router>
    )
}
