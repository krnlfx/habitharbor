import { useMemo, useState } from 'react';

function useItems() {
 const [items, setItems] = useState(() =>
 Array.from({ length: 12 }, (_, i) => ({ id: i, value: Math.round(Math.random() * 100), active: i % 3 === 0 }))
 );
 const toggle = (id) => setItems((prev) => prev.map((it) => (it.id === id ? { ...it, active: !it.active } : it)));
 return { items, toggle };
}

export default function App() {
 const { items, toggle } = useItems();
 const total = useMemo(() => items.reduce((sum, it) => sum + it.value, 0), [items]);
 const active = items.filter((it) => it.active).length;

 return (
 <main className="shell">
 <header>
 <h1>HabitHarbor</h1>
 <p>Tracks daily habits with streaks, weekly grids and gentle reminders.</p>
 </header>

 <section className="stats">
 <div className="stat"><span className="num">{items.length}</span><span>items</span></div>
 <div className="stat"><span className="num">{active}</span><span>active</span></div>
 <div className="stat"><span className="num">{total}</span><span>total</span></div>
 </section>

 <section className="list">
 {items.map((it) => (
 <button key={it.id} className={'row' + (it.active ? ' on' : '')} onClick={() => toggle(it.id)}>
 <span className="dot" />
 <span>Item {it.id + 1}</span>
 <span className="val">{it.value}</span>
 </button>
 ))}
 </section>
 </main>
 );
}