export default function Toggle({ checked, onChange, label }) {
 return (
 <button
 className={'toggle' + (checked ? ' on' : '')}
 onClick={() => onChange(!checked)}
 aria-pressed={checked}
 >
 <span className="knob" />
 <span>{label}</span>
 </button>
 );
}