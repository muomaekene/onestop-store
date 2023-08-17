import PropTypes from "prop-types";
import { Container, BoxTitle, BoxText } from "./BoxStyles";

const Box = ({ title, text }) => {
  return (
    <Container>
      <BoxTitle>{title}</BoxTitle>
      <BoxText>{text}</BoxText>
    </Container>
  );
};

export default Box;

Box.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
