export function SearchForm({ onSubmit, onClick, setCurrentCity }) {
    return (
        <form className="search" onSubmit={onSubmit}>
            <input type="text" className="input" placeholder="Введите город" onChange={(event) => { setCurrentCity(event.target.value) }} />
            <button className="search-btn" onClick={onClick}>
                <img src="img/search.svg" alt="" className="search-img" />
            </button>
        </form>
    )
}