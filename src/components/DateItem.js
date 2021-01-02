import FeastItem from './FeastItem'
import './DateItem.css'
const DateItem = ({date, season, season_week, celebrations, weekday}) => {
    if (!celebrations) return null;
    
    // Make this into seperate component
    const feastDays = celebrations.map((feast, index) => {
        return <FeastItem 
                title={feast.title}
                colour={feast.colour}
                rank={feast.rank}
                rank_num={feast.rank_num}
                key={index}
                />
    })

    return (
        <div id='date-item'>
            <li>
                <h3>{date}</h3>
                <h4>{season} (Week {season_week})</h4>
                <ul>{feastDays}</ul>
            </li>
        </div>

    )
};

export default DateItem;