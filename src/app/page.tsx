'use client';
import * as React from 'react';
import Divider from '@mui/material/Divider';
import AppAppBar from '../components/AppAppBar';
import Hero from './marketing/Hero';
import LogoCollection from './marketing/LogoCollection';
import Highlights from './marketing/Highlights';
import Pricing from './marketing/Pricing';
import Features from './marketing/Features';
import Testimonials from './marketing/Testimonials';
import FAQ from './marketing/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <React.Fragment>
      <AppAppBar useNextLinks={true} />
      <Hero />
      <div>
        <LogoCollection />
        <Features />
      </div>
      <Divider />
      <div>
        <Testimonials />
      </div>
      <Divider />
      <div>
        <Highlights />
      </div>
      <Divider />
      <div>
        <Pricing />
      </div>
      <Divider />
      <div>
        <FAQ />
      </div>
      <Divider />
      <Footer />
    </React.Fragment>
  );
}
