import DateItem from './DateItem'

const DateList = ({dates}) => {

    if (!dates) return null;

    console.log(dates)

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
        <section id='date-list'>
            <ul>
                {dateNodes}
            </ul>
        </section>
    )
};

export default DateList;