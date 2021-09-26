import styled from 'styled-components';

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 5rem;
    margin: 1rem 0;
    span {
        width: 25%;
    }
`;

const DeleteButton = styled.button`
    padding: 0.5rem 1rem;
    background: ${props => props.color};
    font-weight: bold;
`;

const View = styled.a`
    padding: 0.5rem 1rem;
    background: ${props => props.color};
    font-weight: bold;
`;


const Source = ({ number, firstName, lastName, email }) => {
    return (
        <>
            <Row>
                <span>{number}:</span>
                <span>{`${firstName} ${lastName}`}</span>
                <span>{email}</span>
                <DeleteButton color="red">Delete</DeleteButton>
                <View color="green" href={`/pf/authors/${firstName}-${lastName}/`}>View</View>
            </Row>
        </>
    )
};

export default Source;