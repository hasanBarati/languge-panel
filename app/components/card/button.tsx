'use client';

function ButtonClient({ text }) {
  return (
    <button className='Card__button' onClick={() => console.log("run")}>
      {text}
    </button>
  );
}

export default ButtonClient;