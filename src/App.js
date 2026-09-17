import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Daraz Clone</h1>
        <p>Welcome to the Daraz Clone E-commerce Platform</p>
      </header>
      <main>
        <section className="hero">
          <h2>Shop the Best Deals</h2>
          <p>Find amazing products at unbeatable prices</p>
        </section>
      </main>
      <Analytics />
    </div>
  );
}

export default App;
