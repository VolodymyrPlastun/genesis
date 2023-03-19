import AddTaskIcon from "@mui/icons-material/AddTask";
import styled from "@emotion/styled";

export const Box = styled.div`
  padding: 30px 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  border-radius: 5px;
  padding: 20px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  margin-bottom: 10px;
`;

export const MainText = styled.span`
  font-weight: bold;
`;

export const SkillsItem = styled.li`
  display: flex;
  align-items: center;
`;

export const Icon = styled(AddTaskIcon)`
  margin-right: 5px;
`;
