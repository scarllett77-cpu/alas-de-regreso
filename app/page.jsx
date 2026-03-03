import React from 'react';
import { Shield, Sparkles, Layout, ArrowRight, Waves } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen text-white font-sans selection:bg-cyan-500/30" 
         style={{ background: 'radial-gradient(circle at top, #003851 0%, #020408 100%)' }}>
      
      {/* NAVEGACIÓN TRANSPARENTE */}
      <nav className="border-b border-white/10 bg-black/20 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              <Shield className="text-black" size={24} />
            </div>
            <span className="text-xl font-bold tracking-tighter text-amber-500 uppercase">
              Alas de Regreso RD
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
            <span className="hover:text-cyan-400 cursor-pointer transition-colors">El Puente</span>
            <span className="hover:text-cyan-400 cursor-pointer transition-colors">La Tribu</span>
            <span className="hover:text-amber-500 cursor-pointer transition-colors italic font-serif">El Libro</span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-20 pb-32">
        {/* POESÍA DEL ORIGEN: BAHÍA DE LAS ÁGUILAS */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-6">
            <Waves size={14} /> Dominicana • El Origen
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">
            Bahía de las <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 via-cyan-500 to-blue-700">
              Águilas
            </span>
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto font-light italic leading-relaxed">
            "El azul no es un color, es la distancia que recorrimos <br className="hidden md:block"/> para volver a casa."
          </p>
        </div>

        {/* EL PUENTE DE CRISTAL (CONTENEDOR MAESTRO) */}
        <div className="relative group max-w-5xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-amber-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative bg-black/60 border border-white/10 rounded-3xl p-10 md:p-20 backdrop-blur-xl">
            <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
              No necesitas permiso para ser la <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 font-serif italic">
                arquitecta de tu destino.
              </span>
            </h3>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-12 border-l-4 border-amber-500 pl-8">
              Tu estructura hacia la plenitud comienza aquí. En este <span className="text-white font-semibold">Puente de Cristal</span>, 
              fusionamos la conectividad dorada de los circuitos con la transparencia de 
              nuestra esencia dominicana. Bienvenida a la tribu de los despiertos.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-start">
              <button className="px-10 py-5 bg-amber-500 hover:bg-amber-400 text-black font-black rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-[0_15px_30px_rgba(245,158,11,0.3)] uppercase tracking-widest text-sm">
                Cruzar el Puente <ArrowRight size={20} />
              </button>
              <button className="px-10 py-5 bg-transparent border border-white/20 hover:border-cyan-500/50 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-sm">
                Nuestra Tesis
              </button>
            </div>
          </div>
        </div>

        {/* PILARES: ADN DIGITAL */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          {[
            { title: "Ala Tecnológica", desc: "La IA como estructura inamovible para nuestra innovación.", icon: <Layout className="text-cyan-400" /> },
            { title: "El Puente", desc: "Conexión real entre la diáspora y la geografía del alma.", icon: <Sparkles className="text-amber-500" /> },
            { title: "Transparencia", desc: "La claridad del cristal en cada uno de nuestros procesos.", icon: <Shield className="text-cyan-400" /> }
          ].map((item, idx) => (
            <div key={idx} className="p-10 border border-white/5 bg-white/[0.02] rounded-2xl hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all duration-500 group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="text-xl font-bold mb-3 text-white">{item.title}</h4>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-white/5 py-16 text-center">
        <p className="text-gray-600 text-sm tracking-[0.3em] uppercase mb-2">Alas de Regreso RD</p>
        <p className="text-gray-400 font-serif italic">"Tus alas ya están listas; solo necesitaban una estructura."</p>
      </footer>
    </div>
  );
}