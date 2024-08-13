import { Link, NavLink } from "react-router-dom";
// import AddCourseForm from "../../components/AddCourseForm/AddCourseForm";
const AdminPage = () => {
  return (
    <main>
      {/* <AddCourseForm /> */}
      <ul>
        <li>
          <Link className="button link" to="/add-course">
            Ajouter un cours
          </Link>
        </li>
        <li>
          <Link className="button link" to="/delete-course">
            Supprimer un cours
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default AdminPage;
