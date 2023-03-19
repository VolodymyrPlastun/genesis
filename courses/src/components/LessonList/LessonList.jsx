import LessonItem from "../LessonItem";
import { Box, Title, ListItem, List } from "./LessonList.styled";

const LessonList = ({ lessons }) => {
  return (
    <>
      {lessons && (
        <Box>
          <Title>List of lessons</Title>
          <List>
            {lessons &&
              lessons.map((lesson, index) => (
                <ListItem key={index}>
                  {<LessonItem lesson={lesson} />}
                </ListItem>
              ))}
          </List>
        </Box>
      )}
    </>
  );
};

export default LessonList;
