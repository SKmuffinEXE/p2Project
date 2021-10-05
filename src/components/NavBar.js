import React from "react";
import RecipeForm from "./RecipeForm";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="sidebar">
      <NavLink to="/">home</NavLink>
      <NavLink to="/favorites">favorites</NavLink>
      <NavLink to="/form">New Recipe</NavLink>
    </div>
  );
}
