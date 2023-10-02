import React, { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import "./index.css";

const API_URL = `https://api.unsplash.com/`;
const SEARCH_URL = `search/photos`;
const IMAGES_PER_PAGE = 30;

const App = () => {
  const searchInput = useRef(null);
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  const fetchImage = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `${API_URL}${SEARCH_URL}?query=${
          searchInput.current.value
        }&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${
          import.meta.env.VITE_API_KEY
        }`
      );
      console.log("data", data);
      setImages(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.log(error);
    }
  }, [page]);

  useEffect(() => {
    fetchImage();
  }, [fetchImage, page]);

  const resetSearch = () => {
    setPage(1);
    fetchImage();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    resetSearch();
  };

  const handleSelection = (selection) => {
    searchInput.current.value = selection;
    resetSearch();
  };

  return (
    <div className="container">
      <h1 className="title">Image Search</h1>
      {/* Search Section */}
      <div className="search-section">
        <Form onSubmit={handleSearch}>
          <Form.Control
            type="search"
            placeholder="Type something to search..."
            className="search-input"
            ref={searchInput}
          />
        </Form>
      </div>
      {/* Filter Section */}
      <div className="filters">
        <div onClick={() => handleSelection("Nature")}>Nature</div>
        <div onClick={() => handleSelection("Sky")}>Sky</div>
        <div onClick={() => handleSelection("Forest")}>Forest</div>
        <div onClick={() => handleSelection("Waterfall")}>Waterfall</div>
      </div>
      {/* Image Section */}
      <div className="images">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.urls.small}
            alt={image.alt_description}
            className="image"
          />
        ))}
      </div>
      {/* Pagination */}
      <div className="buttons">
        {page > 1 && (
          <Button onClick={() => setPage(page - 1)}>Previous</Button>
        )}
        {page < totalPages && (
          <Button onClick={() => setPage(page + 1)}>Next</Button>
        )}
      </div>
    </div>
  );
};

export default App;
