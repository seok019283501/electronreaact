import { useEffect, useState } from "react";
function App() {
    const [loading,setLoading] = useState(true);
    const [conis,setCoins] = useState([]);
    useEffect(()=>{//컴포넌트가 렌더링 될때마다 특정 작업을 실행할 수 있도록 하는 hook
      fetch("https://api.coinpaprika.com/v1/tickers").then((response)=>
      response.json())
      .then((json)=>{
        setCoins(json);
        setLoading(false);

      });
    }, [])
    return (
      <div>
        <h1>The Coins ({conis.length})</h1>
        {loading ? <strong>Loading..</strong> : null}
        <ul>
          {conis.map((coin)=><li>{coin.name} ({coin.symbol}) : $ {coin.quotes.USD.price} USD</li>)}
        </ul>
      </div>
    )

}

export default App;
