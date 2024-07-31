import React, { useState } from 'react'

interface Props1 {
  text: string
}
type Props2 = {
  text: string
}

interface newProps {
  text: string | number;
  onclick?: () => void;
  age?: number;
}

interface Garden {
  name: string;
  trees: number;
  flowers: number;
}

const Button1: React.FC<Props1> = (props) => {
  return (
    <button>
      <div>Button - {props.text}</div>
    </button>
  )
}

const Button2: React.FC<Props2> = (props) => {
  return (
    <button>
      <div>Button - {props.text}</div>
    </button>
  )
}

const Field: React.FC<newProps> = (props) => {
  const [val, setVal] = useState<number>(0);
  const [gard, setGard] = useState<Garden>({
    name: "Ashiq",
    trees: 99,
    flowers: 45,
  })

  const inputName = document.getElementById("name") as HTMLInputElement;
  const inputTrees = document.getElementById("trees") as HTMLInputElement;
  const inputFlowers = document.getElementById("flowers") as HTMLInputElement;

  const handleSubmit = (e:any) => {
    e.preventDefault();

    setGard({
      name: inputName.value,
      trees: parseInt(inputTrees.value),
      flowers: parseInt(inputFlowers.value),
    })
  }

  const handleSubmit2 = (e:React.FormEvent <HTMLFormElement>) => {
    e.preventDefault();

    setGard({
      name: e.target.,
      trees: Number(inputTrees.value),
      flowers: Number(inputFlowers.value),
    })
  }

  return (
    <div>
      <h1>{props.text}</h1>
      {props.onclick && <button onClick={props.onclick}>Click</button>}
      <p>{val}</p>
      {props.onclick && <button onClick={() => setVal(val + 1)}>Click</button>}
      {props.age && <p>Age: {props.age}</p>}

      <section>
        Garden
        <p> {gard.name} </p>
        <p> {gard.trees} </p>
        <p> {gard.flowers} </p>

        <div className="">
          <form action="">
            <input type="text" id='name' />
            <input type="number" id='trees' />
            <input type="number" id='flowers' />
            <button onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </section>

      {/* 2 */}
      <section>
        Garden
        <p> {gard.name} </p>
        <p> {gard.trees} </p>
        <p> {gard.flowers} </p>

        <div className="">
          <form action="" onSubmit={handleSubmit2}>
            <input type="text" id='name' />
            <input type="number" id='trees' />
            <input type="number" id='flowers' />
            <button type='submit'>Submit</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export { Button1, Button2, Field }