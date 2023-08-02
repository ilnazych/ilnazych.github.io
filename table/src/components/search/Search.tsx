import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from '../../assets/types';
import { filterData } from '../../redux/slice';
import Search from 'antd/es/input/Search';

export function SearchEngine() {
    const data = useSelector((state: InitialState) => state.toolkit.data)
    const dispatch = useDispatch();
    const filtredData = (searchString: string) => {
        if (searchString.length > 0) {
            const newData = data.filter((obj: any) => {
                return Object.keys(obj).some((key) => {
                    if (obj[key] !== null) {
                        const tempKey = obj[key].toString().toLowerCase();
                        const tempSearch = searchString.toLowerCase();
                        return tempKey.includes(tempSearch);
                    }
                });
            });
            dispatch(filterData(newData))
        } else {
            dispatch(filterData([]))
        }
    }
    return (
        <Search onChange={(event) => filtredData(event.target.value)} />
    );
}
