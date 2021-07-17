import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background:  ${props => props.theme.colors.background};

    main {
        width: calc(100vw - ${props => props.theme.widthNavBar} );
        .topbar {
            background:  ${props => props.theme.colors.background};
            height: 100px;
        }
    }
    
`;
