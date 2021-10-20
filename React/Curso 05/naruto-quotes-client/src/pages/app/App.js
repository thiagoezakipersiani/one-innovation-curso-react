import narutoImage from '../../images/naruto.png';
import styled from 'styled-components';
import { Quotes } from '../../components';

export function App(){
  return(
    <Content>
      <Quotes />
      <narutoImage src={narutoImage} alt="Naruto with a kunai"/>
    </Content>
  );
}

 const Content= styled.div`
    height:100vh;
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const narutoImage=styled.img `
    max-widht: 50vw;
    align-self: flex-end;
  `;