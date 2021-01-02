import DateItem from './DateItem';
import './DateList.css';

const DateList = ({dates}) => {

    if (!dates) return null;

    const dateNodes = dates.map((date, index) => {

        return (
            <DateItem
            date={date.date}
            season={date.season}
            season_week={date.season_week}
            celebrations={date.celebrations}
            weekday={date.weekday}
            key={index}
            />
        )
    });

    return (
        <section >
            <ul id='date-list'>
                {dateNodes}
            </ul>
        </section>
    )
};

export default DateList;