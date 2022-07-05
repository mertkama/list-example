import { useState } from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const onClick = () => {
    alert("P etiketine Tıklandı")
    const arr = [...data]
    arr[0].name = "Mahmut"
    setData(arr);

  }
  const [componentList, setComponentList] = useState(
    [<p key={1} onClick={() => {
      onClick()
    }}>P etiketi </p>, <h1 key={2}>Başlık </h1>, <h2 key={3}>Başlık 2</h2>, <HelloWorld key={4} />]
  )

  const onClickLi = (name) => {
    alert(name)
  }


  const [data, setData] = useState([{ name: "Yasin" }, { name: "ahmet" }, { name: "Hikmet" }, { name: "ab" }, { name: "Ali" }, { name: "Veli" }])
  return (
    <div className="App">
      <header className="App-header">

        <h3>Liste</h3>
        {data.map((item, index) => {
          if (item.name.includes("Hikmet")) {
            return null
          }
          if (item.name === "ahmet") {
            return <h2>{ item.name.charAt(0).toUpperCase()}</h2>
          }
          if (item.name.length > 3) {
            return <h1 key={index}>{item.name}</h1>
          }
          return <p key={index}
            onClick={() => { onClickLi(item.name) }}>
            {item.name.length <= 2 ? "İsminiz Geçersiz" : item.name}
          </p>
        })}
      </header>
    </div>
  );
}

export default App;
