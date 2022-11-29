const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.part1}</p>
      <p>{props.part2}</p>
      <p>{props.part3}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>{props.exercises1}</p>
      <p>{props.exercises2}</p>
      <p>{props.exercises3}</p>
    </div>
  )
}

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App


