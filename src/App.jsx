import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import Child3 from "./components/Child3";
import FirstContextProvider from "./components/FirstContext";

function App() {
  return (
    <section>
      <div>
        <FirstContextProvider>
        <Child1 />
        <Child2 />
        <Child3 />
        </FirstContextProvider>
       
      </div>
    </section>
  );
}
export default App;
