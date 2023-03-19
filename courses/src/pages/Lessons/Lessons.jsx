import { useState, useEffect } from "react";
import { getCourse } from "../../servises/API";
import { useParams } from "react-router-dom";
import LessonList from "../../components/LessonList/LessonList";
import ShortVideo from "../../components/ShortVideo/ShortVideo";
import { Box } from "./Lessons.styled";

const Lesson = () => {
  const [course, setCourse] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchCourse = async () => {
      const data = await getCourse(id);
      setCourse(data);
    };
    fetchCourse();
  }, [id]);

  return (
    <Box>
      <ShortVideo course={course} />
      <LessonList lessons={course.lessons} />
    </Box>
  );
};
export default Lesson;
