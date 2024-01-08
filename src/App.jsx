
import './App.css';



function App(props) {
  // code here

  let data = props.props

  let galleryStyle = {
    textAlign:"center"
  }

  let styleMydiv = {
    display:"grid",
    gridTemplateColoumns:"repeat(2,1fr)",

  }

  return(
  <>
  <h1 style={(galleryStyle)}>Kalvium Gallery </h1>

{/* 1st Method */} 
  <div style={styleMydiv}>
    <img src={data[0].img} width={"200px"}></img>
    <img src={data[1].img} width={"200px"}></img>
    <img src={data[2].img} width={"200px"}></img>
    <img src={data[3].img} width={"200px"}></img>
  </div>

{/* 2nd Method  */}
  {/* <div>
    {data.map((el) => (
      <div key={el.id}>
        <img src={el.img} width={"300px"} style={{marginBottom: "50px"}} />
        </div>
    ))}
  </div> */}
  </>)
}


export default App;
