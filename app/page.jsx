import React from 'react';
import { Shield, ArrowRight, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white font-sans overflow-x-hidden">
      
      {/* FONDO DE PORTADA */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url('/portada.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10">
        <nav className="p-8 flex justify-between items-center bg-black/40 backdrop-blur-md border-b border-white/5">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
            <span className="text-[10px] tracking-[0.8em] uppercase font-bold text-gray-200">Alas de Regreso</span>
          </div>
          <Shield size={18} className="text-amber-500/30" />
        </nav>

        <main className="max-w-4xl mx-auto px-8 pt-24 pb-40">
          <div className="space-y-24">
            
            <section className="space-y-10">
              <h1 className="text-4xl md:text-7xl font-light leading-tight tracking-tighter">
                No necesitas permiso para ser la <br/>
                <span className="italic font-serif text-amber-500">arquitecta de tu destino.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 font-light italic border-l-2 border-amber-500/20 pl-8 max-w-xl">
                "El azul no es un color, es la distancia que recorrimos para volver a casa."
              </p>
            </section>

            <section className="p-10 md:p-16 bg-black/70 border border-white/10 rounded-2xl backdrop-blur-xl space-y-8">
              <div className="flex items-center gap-3 text-amber-500 uppercase text-[10px] tracking-widest font-bold">
                <Sparkles size={14} /> El Puente de Cristal
              </div>
              <p className="text-xl text-gray-200 font-light leading-relaxed">
                La tecnología nos proporciona la estructura necesaria para recuperar nuestra esencia.
              </p>
              <button className="flex items-center gap-4 bg-amber-600 hover:bg-amber-500 text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all">
                Cruzar el Puente <ArrowRight size={16} />
              </button>
            </section>

            {/* ECUACIÓN EN TEXTO PLANO PARA EVITAR ERRORES */}
            <div className="text-center opacity-40">
              <div className="text-xl font-serif italic mb-2">
                Ba = (Ac + Vi * Ep) / Rv
              </div>
              <p className="text-[8px] tracking-[0.4em] uppercase text-gray-500">ADN Digital • Estructura de Vuelo</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}