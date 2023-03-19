import { useEffect, useState } from "react";
import PaginatedItems from "../../components/Pagination";
import { getAllcourses } from "../../servises/API";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getAllcourses();
        setCourses(data.courses);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <>
      <PaginatedItems itemsPerPage={10} data={courses} />
    </>
  );
};

export default AllCourses;
