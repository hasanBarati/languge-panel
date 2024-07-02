'use client';

function ButtonClient({ text }:{text:string}) {
  return (
    <button className='Card__button' onClick={() => console.log("run")}>
      {text}
    </button>
  );
}

export default ButtonClient;