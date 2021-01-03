import {useEffect, useState} from 'react';

const FilterChanger = ({filterByRank}) => {

    const [filterRank, setFilterRank] = useState("0")

    const handleFilterChange = (event) => {
        setFilterRank(event.target.value)
    }

    useEffect(() => {
        filterByRank(filterRank);
    }, [filterRank])

    return (
        <div className="input">
            <select name="rank-filter"
                    id="rank-filter"
                    onChange={handleFilterChange}
            >
                <option value="0">Show all</option>
                <option value="1">Rank 1</option>
                <option value="2">Rank 2</option>
                <option value="3">Rank 3</option>
                <option value="4">Rank 4</option>




            </select>
        </div>
    )
};

export default FilterChanger