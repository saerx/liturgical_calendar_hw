import {useEffect, useState} from 'react';

const MonthChanger = ({handleDateChange}) => {

    
    const [monthYear, setMonthYear] = useState("2021-01");

    const handleMonthChange = (event) => {
        setMonthYear(event.target.value);
    };

    useEffect(() =>{
        handleDateChange(monthYear);
    }, [monthYear])

    return (
        <div className="input">
    
            <input type="month" 
                placeholder="2021-01" 
                value={monthYear}
                onChange={handleMonthChange}
            />
       
         </div>

    )

};


export default MonthChanger;