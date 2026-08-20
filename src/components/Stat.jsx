export default function Stat({ label, value }) {
 return (
 <div className="stat">
 <span className="num">{value}</span>
 <span>{label}</span>
 </div>
 );
}