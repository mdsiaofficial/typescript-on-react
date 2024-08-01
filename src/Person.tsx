

export type Props = {
  name: string;
  age: number;
  available: boolean | null;
}

const Person = ({name,age,available}: Props) => {
  return (
    <div>
      <p>{ name }</p>
      <p>{ age }</p>
      <p>{ available }</p>
    </div>
  )
}

export default Person