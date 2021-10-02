
import styled from 'styled-components';


const Row = styled.div`
display: flex;
`;

const Column = styled.div<{ width: string }>`
width: ${props => props.width};
padding: 20px;
`;

const ButtonRow = styled.div`
display: flex;
justify-content: center;
`;


const ClearRow = styled.div`
display: flex;
padding-top: 10px;
justify-content: end;
`;

const Alert = styled.span`
border-radius: 5px;
background: #F56236;
padding: 15px;
`;

export { Row, ClearRow, Column, Alert, ButtonRow};