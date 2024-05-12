import styled from "styled-components";

export const ContainerSearch = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding-bottom: 1.25rem;
  align-items: center;
`;
export const WrapperSearch = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(0 0 0 / 0.7);
  width: fit-content;
  padding: 0.5rem;
  border-radius: 0.5rem;
  gap: 0.5rem;
  border: 2px solid rgba(234 179 8 / 0.8);
`;
export const LabelSearch = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: rgba(234 179 8 / 0.8);
  text-decoration-line: underline;
  text-underline-offset: 2px;
`;
