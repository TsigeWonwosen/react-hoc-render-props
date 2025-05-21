import { useState, useEffect } from "react";
// import axios from "axios";
// const URL = "https://jsonplaceholder.typicode.com/posts";

const useRequest = () => {
  const [posts, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;
    const fetchProduct = async () => {
      try {
        setLoading(true);
        // const response = await axios(URL);
        const response = await import("../../data/blogs.json");

        if (!ignore) {
          setData(response.blogs.slice(0, 10));
          setError("");
        }
      } catch (err) {
        setError("Error Fetching Data");
        setData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();

    return () => {
      ignore = true;
    };
  }, []);
  return { posts, loading, error };
};
export default useRequest;
