import { useState } from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const onClick = () => {
    alert("P etiketine Tıkladı")
  }
  const [componentList, setComponentList] = useState(
    [<p key={1} onClick={() => {
      onClick()
    }}>P etiketi </p>, <h1 key={2}>Başlık </h1>, <h2 key={3}>Başlık 2</h2>, <HelloWorld key={4} />]
  )

  const onClickLi = (name) => {
    alert(name)
  }
  const [data, setData] = useState([{ name: "Yasin" }, { name: "Yasin" }, { name: "Ali" }, { name: "Veli" }])
  return (
    <div className="App">
      <header className="App-header">
        {componentList}

        <h3>Liste</h3>
        <ul>
          {data.map((item, index) => {
            return <li key={index} onClick={() => {
              onClickLi(item.name)
            }}>{item.name}</li>
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
