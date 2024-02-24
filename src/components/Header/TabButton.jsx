export default function Tabbutton ({children, onSelect, isSelected}) {
    return (
        <li><button className={isSelected ? 'active' : null} onClick={onSelect}>{children}</button></li>
    );
}
