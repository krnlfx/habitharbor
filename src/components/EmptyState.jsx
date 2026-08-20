export default function EmptyState({ title, hint, action }) {
 return (
 <div className="empty-state">
 <div className="empty-icon">âˆ...</div>
 <h3>{title}</h3>
 {hint ? <p>{hint}</p> : null}
 {action ? <button className="ghost-btn" onClick={action}>Add one</button> : null}
 </div>
 );
}