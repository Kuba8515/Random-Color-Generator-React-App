import styled from '@emotion/styled';

function ColorContainer(props) {
  const StyledDiv = styled.div`
    border: 1px black solid;
    border-radius: 10%;
    background-color: ${props.color};
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
  `;
  return (
    <StyledDiv>
      <span>{props.color}</span>
    </StyledDiv>
  );
}
export default ColorContainer;
