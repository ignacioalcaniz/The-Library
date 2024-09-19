import Spinner from 'react-bootstrap/Spinner';



export const Loader=({text})=> {
  return (
    <Spinner animation="border" role="status">
      <span>{text}</span>
    </Spinner>
  );
}