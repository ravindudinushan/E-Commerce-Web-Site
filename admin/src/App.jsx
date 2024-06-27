import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <main className="bg-primary text-tertiary">
      <Navbar/>
      <Admin/>
    </main>
  )
}