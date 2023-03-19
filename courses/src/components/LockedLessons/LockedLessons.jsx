import { Icon, Box, Title } from "./LockedLessons.styled";

const LockedLessons = ({ title }) => {
  return (
    <Box>
      <Icon color="primary" />
      <Title>{title}</Title>
    </Box>
  );
};

export default LockedLessons;
