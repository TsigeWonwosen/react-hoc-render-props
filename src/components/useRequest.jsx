import { useState, useEffect } from "react";
import axios from "axios";

const useRequest = (initUrl) => {
  const [posts, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios(initUrl);
        if (!ignore) {
          setData(response.data);
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
  }, [initUrl]);
  return { posts, loading, error };
};
export default useRequest;
