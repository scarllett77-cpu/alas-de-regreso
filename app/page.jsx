import React from 'react';
import { Shield, ArrowRight, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-amber-500/30 overflow-x-hidden">
      
      {/* EL FONDO: ALA DE CRISTAL Y MAPA */}
      <div className="bg-portada" />

      {/* NAVEGACIÓN COMPACTA */}
      <nav className="p-8 flex justify-between items-center bg-black/40 backdrop-blur-md sticky top-0 z-50 border-b border-white/5">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-amber-500"></div>
          <span className="text-[10px] tracking-[0.8em] uppercase font-bold text-gray-200">Alas de Regreso</span>
        </div>
        <Shield size={18} className="text-amber-500/40" />
      </nav>

      <main className="max-w-4xl mx-auto px-8 pt-24 pb-40 relative z-10">
        <div className="animate-fade-in space-y-24">
          
          {/* CABECERA: TU TESIS */}
          <section className="space-y-10 text-center md:text-left">
            <h1 className="text-4xl md:text-7xl font-light leading-tight tracking-tighter text-gray-100">
              No necesitas permiso para ser la <br/>
              <span className="italic font-serif text-amber-500/90">arquitecta de tu destino.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 font-light italic leading-relaxed max-w-xl border-l-2 border-amber-500/20 pl-8 mx-auto md:mx-0">
              "El azul no es un color, es la distancia que recorrimos para volver a casa."
            </p>
          </section>

          {/* BLOQUE FUNCIONAL: EL PUENTE */}
          <section className="p-10 md:p-16 bg-black/60 border border-white/10 rounded-2xl backdrop-blur-xl shadow-2xl space-y-8">
            <div className="flex items-center gap-3 text-amber-500/80 uppercase text-[10px] tracking-widest font-bold">
              <Sparkles size={14} /> El Puente de Cristal
            </div>
            
            <p className="text-xl text-gray-200 font-light leading-relaxed">
              La tecnología nos proporciona la estructura necesaria para recuperar nuestra esencia. Bienvenida al sistema diseñado para tu plenitud.
            </p>
            
            {/* BOTÓN DE ACCIÓN */}
            <div className="pt-6">
              <button className="flex items-center gap-4 bg-amber-600 hover:bg-amber-500 text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all transform hover:scale-105">
                Cruzar el Puente <ArrowRight size={16} />
              </button>
            </div>
          </section>

          {/* LA ECUACIÓN MAESTRA */}
          <div className="text-center opacity-40">
            <div className="text-xl font-serif italic text-gray-300 mb-2">
              Ba = (Ac + Vi × Ep) / Rv
            </div>
            <p className="text-[8px] tracking-[0.4em] uppercase text-gray-500">ADN Digital • Estructura de Vuelo</p>
          </div>
        </div>
      </main>

      <footer className="py-12 text-center text-[9px] tracking-[0.4em] text-gray-600 uppercase">
        © 2026 Alas de Regreso RD
      </footer>
    </div>
  );
}