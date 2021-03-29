import React from 'react';
import { HomeFooter } from './HomeFooter';
import { HomeNavbar } from './HomeNavbar';
import { HomePortada } from './HomePortada';
import { HomeSection } from './HomeSection';
import { HomeSection1 } from './HomeSection1';
import { HomeSection2 } from './HomeSection2';

export const HomeScreen = () => {
    return (
        <div>
            <HomeNavbar />
            <HomePortada />
            <HomeSection />
            <HomeSection2 />
            <HomeSection1 />
            <HomeFooter />


        </div>
    )
}
