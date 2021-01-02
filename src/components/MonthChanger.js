import {useState} from 'react';

const MonthChanger = ({handleDateChange}) => {

    
    const [month, setMonth] = useState("2021-01");

    const handleMonthChange = (event) => {
        setMonth(event.target.value);
        handleDateChange(month);
    };

    // const handleFormSubmit = (event) => {
    //     event.preventDefault();
    //     
    // }
        


    return (
        <div id="date-changer">
    
            <input type="month" 
                placeholder="2021-01" 
                value={month}
                onChange={handleMonthChange}
                />
       
         </div>

    )

};


export default MonthChanger;