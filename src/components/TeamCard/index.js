// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {team} = props
  const {name, id, teamImageUrl} = team
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="team-container">
        <img src={teamImageUrl} alt={name} className="team-image" />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
