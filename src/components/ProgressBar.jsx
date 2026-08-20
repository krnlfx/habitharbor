export default function ProgressBar({ value, max = 100 }) {
 const pct = Math.min(100, Math.max(0, (value / max) * 100));
 return (
 <div className="bar">
 <div className="bar-fill" style={{ width: pct + '%' }} />
 </div>
 );
}