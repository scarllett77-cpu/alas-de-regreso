import React from 'react';
import { Shield, ArrowRight, Sparkles, Anchor } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen text-white font-sans selection:bg-amber-500/30" 
         style={{ background: 'radial-gradient(circle at top, #003b5c 0%, #011a27 45%, #020408 100%)' }}>
      
      {/* NAV: EL SILENCIO DEL PUENTE */}
      <nav className="p-10 flex justify-between items-center opacity-40 hover:opacity-100 transition-opacity duration-700">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
          <span className="text-[10px] tracking-[0.8em] uppercase font-light">Alas de Regreso</span>
        </div>
        <Shield size={18} className="text-amber-500/20" />
      </nav>

      <main className="max-w-5xl mx-auto px-10 pt-20 pb-40">
        <div className="animate-fade-in space-y-32">
          
          {/* EL IMPACTO INICIAL: ARQUITECTURA DEL DESTINO */}
          <section className="space-y-10">
            <h1 className="text-5xl md:text-7xl font-light leading-[1.1] tracking-tight text-gray-100">
              No necesitas permiso para ser la <br/>
              <span className="italic font-serif text-amber-500/90 drop-shadow-2xl">
                arquitecta de tu destino.
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-cyan-100/30 font-extralight italic leading-relaxed max-w-2xl border-l-2 border-amber-500/20 pl-10">
              "El azul no es un color, es la distancia que recorrimos para volver a casa."
            </p>
          </section>

          {/* LA DEFINICIÓN DE PLENITUD */}
          <section className="relative py-20 border-y border-white/5 group">
            <div className="absolute -left-10 top-0 text-[12rem] font-black opacity-[0.02] select-none text-cyan-400">
              PLENITUD
            </div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-bold tracking-tighter italic">El Puente de Cristal</h2>
                <p className="text-xl text-gray-400 font-light leading-relaxed">
                  Tu estructura hacia la <span className="text-white font-medium">plenitud</span> comienza aquí. 
                  Fusionamos la conectividad dorada de los circuitos con la transparencia del alma.
                </p>
                <div className="pt-4">
                  <button className="flex items-center gap-6 group text-amber-500 transition-all">
                    <span className="text-xs font-bold uppercase tracking-[0.4em]">Cruzar el Puente</span>
                    <div className="w-12 h-[1px] bg-amber-500/30 group-hover:w-20 transition-all"></div>
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>

              {/* LA ECUACIÓN ESTRATÉGICA ($B_a$) */}
              <div className="p-10 bg-white/[0.03] border border-white/10 rounded-3xl backdrop-blur-3xl space-y-6">
                <div className="flex items-center gap-3 text-amber-500/60 uppercase text-[10px] tracking-widest font-bold">
                  <Sparkles size={14} /> Ecuación del Bien Activo
                </div>
                <div className="text-3xl font-serif italic text-center py-6 text-gray-300">
                  Ba = (Ac + Vi × Ep) / Rv
                </div>
                <p className="text-[10px] text-gray-500 leading-relaxed text-center uppercase tracking-widest italic">
                  Aceptación • Visión • Escucha • Sin Victimismo
                </p>
              </div>
            </div>
          </section>

          {/* EL ORIGEN: BAHÍA DE LAS ÁGUILAS (SUTIL) */}
          <section className="text-center space-y-4 opacity-30 hover:opacity-100 transition-opacity duration-1000 cursor-default">
            <Anchor className="mx-auto text-cyan-600/50 mb-8" size={32} />
            <p className="text-xs tracking-[1em] uppercase text-cyan-400 font-bold">Bahía de las Águilas</p>
            <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em]">Las coordenadas de tu regreso al origen.</p>
          </section>

        </div>
      </main>

      <footer className="pb-20 text-center text-[10px] tracking-[0.5em] text-gray-800 uppercase font-bold">
        © 2026 Alas de Regreso RD • Tu estructura para volar.
      </footer>
    </div>
  );
}