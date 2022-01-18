import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CourseForm from "./components/CourseForm";

function App() {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-lg-8">
          <CourseForm />
        </div>
      </div>
    </div>
  );
}

export default App;
