import './FeastItem.css'
const FeastItem = ({title, colour, rank, rank_num}) => {

    const feastColor = {
        color: colour,
    }
  
    return (
        <li id='feast-item' style={feastColor} >
            <h5 >{title}</h5>
            <h6>Rank: {rank_num}, {rank}</h6>
        </li>
    )
};

export default FeastItem;