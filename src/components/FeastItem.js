import './FeastItem.css'
const FeastItem = ({title, colour, rank, rank_num}) => {

    
  
    return (
        <li id='feast-item' >
            <h5 >{title}</h5>
            <p>Colour: {colour}</p>
            <p>Rank: {rank_num}, {rank}</p>
        </li>
    )
};

export default FeastItem;