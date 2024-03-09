export default function Tabbutton ({children, onClick, isSelected}) {
    return (
        <li><button className={isSelected ? 'active' : null} onClick={onClick}>{children}</button></li>
    );
}
