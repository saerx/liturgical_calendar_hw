import './FeastItem.css'
const FeastItem = ({title, colour, rank, rank_num}) => {

    const feastColor = {
        color: colour,
    }
  
    return (
        <li id='feast-item' style={feastColor} >
            <h5 >{title}</h5>
            <p>Rank: {rank_num}, {rank}</p>
        </li>
    )
};

export default FeastItem;