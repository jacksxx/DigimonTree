import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 2.25rem;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: black;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-width: 2px;
  border-color: rgb(234 179 8 / 0.8);
  border-radius: 0.375rem; 
  column-gap: 0.25rem; 
  @media (min-width: 500px) {
    column-gap: 1.25rem; 
  } 
  @media (min-width: 640px) {
    column-gap: 1.5rem; 
  }
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 0.25rem; 
`;
export const InputPage = styled.input`
  text-align: center;
  width: 25px;
  outline: none;
  background-color: black;
  color: white;
  font-weight: 500;
  border: 1px solid rgba(255, 213, 0, 0.8);
  border-radius: 0.375rem;
  @media (min-width: 640px) {
    width: 30px;
  }
`;
export const TotalPages = styled.span`
  color: white;
  font-weight: 500;
`;

export const NextButton = styled.button<{
  initialPage: number;
  totalPages: number;
}>`
  padding: 0.25rem;
  border-width: 2px;
  border-color: rgba(255, 213, 0, 0.8);
  color: #fff;
  border-radius: 9999px;
  ${({ initialPage, totalPages }) =>
    initialPage >= totalPages 
      ? `
            background-color: #4B5563;
            color: rgba(255, 255, 255, 0.5);
        `
      : `
            &:hover {
                transform: scale(1.05);
            }
        `}
`;
export const PrevButton = styled.button<{
  initialPage: number;
}>`
  padding: 0.25rem;
  border-width: 2px;
  border-color: rgba(255, 213, 0, 0.8);
  color: #fff;
  border-radius: 9999px;
  ${({ initialPage }) =>
    initialPage <= 1
      ? `
              background-color: #4B5563;
              color: rgba(255, 255, 255, 0.5);
          `
      : `
              &:hover {
                  transform: scale(1.05);
              }
          `}
`;
