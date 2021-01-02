import {useState} from 'react';

const MonthChanger = ({handleDateChange}) => {

    const [month, setMonth] = useState("2021-01");

    const handleMonthChange = (event) => {
        setMonth(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleDateChange(month);
    }
        


    return (
        <div id="date-changer">
        <form onSubmit={handleFormSubmit}>
            <input type="month" 
                placeholder="2021-01" 
                value={month}
                onChange={handleMonthChange}
                />
            <input type="submit" 
                   
            />
        </form>
         </div>

    )

};


export default MonthChanger;