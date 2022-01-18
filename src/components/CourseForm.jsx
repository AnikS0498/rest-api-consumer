import React, { useState } from "react";
import axios from "axios";

function CourseForm() {
  const [courseTable, setCourseTable] = useState(false);
  const [apiValue, setApiValue] = useState([]);

  const API = "http://localhost:8080/course";

  const getAllCourses = async (event) => {
    event.preventDefault();
    const response = await axios.get(API + "/getCourses");
    console.log(response.data);

    setApiValue(response.data);

    setCourseTable(true);
  };

  const handleHideButton = () => {
    setCourseTable(false);
  };

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Course Name
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Trainer Name
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button className="btn btn-success mx-2" onClick={getAllCourses}>
          All courses
        </button>
      </form>

      {courseTable === true && (
        <>
          <table className="table my-4">
            <thead>
              <tr>
                <th scope="col">Course Id</th>
                <th scope="col">Course Name</th>
                <th scope="col">Trainer List</th>
              </tr>
            </thead>
            <tbody>
              {apiValue.map((course) => {
                return (
                  <tr key={course.courseId}>
                    <td>{course.courseId}</td>
                    <td>{course.courseName}</td>
                    <td>{course.trainerList}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button className="btn btn-danger my-3" onClick={handleHideButton}>
            Hide
          </button>
        </>
      )}
    </div>
  );
}

export default CourseForm;
