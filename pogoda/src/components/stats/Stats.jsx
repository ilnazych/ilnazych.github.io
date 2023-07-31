import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
const list = [];
export function Stats() {
    const city = useSelector(state => state.currentCityReducer);
    // function topCity() {
    //     return list.sort((a, b) =>
    //         list.filter(v => v === a).length - list.filter(v => v === b).length
    //     ).pop();
    // }
    useEffect(() => {
        list.push(city);
        // topCity();
    }, [city])
    console.log(list);
    return (
        <div>
            <Link to="/">Главная страница</Link>
            <p>Самый часто запрашиваемый город: { } </p>
            <p>Пользователь поменял города: {list.length} раз</p>
        </div>
    )
}