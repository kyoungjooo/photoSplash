import styled from "@emotion/styled";

export const CardWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin: 0;
  padding: 0;
`;
export const Card = styled.li`
  height: 260px;
  border-radius: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
`;
export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  object-fit: cover;
`;
