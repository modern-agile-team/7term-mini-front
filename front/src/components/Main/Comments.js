import BeeLogo from '../entrie/BeeLogo';
import styled from '@emotion/styled';
import Remove from './Remove';
import CommentDel from '../../features/CommentDel';

export default function Comments(props) {
  const Content = styled.div`
    width: 49vw;
    height: 3vh;
    margin-right: 1vw;
    padding: 20px;
    margin-left: 1vw;
    background-color: #f3f8f1;
    border-radius: 20px;
    border: none;
    resize: none;
    outline: none;
    font-family: 'Cafe24SsurroundAir';
    font-size: 90%;
  `;

  const UserName = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: #647d87;
    font-size: 80%;
    margin-left: 2vw;
  `;

  return (
    <>
      <div
        style={{
          width: '63vw',
          height: '12vh',
          backgroundColor: '#e1eddc',
          borderRadius: '20px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          margin: '1vh 0vh',
        }}
      >
        <UserName>
          <BeeLogo width="2.5vw" margin="0px 0px 10px 0px" />
          {props.nickname}
        </UserName>
        <Content>{props.content}</Content>
        <div
          onClick={() => {
            CommentDel(props.board_no, props.no);
          }}
        >
          <Remove width="1.5vw" margin="0 0.3vw 5vh 0" />
        </div>
      </div>
    </>
  );
}
