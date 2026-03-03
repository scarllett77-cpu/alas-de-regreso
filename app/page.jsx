import React from 'react';
import { Shield, ArrowRight, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-amber-500/30 overflow-x-hidden">
      
      {/* EL FONDO INMERSIVO */}
      <div className="bg-plenitud" />

      {/* NAVEGACIÓN TRANSPARENTE */}
      <nav className="p-10 flex justify-between items-center bg-black/10 backdrop-blur-md sticky top-0 z-50 border-b border-white/5">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
          <span className="text-[10px] tracking-[0.8em] uppercase font-light">Alas de Regreso</span>
        </div>
        <Shield size={18} className="text-amber-500/20" />
      </nav>

      <main className="max-w-5xl mx-auto px-10 pt-32 pb-40 relative z-10">
        <div className="animate-fade-in space-y-32">
          
          {/* TEXTO FLOTANDO SOBRE EL AGUA */}
          <section className="space-y-12">
            <h1 className="text-5xl md:text-8xl font-light leading-tight tracking-tighter text-gray-100">
              No necesitas permiso para ser la <br/>
              <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-100 drop-shadow-2xl">
                arquitecta de tu destino.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-cyan-100/40 font-extralight italic leading-relaxed max-w-2xl border-l border-amber-500/30 pl-10">
              "El azul no es un color, es la distancia que recorrimos para volver a casa."
            </p>
          </section>

          {/* LA ESTRUCTURA DE CRISTAL (GLASSMORPHISM) */}
          <section className="p-12 md:p-20 bg-black/40 border border-white/10 rounded-[3rem] backdrop-blur-2xl shadow-2xl space-y-10">
            <h2 className="text-3xl font-bold tracking-tight text-white/90">El Puente de Cristal</h2>
            <p className="text-xl text-gray-300 font-light leading-relaxed max-w-3xl">
              Aquí, la tecnología es la estructura que devuelve la humanidad. Tu regreso a la plenitud no es un viaje físico, es el ordenamiento de tu ADN digital.
            </p>
            
            <button className="flex items-center gap-6 group text-amber-500 transition-all pt-6">
              <span className="text-xs font-bold uppercase tracking-[0.4em]">Cruzar el Puente</span>
              <div className="w-12 h-[1px] bg-amber-500/30 group-hover:w-20 transition-all"></div>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </section>

          {/* LA ECUACIÓN SUTIL */}
          <div className="pt-20 text-center opacity-20 hover:opacity-100 transition-opacity duration-1000">
            <div className="text-2xl font-serif italic text-gray-400 mb-4">
              Ba = (Ac + Vi × Ep) / Rv
            </div>
            <p className="text-[9px] tracking-[0.5em] uppercase text-amber-500">Bien Activo • Sistema de Plenitud</p>
          </div>
        </div>
      </main>

      <footer className="py-20 text-center text-[9px] tracking-[0.5em] text-gray-700 uppercase">
        © 2026 Alas de Regreso RD • Estructura para Volar.
      </footer>
    </div>
  );
}