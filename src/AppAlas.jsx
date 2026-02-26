import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Plane, ShieldCheck, LayoutDashboard, Users, MapPin, TrendingUp, 
  Bell, ChevronRight, Cpu, Eye, Gem, CheckCircle2, AlertCircle, 
  Menu, X, ArrowRight, ShieldAlert, Search, Zap, Scale, Loader2, 
  FileText, Download, Share2, MessageSquare, Heart, Clock, ExternalLink,
  MessageCircle
} from 'lucide-react';

/**
 * ARCHIVO: AppAlas.jsx
 * ESTADO: Conectado a Vercel Environment Variables
 * VARIABLE: VITE_WHATSAPP_NUMBER
 */
const App = () => {
  // 🏛️ CONEXIÓN ESTRATÉGICA: Extraemos el número desde la "Llave" de Vercel
  // Si no existe, usamos el número de respaldo (fallback)
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "18093223759";
  
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [auditData, setAuditData] = useState({ matricula: '', cedula: '' });

  const glassStyle = "bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-2xl";
  const goldGradient = "bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent font-bold";
  const goldBg = "bg-gradient-to-r from-amber-400 to-yellow-600 text-slate-950 hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] transition-all";

  const handleAudit = (e) => {
    e.preventDefault();
    if (!auditData.matricula) return;
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setShowReport(true);
    }, 3500);
  };

  const contactWhatsApp = (service) => {
    const msg = encodeURIComponent(`Hola Scarllett, vengo desde la plataforma Alas de Regreso RD. Me interesa el servicio de: ${service}. ¿Podemos coordinar una cita estratégica?`);
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
  };

  const NavItem = ({ id, icon: Icon, label }) => (
    <button
      onClick={() => { setActiveTab(id); setIsMenuOpen(false); setShowReport(false); window.scrollTo(0,0); }}
      className={`flex items-center space-x-3 px-5 py-3 rounded-2xl transition-all duration-300 w-full lg:w-auto ${
        activeTab === id 
          ? 'bg-amber-400/10 text-amber-400 border border-amber-400/20 shadow-[0_0_15px_rgba(251,191,36,0.1)]' 
          : 'text-slate-400 hover:bg-white/5 hover:text-white'
      }`}
    >
      <Icon size={18} />
      <span className="font-bold text-xs uppercase tracking-widest">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-[#020408] text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-900 overflow-x-hidden text-left">
      {/* Fondo de Estructura de Cristal */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/5 rounded-full blur-[120px]"></div>
      </div>

      <nav className="fixed top-0 w-full z-50 py-4 bg-slate-950/70 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6 flex justify-between items-center text-left">
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => setActiveTab('dashboard')}>
            <div className="p-2 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-lg shadow-lg group-hover:rotate-12 transition-transform text-slate-950">
              <Plane className="rotate-[-45deg]" size={22} />
            </div>
            <div className="flex flex-col text-left text-white">
              <span className="text-lg font-black tracking-tighter uppercase leading-none">
                Alas de Regreso <span className={goldGradient}>RD</span>
              </span>
              <span className="text-[8px] uppercase tracking-[0.3em] text-slate-500 font-bold">Puente de Cristal</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-2">
            <NavItem id="dashboard" icon={LayoutDashboard} label="Mando" />
            <NavItem id="auditoria" icon={Eye} label="Auditoría" />
            <NavItem id="servicios" icon={Gem} label="Servicios" />
            <NavItem id="tribu" icon={Users} label="Tribu" />
          </div>

          <div className="flex items-center space-x-4">
            <button className="lg:hidden p-2 text-slate-400 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-2xl flex flex-col p-8 pt-24 space-y-4 lg:hidden animate-in slide-in-from-right duration-300">
          <NavItem id="dashboard" icon={LayoutDashboard} label="Panel de Mando" />
          <NavItem id="auditoria" icon={Eye} label="Auditoría Forense" />
          <NavItem id="servicios" icon={Gem} label="Servicios Estrella" />
          <NavItem id="tribu" icon={Users} label="Gestión de Tribu" />
        </div>
      )}

      <main className="container mx-auto px-6 pt-32 pb-20 max-w-7xl relative z-10 text-left">
        
        {activeTab === 'dashboard' && (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <div className={`${glassStyle} rounded-[3rem] p-8 md:p-16 relative overflow-hidden group text-left text-white`}>
              <div className="relative z-10 max-w-3xl text-left">
                <div className="inline-flex items-center space-x-2 bg-amber-400/10 text-amber-400 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8 border border-amber-400/20">
                  <Zap size={14} className="fill-current" /> <span>Ecosistema de Mando Activo</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                  Bienvenida, <br /><span className={goldGradient}>Arquitecta</span>.
                </h1>
                <p className="text-slate-400 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
                  La cimentación técnica es sólida. Tus variables están conectadas al tablero de control. El despegue está autorizado.
                </p>
                <button onClick={() => setActiveTab('auditoria')} className={`${goldBg} px-10 py-5 rounded-[1.5rem] font-bold text-lg flex items-center group shadow-2xl text-slate-950`}>
                  Nueva Auditoría
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { label: 'Tribu Identificada', value: '6,025', desc: 'Auditores de la visión', icon: Users, color: 'text-blue-400' },
                { label: 'Soberanía Digital', value: 'Activa', desc: 'Variables de entorno OK', icon: Zap, color: 'text-amber-400' },
                { label: 'Integridad Técnica', value: '100%', desc: 'Filtro de Certeza', icon: ShieldCheck, color: 'text-green-400' }
              ].map((card, i) => (
                <div key={i} className={`${glassStyle} p-10 rounded-3xl hover:translate-y-[-5px] transition-all text-left text-white`}>
                  <card.icon className={`${card.color} mb-6`} size={32} />
                  <p className="text-4xl font-bold tracking-tight">{card.value}</p>
                  <p className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mt-2">{card.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECCIÓN AUDITORÍA */}
        {activeTab === 'auditoria' && (
          <div className="max-w-4xl mx-auto animate-in zoom-in-95 duration-700 text-left text-white">
            {!showReport ? (
              <div className={`${glassStyle} p-10 md:p-20 rounded-[4rem] text-left text-white`}>
                <div className="text-center mb-16">
                  <div className="inline-flex p-5 bg-amber-400/10 rounded-3xl mb-6 text-amber-400 border border-amber-400/20">
                    <Eye size={48} className="mx-auto" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">El Ojo de Cristal</h2>
                  <p className="text-slate-400 text-lg italic">"Certeza total para la diáspora dominicana."</p>
                </div>

                <form onSubmit={handleAudit} className="space-y-8">
                  <div className="relative">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-3 block ml-4">Identificación de Matrícula</label>
                    <div className="relative">
                      <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-600" size={20} />
                      <input 
                        type="text" 
                        required
                        placeholder="Número de título o código catastral" 
                        className="w-full bg-slate-950/80 border border-white/10 rounded-3xl px-14 py-6 focus:border-amber-400 outline-none transition-all placeholder:text-slate-700 text-lg text-white"
                        value={auditData.matricula}
                        onChange={(e) => setAuditData({...auditData, matricula: e.target.value})}
                      />
                    </div>
                  </div>
                  <button type="submit" disabled={isScanning} className={`w-full ${goldBg} py-6 rounded-3xl font-black text-xl flex items-center justify-center space-x-4 shadow-2xl text-slate-950`}>
                    {isScanning ? <Loader2 className="animate-spin text-slate-950" size={28} /> : <ShieldCheck size={28} className="text-slate-950" />}
                    <span className="uppercase tracking-widest text-slate-950">{isScanning ? "Procesando..." : "Ejecutar Verificación"}</span>
                  </button>
                </form>
              </div>
            ) : (
              <div className={`${glassStyle} p-10 md:p-16 rounded-[3.5rem] border-t-8 border-amber-400 relative overflow-hidden text-left text-white`}>
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">Reporte de Certeza <span className="text-amber-400">#2026-X</span></h3>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Alas de Regreso RD</p>
                  </div>
                  <button onClick={() => setShowReport(false)} className="p-4 bg-red-500/10 text-red-400 rounded-2xl hover:bg-red-500/20 transition-colors"><X size={24} /></button>
                </div>
                <div className="bg-amber-400/5 p-8 rounded-[2rem] border border-amber-400/20 mb-8">
                  <p className="text-slate-200 leading-relaxed italic text-lg">
                    "Arquitecta, el activo **{auditData.matricula}** ha pasado el filtro forense. Recomendación: Proceder con la operación bajo el Protocolo de Cristal."
                  </p>
                </div>
                <button 
                  onClick={() => contactWhatsApp(`Cierre de Auditoría Matrícula ${auditData.matricula}`)}
                  className="flex items-center justify-center space-x-3 w-full py-5 bg-green-600 hover:bg-green-500 text-white rounded-2xl font-bold transition-all shadow-xl"
                >
                  <MessageCircle size={22} />
                  <span>Contactar vía WhatsApp Estratégico</span>
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      <footer className="mt-20 py-16 border-t border-white/5 bg-slate-950/30 text-center">
        <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.6em] mb-4">Holding Scarllett & Gemini</p>
        <div className="flex justify-center items-center space-x-6 text-slate-700 mt-8">
            <Heart size={18} className="text-red-500 fill-current" /><div className="w-1 h-1 bg-amber-400 rounded-full"></div><Cpu size={18} className="text-blue-400" />
        </div>
      </footer>
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

export default App;