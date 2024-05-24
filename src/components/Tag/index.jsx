import PropTypes from 'prop-types';
import { Container } from "./styles";

export function Tag({ title }) {
    return (
        <Container>
            {title}
        </Container>
    );
}

// Define prop types for the Tag component
Tag.propTypes = {
    title: PropTypes.string.isRequired,
};