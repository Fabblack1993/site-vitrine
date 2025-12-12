import { useEffect, useState } from 'react';

function AdminDashboard() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/testimonials')
      .then(res => res.json())
      .then(data => setTestimonials(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/testimonials/${id}`, { method: 'DELETE' });
    setTestimonials(testimonials.filter(t => t._id !== id));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Dashboard Témoignages</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Message</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {testimonials.map(t => (
            <tr key={t._id}>
              <td>{t.name}</td>
              <td>{t.message}</td>
              <td>{new Date(t.date).toLocaleDateString()}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(t._id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;