import styled from "@emotion/styled";
import LockIcon from "@mui/icons-material/Lock";

export const Box = styled.div`
  display: flex;
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
`;

export const Icon = styled(LockIcon)`
  margin-right: 5px;
`;
