import React from "react";
import { useGlobalContext } from "./context";

export const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    //Accessing through elements
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };
  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form action="" className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          id=""
          className="form-input search-input"
          placeholder="cat"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};
