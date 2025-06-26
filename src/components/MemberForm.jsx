// src/components/MemberForm.jsx
import { useState, useContext } from 'react';
import { MemberContext } from '../context/MemberContext';

const MemberForm = ({ member, onSave }) => {
    const { updateMember } = useContext(MemberContext);
    const [formData, setFormData] = useState(member);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Tên là bắt buộc";
        if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = "Email phải hợp lệ";
        if (!formData.phone.match(/^\+?\d{10,}$/)) newErrors.phone = "Số điện thoại phải hợp lệ";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        updateMember(member.id, formData);
        onSave();
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, avatar: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-group">
            <div className="form-group">
                <label>Tên</label>
                <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-group">
                <label>Ảnh đại diện</label>
                <input type="file" accept="image/*" onChange={handleImageUpload} />
            </div>
            <div className="form-group">
                <label>Chức danh</label>
                <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
            </div>
            <div className="form-group">
                <label>Mô tả</label>
                <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-group">
                <label>Số điện thoại</label>
                <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
            <div className="form-group">
                <label>Kỹ năng (phân cách bằng dấu phẩy)</label>
                <input
                    type="text"
                    value={formData.skills.join(', ')}
                    onChange={(e) => setFormData({ ...formData, skills: e.target.value.split(', ').filter(s => s) })}
                />
            </div>
            <div className="form-group">
                <label>Kinh nghiệm</label>
                <textarea
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                />
            </div>
            <div className="form-group">
                <label>Học vấn</label>
                <textarea
                    value={formData.education}
                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                />
            </div>
            <div className="form-group">
                <label>Dự án (phân cách bằng dấu phẩy)</label>
                <input
                    type="text"
                    value={formData.projects.join(', ')}
                    onChange={(e) => setFormData({ ...formData, projects: e.target.value.split(', ').filter(p => p) })}
                />
            </div>
            <button type="submit" className="btn">Lưu thay đổi</button>
        </form>
    );
};

export default MemberForm; // Đảm bảo dòng này có mặt