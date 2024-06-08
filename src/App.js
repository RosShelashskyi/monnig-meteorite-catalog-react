import './App.css';
import logo from './assets/TCU.jpg'
import searchIcon from "./assets/search.png"

function App() {
  return (
    <div className="App">
      <Title/>
      <Body samples={SAMPLES}/>
    </div>
  );
}

function Title(){
  return(
    <div className='title'>
      <div className='topLeft'>
        <img className='titleLogo' src={logo} alt=''></img>
        <div className='titleText'>Monnig Meteorite Catalog</div>
      </div>
      <LoginButton/>
    </div>
  )
}

function LoginButton(){
  return (
    <button className='login'>Curator login</button>
  )
}

function Body({samples}){
  return(
    <div className='pageBody'>
      <div className='content'>
        <ContentTopBar/>
        <TableContent samples={samples}/>
      </div>
    </div>
  )
}

function ContentTopBar(){
  return(
    <div className='topBar'>
      <div>
        <AddButton/>
        <ViewLoansButton/>
      </div>
      <SearchBar/>
    </div>
  )
}

function AddButton(){
  return(
    <button className='addButton'>Add</button>
  )
}

function ViewLoansButton(){
  return(
    <button className='viewLoansButton'>View Loans</button>
  )
}

function SearchBar(){
  return(
    <form action="" className="searchBar">
      <input type="text" placeholder="Search" name="q"/>
      <button type="submit">
          <img src={searchIcon} alt=''/>
      </button>
    </form>
  )
}

function TableContent({samples}){
  return(
    <div className='tableContent'>
      <TableTop/>
      <TableData samples={samples}/>
      <TableBottom/>
    </div>
  )
}

function TableTop(){
  return(
    <div className='tableTop'>
      <div className="tableTopElement">Name</div>
      <div className="tableTopElement">Monnig Number</div>
      <div className="tableTopElement">Country</div>
      <div className="tableTopElement">Class</div>
      <div className="tableTopElement">Group</div>
      <div className="tableTopElement">Year</div>
      <div className="tableTopElement">Weight</div>
    </div>
  )
}

function TableData({samples}){
  const rows = [];
  samples.forEach((sample) => {
    rows.push(
      <DataRow sample={sample} key={sample.id}/>
    );
  })
  return(
    <div>{rows}</div>
  )
}

function TableBottom(){
  return(
    <div className='tableBottom'>
      <div>Results</div>
      <div>1-n</div>
      <div className='tableNavigation'>
        <div className="goTo">.</div>
        <div className="goTo">1</div>
        <div className="goTo">2</div>
        <div className="goTo">.</div>
      </div>
    </div>
  )
}

function DataRow({sample}){
  return(
    <div className='dataRow'>
      <div className="nameCell">{ sample.name }</div>
      <div>{ sample.monnig_number }</div>
      <div>{ sample.country }</div>
      <div>{ sample.sample_class }</div>
      <div>{ sample.group }</div>
      <div>{ sample.date_found_year }</div>
      <div>{ sample.sample_weight_g }</div>
    </div>
  )
}

const SAMPLES = [
  {
      "id": "1799332469972013056",
      "name": "Abbott",
      "monnig_number": "M398.1",
      "country": "USA",
      "sample_class": "Ordinary Chondrite",
      "group": "H",
      "date_found_year": "1951",
      "sample_weight_g": 325.1,
      "loan": null
  },
  {
      "id": "1799332469976207360",
      "name": "Abee",
      "monnig_number": "M499.2",
      "country": "Canada",
      "sample_class": "Enstatite Chondrite",
      "group": "EH",
      "date_found_year": "1952",
      "sample_weight_g": 453.1,
      "loan": null
  }
]

export default App;
