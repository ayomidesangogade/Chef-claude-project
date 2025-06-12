import { createRoot } from "react-dom/client"
import App from "./App"


const root = createRoot(document.getElementById("root"))
root.render(
  <App />
)

// function App() {

//   function handleClick() {
//     console.log("I was Clicked!")
//   }

//   function handleMouseOver() {
//     console.log("I was clicked!")
//   }
//   return (
//     <main className="container">
//       <img
//         src="https://picsum.photos/640/360"
//         alt="Placeholder image from Picsum"
//         onMouseOver={handleMouseOver}
//       />
//       <button onClick={handleClick}>Click me</button>
//     </main>
//   )
// }