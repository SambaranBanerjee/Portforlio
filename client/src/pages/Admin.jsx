import AdminProjectForm from '../components/adminProjectForm.jsx';

const ADMIN_PASSWORD = '11223344'; 

export default function AdminPage() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Welcome Admin</h1>
      <AdminProjectForm />
    </div>
  );
}
