import React, { useState } from 'react'

interface Props1 {
  text: string
}
type Props2 = {
  text: string
}

interface newProps{
  text: string | number;
  onclick?: () => void;
  age?: number;
}

const Button1: React.FC<Props1> = (props) => {
  return (
    <button>
      <div>Button - { props.text }</div>
    </button>
  )
}

const Button2: React.FC<Props2> = (props) => {
  return (
    <button>
      <div>Button - { props.text }</div>
    </button>
  )
}

const Field: React.FC<newProps> = (props) => {
  const [val, setVal] = useState();
  return (
    <div>
      <h1>{props.text}</h1>
      {props.onclick && <button onClick={props.onclick}>Click</button>}
      <p>{val}</p>
      {props.onclick && <button onClick={()=>setVal(val+1)}>Click</button>}
      {props.age && <p>Age: {props.age}</p>}
    </div>
  )
}

export {Button1, Button2, Field}