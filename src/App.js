import { useState } from 'react';
import { useRavePayment } from "react-ravepayment";
import './App.css';

function App() {
  const [payment,setPayment] = useState(0)
  
  const { initializePayment } = useRavePayment({
    txref: "rave-123456",
    customer_email: "nishimwelys@gmail.com",
    customer_phone: "0780781546",
    amount: payment,
    PBFPubKey: "FLWPUBK_TEST-eacc6e8b9c6cd9b0b06ce744039cb628-X",
    production: false,
    currency:"RWF"
  });
  return (
    <div className="App">
      <h4>MAKE A ONE TIME GIFT</h4>
      <div className="donatebutton">
        <div>
          <div><input type="button" onClick={() => setPayment(100)} value="100 RWF"/></div>
        </div>
        <div>
        <div><input type="button" onClick={() => setPayment(250)} value="250 RWF"/></div>
        </div>
        <div>
        <div><input type="button" onClick={()=> setPayment(500)} value="500 RWF"/></div>
        </div>
        <div>
        <div><input type="button" onClick={()=>setPayment(1000)} value="1000 RWF"/></div>
        </div>
        <div>
        <div><input type="button" onClick={()=>setPayment(5000)} value="5000 RWF"/></div>
        </div>
        <div>
        <div><input type="button" onClick={()=>setPayment(9900)} value="9900 RWF"/></div>
        </div>
      </div>
      <div className="donatesub">
        <input type="text" onInput={(e)=>setPayment(e.target.value)} placeholder="Name your own amount , maybe 25,000 Rwf? "/>
      <span><input type="checkbox" />I'll cover my transaction fees</span>
      <button onClick={() => initializePayment()}>DONATE</button>
      </div>
      
    </div>
  );
}

export default App;
