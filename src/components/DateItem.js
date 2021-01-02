import FeastItem from './FeastItem'
import './DateItem.css'
const DateItem = ({date, season, season_week, celebrations, weekday}) => {
    if (!celebrations) return null;

    const feastDays = celebrations.map((feast, index) => {
        return <FeastItem 
                title={feast.title}
                colour={feast.colour}
                rank={feast.rank}
                rank_num={feast.rank_num}
                key={index}
                />
    })

    const dateColor = {
        backgroundColor: celebrations[0].colour,
    };


    return (
        <div id='date-item' style={dateColor}>
            <li>
                <h3>{date}</h3>
                <h4>{season} (Week {season_week})</h4>
                <ul>{feastDays}</ul>
            </li>
        </div>

    )
};

export default DateItem;