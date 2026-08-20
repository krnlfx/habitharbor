// Small API helpers for HabitHarbor.
export async function getItems() {
 const res = await fetch('/api/items');
 if (!res.ok) throw new Error('failed to load items');
 return res.json();
}

export async function createItem(payload) {
 const res = await fetch('/api/items', {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify(payload)
 });
 if (!res.ok) throw new Error('failed to create item');
 return res.json();
}

export async function deleteItem(id) {
 const res = await fetch('/api/items/' + id, { method: 'DELETE' });
 if (!res.ok) throw new Error('failed to delete item');
 return res.json();
}