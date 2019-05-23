import styled from 'styled-components';

const Container = styled.div`
        max-width: 900px;
        margin-left: auto;
        margin-top: 80px;
        margin-right: auto;
        padding-left: 20px;
        padding-right: 20px;
        @media (max-width: 700px) {
            padding-left: 10px;
            padding-right: 10px;
        }
`;

export default Container