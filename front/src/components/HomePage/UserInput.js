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
          name={props.name}
          type={props.type}
          id={props.key}
          style={{
            width: '60%',
            height: '70%',
            border: 'none',
            background: 'transparent',
            marginLeft: '10px',
            outline: 'none',
          }}
          onChange={props.UserInput}
        ></input>
      </div>
    </>
  );
}
