import { NavLink, Outlet } from "react-router-dom";

export function AdminLayout() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <ul class="navbar-nav justify-content-end">
            <li class="nav-item ">
              <NavLink className={"nav-link"}>
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className={"nav-link"} to={"/products"}>
                Products
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className={"nav-link"} to={"/products/new"}>
                New product
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className={"nav-link"} to={"/contact"}>
                Contact
              </NavLink>
            </li>
            <li class="nav-item ">
              <NavLink className={"nav-link "} to={"/login"}>
                Login
              </NavLink>
            </li>

          </ul>
        </div>
      </nav>
      <div>
      <Outlet></Outlet>
      </div>
    </>
  );
}
