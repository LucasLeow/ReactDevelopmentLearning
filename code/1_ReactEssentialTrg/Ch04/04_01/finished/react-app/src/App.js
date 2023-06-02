import './App.css';
import { Link, Outlet } from "react-router-dom";

export function Home() {
  return (
    <div>
        <h1>My Website</h1>
    </div>
  );
}
export function About() {
  return (
    <div>
      <h1>About Us</h1>
      <Outlet />

      <span>
				<Outlet />
			</span>
    </div>
  )
}

export function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
    </div>
  )
}

export function History() {
  return(
    <div>
      <p>Our History</p>
     
    </div>
  );
}
export function App() {
  return (
    <div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>Testing</h1>
    </div>
  )
}

