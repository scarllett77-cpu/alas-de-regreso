import React from 'react';
import { Shield, ArrowRight, Anchor } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen text-white font-sans selection:bg-cyan-500/30" 
         style={{ background: 'radial-gradient(circle at top, #003049 0%, #01161e 50%, #020408 100%)' }}>
      
      {/* NAVEGACIÓN MINIMALISTA */}
      <nav className="p-8 flex justify-between items-center opacity-60">
        <span className="text-[10px] tracking-[0.6em] uppercase font-bold text-amber-500">Alas de Regreso</span>
        <Shield size={16} className="text-amber-500/50" />
      </nav>

      <main className="max-w-4xl mx-auto px-8 pt-20 pb-32">
        <div className="animate-fade-in space-y-24">
          
          {/* EL IMPACTO DEL ALMA */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-light leading-tight tracking-tight text-gray-100">
              No necesitas permiso para ser la <br/>
              <span className="italic font-serif text-amber-500/90">arquitecta de tu destino.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-cyan-200/40 font-light italic leading-relaxed max-w-xl border-l border-white/10 pl-8">
              "El azul no es un color, es la distancia que recorrimos para volver a casa."
            </p>
          </div>

          {/* ESTRUCTURA DE CRISTAL */}
          <div className="relative p-12 md:p-16 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Anchor size={40} />
            </div>
            
            <div className="space-y-10">
              <h2 className="text-2xl font-bold tracking-tight text-white/90">
                El Puente de Cristal
              </h2>
              
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light max-w-2xl">
                Bienvenida a una estructura diseñada para la plenitud. Aquí, la tecnología no nos reemplaza; nos proporciona el orden necesario para volar de regreso a nuestra esencia.
              </p>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                <button className="flex items-center gap-4 text-amber-500 hover:text-amber-400 font-bold uppercase tracking-[0.2em] text-xs transition-all group">
                  Cruzar el Puente <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
                <span className="text-[9px] text-gray-600 uppercase tracking-[0.4em] hidden md:block">
                  Sistema Activo • ADN Digital
                </span>
              </div>
            </div>
          </div>

          {/* EL ORIGEN (SUTIL) */}
          <div className="pt-12 text-center opacity-20 hover:opacity-100 transition-opacity duration-1000">
            <p className="text-[10px] tracking-[0.8em] uppercase text-cyan-500">Bahía de las Águilas</p>
            <p className="text-[9px] mt-2 text-gray-500 uppercase">Coordenadas del Regreso</p>
          </div>
        </div>
      </main>

      <footer className="p-12 text-center text-[9px] tracking-[0.3em] text-gray-700 uppercase">
        © 2026 Alas de Regreso RD • Tu estructura para volar.
      </footer>
    </div>
  );
}