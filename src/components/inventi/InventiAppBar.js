import React, { useEffect, useState } from 'react';
import Dropdown, {
    DropdownToggle,
    DropdownMenu,
    DropdownMenuWrapper,
    MenuItem,
    
    DropdownButton
} from '@trendmicro/react-dropdown';
import man from '../../styles/img/man.svg';
import sun from '../../styles/img/sun.svg';
import luna from '../../styles/img/luna.svg'

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';
import { useDispatch, useSelector } from 'react-redux';
import {startLogout} from '../../actions/auth'


export const InventiAppBar = () => {

    const {name} = useSelector( state => state.auth  );
    const dispatch = useDispatch();



    const [huawei, sethuawei] = useState({})


    useEffect(() => {
      fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=599V8N2RDZWH&format=json&by=position&lat=-9.189967&lng=-75.015152`)
      .then(res => res.json())
      .then(data => sethuawei( data ));
    }, [])
    const toTimestamp=(strDate)=>{
        var datum = Date.parse(strDate);
        return datum/1000;
     }
    let d=toTimestamp(huawei.formatted)
    let date = new Date(d * 1000);
    let hour=date.getHours();
    let minutes = date.getMinutes();
    let month=date.getMonth();
    let day=date.getDate();
    let year=date.getFullYear();
    /* console.log(name.toUpperCase()); */

    const setMonth=()=>{
        switch (month) {
            case 0:
                return "ene" ;   
                case 1:
                return "feb" ;    
                case 2:
                return "mar" ;    
                case 3:
                return "abr" ;    
                case 4:
                return "may" ;    
                case 5:
                return "jun" ;    
                case 6:
                return "jul" ;    
                case 7:
                return "ago" ;    
                case 8:
                return "sep" ;    
                case 9:
                return "oct" ;    
                case 10:
                return "nov" ;    
                case 11:
                return "dic" ;           
        
        
            default:
                return "equivocado";
        }
    }
    const handleLogout=()=>{
        /* console.log(`click`); */
        dispatch(startLogout());
            }


    return (
        <div className="inventi__appbar">
           <div className="inventi__appbar-secondary">

           </div>
           <div className="inventi__appbar-third">
                <div></div>
                 <div className="inventi_date">
               {/*      <img src={luna} width="25px"/> */}
                    {
                        (hour>6 && hour < 18) ? (<img src={sun} width="25px"/>) : (<img src={luna} width="25px"/>)
                    }
                    <div >
                    <div className="inventi__date-font">{ `${day} ${setMonth()} ${year}`}</div>
                <div className="inventi_date-hour">LIMA, {`${hour}:${minutes}`}</div>
                    </div>
               
                    </div>
                <div className="inventi_user">
                    <img src={man} width="40px"/>

                    

                    <div className="inventi__displayname">
                    <div className="inventi__username">{name.toUpperCase()}</div>
                   
                
                
                    </div>
                    
             
                </div>
                
                <div>
                <Dropdown
    onSelect={(eventKey) => {
    }}
    autoOpen="true"
>
    <Dropdown.Toggle
        btnStyle="flat"
        className="inventi__flat"
    >
        
    </Dropdown.Toggle>
    <Dropdown.Menu   className="inventi__flat-menu">
        <MenuItem header>Session</MenuItem>
        <MenuItem eventKey={1} onClick={handleLogout}>Logout</MenuItem>
        <MenuItem divider />
        <MenuItem header>Globals</MenuItem>
        <MenuItem eventKey={2}>Settings</MenuItem>
     {/*    <MenuItem eventKey={3} disabled>disabled</MenuItem>
        <MenuItem
            eventKey={4}
            title="link with title"
        >
            link with title
        </MenuItem>
        <MenuItem
            eventKey={5}
            active
            onSelect={(eventKey) => {
                alert(`Alert from menu item.\neventKey: ${eventKey}`);
            }}
        >
            link that alerts
        </MenuItem> */}
    </Dropdown.Menu>
</Dropdown>
                </div>
                
              
                <div>
                    
                </div>
           </div>
        </div>
    )
}
