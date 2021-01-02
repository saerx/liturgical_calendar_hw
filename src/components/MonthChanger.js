import {useEffect, useState} from 'react';

const MonthChanger = () => {

    const [month, setMonth] = useState([])

    return (
        <div id="date-changer">
        <input type="month" placeholder="2021-01" ></input>
        
         </div>

    )
};


export default MonthChanger;