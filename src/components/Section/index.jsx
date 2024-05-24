import PropTypes from 'prop-types';
import { Container } from "./styles";

export function Section({ title, children }) {
    return (
        <Container>
            <h1>{title}</h1>
            <br/>
            {children}
        </Container>
    );
}

// Add prop types validation
Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};