import FeastItem from './FeastItem'
import './DateItem.css'
import { findRenderedComponentWithType } from 'react-dom/test-utils';
const DateItem = ({date, season, season_week, celebrations, weekday}) => {
    if (!celebrations) return null;

    let dateColor = null;

    if (season === "christmas" || season === "easter") {
        dateColor = {
            color: "white",
        } 
    } else if (season === "ordinary") {
        dateColor = {
            color: "green",
        } 
    } else if (season === "lent" || season === "advent") {
        dateColor = {
            color: "violet",
        }
    }

    let capitalisedSeason = null

    if (season === "ordinary") {
        capitalisedSeason = "Ordinary Time"
    } else {
        capitalisedSeason = season.charAt(0).toUpperCase() + season.slice(1)
    }

    let capitalisedWeekday = null

    capitalisedWeekday = weekday.charAt(0).toUpperCase() + weekday.slice(1)

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
        <div id='date-item' style={dateColor}>
            <li>
                <h3>{date}</h3>
                <h4>{capitalisedSeason} </h4>
                <h5 id="weekday">{capitalisedWeekday}, Week {season_week}</h5>
                <ul>{feastDays}</ul>
            </li>
        </div>

    )
};

export default DateItem;