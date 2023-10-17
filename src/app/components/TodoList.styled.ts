import styled from '@emotion/styled';

export const Alert = styled.div`
  margin: 2rem;
  font-style: italic;
`;

export const ListContainer = styled.div`
  .customCheckbox {
    cursor: pointer !important;
  }

  .textStriked {
    text-decoration: line-through;
  }

  .textNormal {
    text-decoration: none;
  }
`;

export const TaskContainer = styled.div`
  margin: 4rem 2rem;
  .header {
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .titleCheckbox {
    display: flex;
    align-items: center;
  }

  .customCheckbox {
    border-color: #fff;
    margin-right: 1rem;
    width: 20px;
    height: 20px;

    &:hover {
      box-shadow: 1px 1px 9px #fff;
    }
  }

  .editIconStyling,
  .deleteIconStyling {
    cursor: pointer;

    &:hover {
      font-size: 1.8rem;
      transition: 1s ease-out;
    }
  }

  .deleteIconStyling {
    color: red;
    margin-left: 1rem;
  }

  .editIconStyling {
    color: #38ce38;
  }

  .descriptionContainer {
    margin-bottom: 2rem;
    font-style: italic;
    padding-bottom: 1rem;
    border-bottom: 1px solid #fff;
  }
`;
