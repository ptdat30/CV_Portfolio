import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MemberContext } from '../context/MemberContext';

const Navbar = () => {
    const { editMode, setEditMode } = useContext(MemberContext);

    return (
        <nav className="navbar">
            <Link to="/">Digital CV Portfolio</Link>
            <div>
                <button
                    className="btn"
                    onClick={() => setEditMode(!editMode)}
                >
                    {editMode ? 'View Mode' : 'Edit Mode'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;