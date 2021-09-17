import styled from '@emotion/styled';

function Button(props) {
  const StyledButton = styled.button`
    font-size: 15px;
    letter-spacing: 1px;
    padding: 20px 25px 20px 25px;
    outline: 0;
    border: 2px solid black;
    position: relative;
    margin-top: 20px;
  `;

  return <StyledButton onClick={props.onClick}>{props.text}</StyledButton>;
}
export default Button;
