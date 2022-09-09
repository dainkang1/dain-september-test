import './App.css';
import {useState , useEffect} from 'react'

var dataArray = [
  {  
    spent: '200',
    customerId: '1001',
    date: '1/12/20'
  },
  {  
    spent: '250',
    customerId: '1002',
    date: '1/13/20'
  },
  {
    spent: '300',
    customerId: '1003',
    date: '1/14/20' 
  }
]

function App() {
  const [data, setData] = useState(dataArray)
  
  useEffect(() => {
    const addLoyaltyPoints = () => {
      let loyalty = 0
      for(let i = 0; i < data.length; i++) {
        if(data[i].spent > 100) {
          loyalty = (data[i].spent * 2) - 150
          data[i].loyalty = loyalty
        }
        if(data[i].spent < 100 && data[i].spent > 50) {
          loyalty = data[i].spent - 50
          data[i].loyalty = loyalty
        }
        setData({...data})
      }
    }
    addLoyaltyPoints()
  })

  return (
    <div className="App">
      {Object.values(data).map( ({spent, date, customerId, loyalty}) => (
          <div key={customerId}>
            <div> spent: {spent} <br/></div>
            <div> date: {date}  <br/></div>
            <div> customerId: {customerId} </div>
            <div> loyalty: {loyalty}</div>
            <br/>
          </div>
        )
      )}
    </div>
  )
}

export default App;
