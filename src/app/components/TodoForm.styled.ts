import styled from '@emotion/styled';

export const Form = styled.form`
  text-transform: uppercase;
  position: relative;
`;

export const InputContainer = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-transform: italic;

  .label {
    flex: 1;
    margin-bottom: 0.5rem;
    text-align: left;
  }

  input {
    padding: 0.55rem;
    margin-bottom: 1rem;
    border-radius: 11px;
    border: 1px solid white;

    &:hover {
      box-shadow: 1px 1px 9px #fff;
    }

    &:focus {
      border: 2px solid #38ce38;
      outline: none;
      box-shadow: 1px 1px 9px #fff;
    }

  }
  
  .editActive {
    border: 2px solid #ff000057;
    box-shadow: 1px 1px 9px #ff000057;
  }

  p {
    color: #fffc00;
    text-transform: lowercase;
    font-style: italic;
    margin-bottom: 2rem;
  }
`;

export const ButtonDiv = styled.div`
  @media (min-width: 48rem) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const Button = styled.button`
  margin-top: 1rem;
  background-color: #38ce38;
  color: #fff;
  padding: 8.8px;
  font-weight: bolder;
  border-radius: 11px;
  border: 1px solid white;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  &:hover {
    background-color: white;
    color: #38ce38;
    border: 1px green solid;
  }

  .plusIcon {
    font-weight: bolder;
    font-size: 1.5rem;
    maring-right: 2px;
  }

  @media (min-width: 48rem) {
    width: fit-content;
  }
`;
