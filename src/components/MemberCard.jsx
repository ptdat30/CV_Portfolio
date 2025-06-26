import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MemberContext } from '../context/MemberContext';

const MemberCard = ({ member }) => {
    const { editMode } = useContext(MemberContext);

    return (
        <div className="card">
            <img src={member.avatar} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.title}</p>
            <p>{member.description}</p>
            {editMode ? (
                <Link to={`/member/${member.id}`} className="btn">Edit Details</Link>
            ) : (
                <Link to={`/member/${member.id}`} className="btn">View Details</Link>
            )}
        </div>
    );
};

export default MemberCard;