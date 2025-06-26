// src/context/MemberContext.jsx
import { createContext, useState, useEffect } from 'react';

export const MemberContext = createContext();

export const MemberProvider = ({ children }) => {
    const [members, setMembers] = useState(() => {
        const saved = localStorage.getItem('members');
        return saved ? JSON.parse(saved) : initialMembers;
    });
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        localStorage.setItem('members', JSON.stringify(members));
    }, [members]);

    const updateMember = (id, updatedMember) => {
        setMembers(members.map(member => member.id === id ? updatedMember : member));
    };

    return (
        <MemberContext.Provider value={{ members, updateMember, editMode, setEditMode }}>
            {children}
        </MemberContext.Provider>
    );
};

export { initialMembers } from '../data';