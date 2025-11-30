import React from 'react';
import { Header } from '../components/Header';
import { SpiritZone } from '../components/SpiritZone';
import { CollectionsRow } from '../components/CollectionsRow';

export const Home: React.FC = () => {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* 1. THE WORLD ZONE (Background Layer) */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0, width: '100%', height: '100vh',
        backgroundImage: "url('https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=2560&auto=format&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0,
        boxShadow: 'inset 0 0 0 2000px rgba(5, 12, 25, 0.4)' // The tint
      }} />

      {/* 2. THE UI LAYER */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Header />
        
        {/* SpiritZone is now just the content column */}
        <SpiritZone />
        
        <section style={{ paddingBottom: '60px' }}>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '2.5rem', 
            marginBottom: '40px',
            fontFamily: 'Oswald',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            Collections
          </h2>
          <CollectionsRow />
        </section>
      </div>

    </main>
  );
};