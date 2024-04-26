import ListComponent from "./components/ListRenders"
import DelayedMessage from "./components/setTimeout"

function App() {
  return (
    <>  
    <div>
    <p>List component</p>
    <ListComponent />
    </div>

    <div>
      <DelayedMessage />
    </div>
    </>
  )
}

export default App
