import ReactPlayer from "react-player";
import { Title, Box } from "./ShortVideo.styled";

const ShortVideo = ({ course }) => {
  const videoLink = course?.meta?.courseVideoPreview?.link;

  return (
    <>
      {course !== [] && (
        <Box>
          <Title>{course.description}</Title>
          <ReactPlayer url={videoLink} controls width="100%" height="100%" />
        </Box>
      )}
    </>
  );
};

export default ShortVideo;
