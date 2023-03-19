import styled from "@emotion/styled";
import LockOpenIcon from "@mui/icons-material/LockOpen";

export const Box = styled.div`
  padding: 30px;
`;

export const Title = styled.h2`
  font-size: 20px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 0;
`;

export const Icon = styled(LockOpenIcon)`
  margin-right: 5px;
`;

export const Text = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const MainText = styled.span`
  font-weight: bold;
`;
