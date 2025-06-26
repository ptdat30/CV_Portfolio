import { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MemberForm from '../components/MemberForm';
import { MemberContext } from '../context/MemberContext';

const MemberDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { members, editMode } = useContext(MemberContext);
    const member = members.find(m => m.id === id);
    const [isEditing, setIsEditing] = useState(false);

    if (!member) return <div>Member not found</div>;

    return (
        <div className="member-detail">
            {editMode && isEditing ? (
                <MemberForm
                    member={member}
                    onSave={() => setIsEditing(false)}
                />
            ) : (
                <>
                    <img src={member.avatar} alt={member.name} />
                    <h2>{member.name}</h2>
                    <p><strong>Title:</strong> {member.title}</p>
                    <p><strong>Description:</strong> {member.description}</p>
                    <p><strong>Email:</strong> {member.email}</p>
                    <p><strong>Phone:</strong> {member.phone}</p>
                    <p><strong>Skills:</strong> {member.skills.join(', ')}</p>
                    <p><strong>Experience:</strong> {member.experience}</p>
                    <p><strong>Education:</strong> {member.education}</p>
                    <p><strong>Projects:</strong> {member.projects.join(', ')}</p>
                    {editMode && (
                        <button className="btn" onClick={() => setIsEditing(true)}>Edit</button>
                    )}
                    <button className="btn" onClick={() => navigate('/')}>Back to Home</button>
                </>
            )}
        </div>
    );
};

export default MemberDetail;