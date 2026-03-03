import React from 'react';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#020408', color: 'white', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#f59e0b', fontSize: '3rem', marginBottom: '1rem' }}>ALAS DE REGRESO RD</h1>
      <p style={{ fontSize: '1.5rem', maxWidth: '600px' }}>
        El Puente de Cristal está en construcción. <br />
        Tu estructura hacia la plenitud comienza aquí.
      </p>
      <div style={{ marginTop: '2rem', padding: '10px 20px', border: '1px solid #f59e0b', color: '#f59e0b' }}>
        SISTEMA ACTIVO
      </div>
    </div>
  );
}