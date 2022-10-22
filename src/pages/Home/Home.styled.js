import styled from 'styled-components';


export const Conteiner = styled.div`
min-height: calc(100vh - 50px);
display: flex;
align-items: center;
justify-content: center;
`

export const Title = styled.h1`
font-weight: ${p => p.theme.fontWeights.title};
font-size: ${p => p.theme.fontSizes.l};
text-align: center;
`