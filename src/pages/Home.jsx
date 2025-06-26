import { useContext } from 'react';
import MemberCard from '../components/MemberCard';
import { MemberContext } from '../context/MemberContext';

const Home = () => {
    const { members } = useContext(MemberContext);

    return (
        <div className="card-container">
            {members.map(member => (
                <MemberCard key={member.id} member={member} />
            ))}
        </div>
    );
};

export default Home;