export function formatCount(n) {
 return new Intl.NumberFormat().format(n);
}

export function formatTime(iso) {
 if (!iso) return '-';
 return new Date(iso).toLocaleString();
}

export function cls(...parts) {
 return parts.filter(Boolean).join(' ');
}

export function sample(arr, n) {
 const copy = [...arr];
 for (let i = copy.length - 1; i > 0; i--) {
 const j = Math.floor(Math.random() * (i + 1));
 [copy[i], copy[j]] = [copy[j], copy[i]];
 }
 return copy.slice(0, n);
}

export function debounce(fn, ms = 250) {
 let timer;
 return (...args) => {
 clearTimeout(timer);
 timer = setTimeout(() => fn(...args), ms);
 };
}