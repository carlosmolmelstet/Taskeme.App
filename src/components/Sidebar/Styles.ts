import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background:  ${props => props.theme.colors.navbar};
    width: ${props => props.theme.widthNavBar};
`;
