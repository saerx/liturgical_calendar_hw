const DateItem = ({date, season, season_week, celebrations, weekday}) => {

    return (
        <div id='date-item'>
            <li>
                <h3>{date}, in the season of {season}</h3>
                <h4>{celebrations[0].title}</h4>
            </li>
        </div>

    )
};

export default DateItem;