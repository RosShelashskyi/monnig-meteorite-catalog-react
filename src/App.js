import './App.css';
import logo from './assets/TCU.jpg'
import searchIcon from "./assets/search.png"

function App() {
  return (
    <div className="App">
      <Title/>
      <Body/>
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

function Body(){
  return(
    <div className='pageBody'>
      <div className='content'>
        <ContentTopBar/>
        <TableContent/>
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
          <img src={searchIcon}/>
      </button>
    </form>
  )
}

function TableContent(){
  return(
    <div className='tableContent'>
      <TableTop/>
      <TableData/>
      <TableBottom/>
    </div>
  )
}

function TableTop(){
  return(
    <div className='tableTop'>
      <div class="tableTopElement">Name</div>
      <div class="tableTopElement">Monnig Number</div>
      <div class="tableTopElement">Country</div>
      <div class="tableTopElement">Class</div>
      <div class="tableTopElement">Group</div>
      <div class="tableTopElement">Year</div>
      <div class="tableTopElement">Weight</div>
    </div>
  )
}

function TableData(){

}

function TableBottom(){
  return(
    <div className='tableBottom'>
      <div>Results</div>
      <div>1-n</div>
      <div className='tableNavigation'>
        <div class="goTo">.</div>
        <div class="goTo">1</div>
        <div class="goTo">2</div>
        <div class="goTo">.</div>
      </div>
    </div>
  )
}

export default App;
