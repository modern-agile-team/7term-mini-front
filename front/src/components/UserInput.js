export default function UserInput(props) {
  return (
    <>
      <div className="inputSection">
        <span
          style={{
            display: 'flex',
            borderRight: 'solid #606060',
            height: '30px',
            width: '100px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {props.text}
        </span>
        <input
          type="text"
          id={props.key}
          style={{
            width: '60%',
            height: '70%',
            border: 'none',
            background: 'transparent',
            marginLeft: '10px',
            outline: 'none',
          }}
        ></input>
      </div>
    </>
  );
}
