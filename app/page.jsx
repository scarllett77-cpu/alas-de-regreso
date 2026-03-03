import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020408] text-slate-200 font-sans selection:bg-amber-500/30">
      
      {/* --- Navegación Minimalista --- */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto border-b border-slate-800/50">
        <div className="text-xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent italic">
          ALAS DE REGRESO RD
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400 tracking-wide">
          <a href="#" className="hover:text-amber-400 transition-colors uppercase">El Puente</a>
          <a href="#" className="hover:text-amber-400 transition-colors uppercase">El Centinela</a>
          <a href="#" className="hover:text-amber-400 transition-colors uppercase">La Cooperativa</a>
        </div>
      </nav>

      {/* --- SECCIÓN UNO: El Umbral hacia la Plenitud --- */}
      <main className="max-w-7xl mx-auto px-6 py-20 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Columna Izquierda: Mensaje Estratégico */}
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-block px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-xs font-bold tracking-[0.2em] uppercase">
            Estructura hacia la Plenitud
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] text-white tracking-tight">
            Tu presencia inteligente <br /> 
            <span className="bg-gradient-to-r from-blue-400 via-slate-200 to-amber-500 bg-clip-text text-transparent">
              en tu propia tierra.
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-lg leading-relaxed font-light">
            Fusionamos la potencia de la IA con la calidez de nuestra comunidad. 
            Somos tus ojos, tus oídos y tu brazo derecho en República Dominicana, 
            mientras tú preparas tus alas para el regreso.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 pt-6">
            <button className="px-10 py-4 bg-amber-500 text-black font-extrabold rounded-xl hover:bg-amber-400 transition-all hover:scale-105 shadow-[0_0_30px_rgba(245,158,11,0.25)]">
              Quiero Volver (El Puente)
            </button>
            <button className="px-10 py-4 bg-slate-900/50 border border-slate-700 text-white font-bold rounded-xl hover:bg-slate-800 transition-all backdrop-blur-md hover:border-blue-400/50">
              Estoy Lejos (El Centinela)
            </button>
          </div>
        </div>

        {/* Columna Derecha: El Centinela de Cristal (Identidad Visual) */}
        <div className="relative group animate-in fade-in zoom-in duration-1000 delay-200">
          {/* Aura de Fondo */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 via-amber-500/10 to-transparent rounded-[3rem] blur-3xl group-hover:opacity-60 transition duration-1000"></div>
          
          {/* Contenedor de Cristal */}
          <div className="relative aspect-square rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl flex items-center justify-center overflow-hidden shadow-2xl">
            
            {/* Simulación de Pulso de Conectividad */}
            <div className="absolute w-[80%] h-[80%] border border-amber-500/10 rounded-full animate-[ping_4s_infinite] opacity-30"></div>
            <div className="absolute w-[60%] h-[60%] border border-blue-400/10 rounded-full animate-[ping_6s_infinite] opacity-20"></div>
            
            <div className="text-center p-10 z-10">
              <div className="text-7xl mb-6 drop-shadow-2xl">🛡️</div>
              <h3 className="text-3xl font-bold text-white mb-3 tracking-tight text-shadow-sm">
                El Centinela de Cristal
              </h3>
              <p className="text-amber-400/80 text-lg font-medium italic tracking-wide">
                "Tus ojos y oídos en casa"
              </p>
              
              {/* Indicadores de Actividad IA */}
              <div className="flex justify-center gap-3 mt-8">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className={`w-2.5 h-2.5 bg-amber-500 rounded-full animate-pulse`} 
                       style={{ animationDelay: `${i * 0.2}s` }}></div>
                ))}
              </div>
            </div>
            
            {/* Textura de Cristal inferior */}
            <div className="absolute bottom-0 w-full p-4 bg-white/5 border-t border-white/5 text-center">
              <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">
                Sistema Operativo Alas v1.0
              </span>
            </div>
          </div>
        </div>

      </main>

      {/* --- Pie de Página --- */}
      <footer className="py-12 text-center border-t border-slate-900/80">
        <p className="text-slate-500 text-sm tracking-widest font-light">
          &copy; 2026 ALAS DE REGRESO RD. <br />
          <span className="text-slate-600 mt-2 block">LA TECNOLOGÍA COMO ESTRUCTURA PARA LA HUMANIDAD.</span>
        </p>
      </footer>
    </div>
  );
}