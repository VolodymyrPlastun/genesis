import styled from "@emotion/styled";

export const Box = styled.div`
  border: 1px solid grey;
  background-color: #85bbbb;
  border-radius: 5px;
  padding: 30px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
