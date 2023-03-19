import ReactPlayer from "react-player";
import { useState } from "react";
import { Button, Icon, Title, MainText, Text } from "./UnlockedLesson.styled";

const UnlockedLessons = ({
  title,
  link,
  duration,
  previewImageLink,
  order,
}) => {
  const [activeLesson, SetActiveLesson] = useState(false);

  const onLessonClick = () => {
    !activeLesson ? SetActiveLesson(true) : SetActiveLesson(false);
  };

  return (
    <>
      {title && (
        <div>
          <Button onClick={onLessonClick}>
            <Icon color="primary" />
            <Title>{title}</Title>
          </Button>
        </div>
      )}

      {activeLesson && (
        <>
          <Text>
            <MainText>Lesson length:</MainText> {Math.floor(duration / 60)} m
          </Text>
          <ReactPlayer
            url={link}
            controls
            light={`${previewImageLink}/lesson-${order}.webp`}
            width="100%"
          />
        </>
      )}
    </>
  );
};

export default UnlockedLessons;
