import { Link } from "react-router-dom";
import PageNav from "../Components/PageNav";

export default function HomePage() {
  return (
    <div>
      <PageNav />
      <h2>Home</h2>
      <Link to="/app">Go to the app</Link>
    </div>
  );
}
