import React from 'react';
import { HomeFooter } from './HomeFooter';
import { HomeNavbar } from './HomeNavbar';
import { HomePortada } from './HomePortada';
import { HomeSection } from './HomeSection';
import { HomeSection1 } from './HomeSection1';
import { HomeSection2 } from './HomeSection2';
import { HomeSection3 } from './HomeSection3';
import { HomeSection4 } from './HomeSection4';
import { HomeSection5 } from './HomeSection5';
import { HomeSection6 } from './HomeSection6';
import { HomeSection7 } from './HomeSection7';


export const HomeScreen = () => {
    return (
        <div>
            <HomeNavbar />
            <HomePortada />
            <HomeSection />
            <HomeSection3 />
            <HomeSection2 />
            <HomeSection4 />
            <HomeSection7 />
            <HomeSection1 />
            <HomeSection5 />
            <HomeSection6 />
            <HomeFooter />


        </div>
    )
}
