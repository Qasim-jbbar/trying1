import "./Navbar.css"
import { FaStoreAlt } from "react-icons/fa"
export default Navbar = ()=>{

    return(
        <div>
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand"><Image src=""/><FaStoreAlt /></a>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
        </div>
    )
}