import Footer from '@/components/valkem/Footer';
import IndustryAll from '@/components/valkem/IndustryAll';
import Navigation from '@/components/valkem/Navigation';
import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
  title: 'Industries',
  description: '',
};
const page = () => {
  return (
    <div>
      <Navigation />
      <IndustryAll />
      <Footer />
    </div>
  );
};

export default page;
