const DateItem = ({date, season, season_week, celebrations, weekday}) => {

    const feastDays = celebrations.map((feast) => {
        return <li>
            <h5>{feast.title}</h5>
            <p>Colour: {feast.colour}</p>
            <p>Rank: {feast.rank}, {feast.rank_num}</p>
            </li>
    })

    return (
        <div id='date-item'>
            <li>
                <h3>{date}</h3>
                <ul>{feastDays}</ul>
            </li>
        </div>

    )
};

export default DateItem;