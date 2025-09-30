'use client';
import * as React from 'react';
import Divider from '@mui/material/Divider';
import AppAppBar from '../components/AppAppBar';
import Hero from './components/marketing/Hero';
import LogoCollection from './components/marketing/LogoCollection';
import Highlights from './components/marketing/Highlights';
import Pricing from './components/marketing/Pricing';
import Features from './components/marketing/Features';
import Testimonials from './components/marketing/Testimonials';
import FAQ from './components/marketing/FAQ';
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
