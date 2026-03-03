import React from 'react';
import { Shield, Sparkles, Layout, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020408] text-white font-sans selection:bg-amber-500/30">
      {/* EL ENCABEZADO (NAV) */}
      <nav className="border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.4)]">
              <Shield className="text-black" size={24} />
            </div>
            <span className="text-xl font-bold tracking-tighter text-amber-500">
              ALAS DE REGRESO RD
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400 uppercase tracking-widest">
            <span className="hover:text-amber-500 cursor-pointer transition-colors">El Puente</span>
            <span className="hover:text-amber-500 cursor-pointer transition-colors">La Tribu</span>
            <span className="hover:text-amber-500 cursor-pointer transition-colors">ADN Digital</span>
          </div>
        </div>
      </nav>

      {/* SECCIÓN HERO (EL CENTINELA) */}
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-32">
        <div className="relative group">
          {/* Efecto de resplandor de fondo */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative bg-black/40 border border-white/10 rounded-2xl p-8 md:p-16 backdrop-blur-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-widest mb-8">
              <Sparkles size={14} />
              Sistema Activo • V.1.0
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
              La tecnología es la <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
                estructura para volar.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed mb-12">
              Bienvenida al <span className="text-white font-semibold italic">Puente de Cristal</span>. 
              Aquí, la inteligencia artificial y la humanidad convergen para devolverte tu esencia. 
              Tus alas ya están listas; solo necesitaban una estructura.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(245,158,11,0.3)]">
                CRUZAR EL PUENTE <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 bg-transparent border border-white/20 hover:border-amber-500/50 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2">
                NUESTRA TESIS
              </button>
            </div>
          </div>
        </div>

        {/* LAS TRES ALAS (CARACTERÍSTICAS) */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          {[
            { title: "Ala Tecnológica", desc: "IA y estructura digital para la diáspora.", icon: <Layout className="text-amber-500" /> },
            { title: "El Puente", desc: "Conectando almas dominicanas con su origen.", icon: <Sparkles className="text-amber-500" /> },
            { title: "Transparencia", desc: "La claridad del cristal en cada proceso.", icon: <Shield className="text-amber-500" /> }
          ].map((item, idx) => (
            <div key={idx} className="p-8 border border-white/5 bg-white/[0.02] rounded-xl hover:border-amber-500/30 transition-colors">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-white/5 py-12 text-center text-gray-600 text-sm">
        <p>© 2026 ALAS DE REGRESO RD • El Puente de Cristal</p>
      </footer>
    </div>
  );
}