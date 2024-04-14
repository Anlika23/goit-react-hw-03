import css from './SearchBox.module.css'

export default function SearchBox({value, onSearch}) {
    return (
        <div className={css.containerSearch}>
            <p className={css.label}>Find contacts by name</p>
            <input className={css.searchInput}
                type="text"
                placeholder="Search..."
                value={ value}
                onChange={ (e) => onSearch(e.target.value)}
            />
        </div>
    );
}