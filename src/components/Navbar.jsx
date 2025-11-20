import { Menu } from 'lucide-react';

export default function Navbar({ onPost }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400" />
          <span className="font-semibold text-white">Tregu.al</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#" className="hover:text-white">Kategoritë</a>
          <a href="#" className="hover:text-white">Si funksionon</a>
          <a href="#" className="hover:text-white">Çmime</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="px-3 py-1.5 rounded-md text-sm text-white/90 hover:text-white">Hyr</button>
          <button onClick={onPost} className="px-3 py-1.5 rounded-md text-sm font-medium bg-gradient-to-tr from-blue-500 to-cyan-400 text-white shadow hover:opacity-95">Posto Njoftim</button>
          <button className="md:hidden p-2 text-white/80"><Menu size={20} /></button>
        </div>
      </div>
    </header>
  );
}
