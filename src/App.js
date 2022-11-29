const Privet = (props) => {
  return(
    <div>
     <p>
      Privet {props.name}, tebe {props.age} let!
     </p> 
   </div>
  )
}

const App = () => {
  const name = 'Maria'
  const age = 30


  return (
    <div>
      <h1>Greetings</h1>
      <Privet name= {name} age={age} />
      <Privet name= 'Alex' age = {30} />
    </div>
  )
}

export default App;
