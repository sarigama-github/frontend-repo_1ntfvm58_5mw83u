export default function ListingCard({ item, onContact }) {
  return (
    <div className="bg-slate-800/60 border border-white/10 rounded-xl overflow-hidden hover:translate-y-[-2px] transition">
      <div className="aspect-[16/10] bg-slate-700/50 relative">
        {item.imazhe?.[0] ? (
          <img src={item.imazhe[0]} alt={item.titulli} className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 grid place-items-center text-white/40 text-sm">Pa imazh</div>
        )}
        {item.eshte_veçuar && <div className="absolute top-2 left-2 text-xs px-2 py-1 rounded-md bg-yellow-400 text-black font-medium">I Theksuar</div>}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-white line-clamp-1">{item.titulli}</h3>
          <div className="text-white font-bold">€{item.cmimi}</div>
        </div>
        <p className="mt-1 text-sm text-white/70 line-clamp-2">{item.pershkrimi}</p>
        <div className="mt-3 text-xs text-white/60">{item.kategoria} • {item.lokacioni}</div>
        <div className="mt-4 flex items-center gap-2">
          <button onClick={() => onContact(item)} className="px-3 py-1.5 rounded-md text-sm bg-blue-500 text-white">Kontakto</button>
          <a href={`#/listing/${item._id}`} className="px-3 py-1.5 rounded-md text-sm bg-slate-700 text-white/90">Shiko</a>
        </div>
      </div>
    </div>
  );
}
