export default function Filters({ categories, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    onSearch({
      q: data.q || '',
      kategoria: data.kategoria || '',
      min_cmimi: data.min_cmimi || '',
      max_cmimi: data.max_cmimi || '',
      lokacioni: data.lokacioni || '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 md:grid-cols-6 gap-3 p-4 bg-slate-800/50 border border-white/10 rounded-xl">
      <input name="q" placeholder="Kërko..." className="col-span-2 md:col-span-2 px-3 py-2 rounded-md bg-slate-900/60 border border-white/10 text-white placeholder-white/40" />
      <select name="kategoria" className="px-3 py-2 rounded-md bg-slate-900/60 border border-white/10 text-white">
        <option value="">Të gjitha</option>
        {categories.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <input name="lokacioni" placeholder="Lokacioni" className="px-3 py-2 rounded-md bg-slate-900/60 border border-white/10 text-white placeholder-white/40" />
      <input name="min_cmimi" placeholder="Min €" type="number" className="px-3 py-2 rounded-md bg-slate-900/60 border border-white/10 text-white placeholder-white/40" />
      <input name="max_cmimi" placeholder="Max €" type="number" className="px-3 py-2 rounded-md bg-slate-900/60 border border-white/10 text-white placeholder-white/40" />
      <button className="col-span-2 md:col-span-1 bg-gradient-to-tr from-blue-500 to-cyan-400 text-white rounded-md font-medium">Kërko</button>
    </form>
  );
}
