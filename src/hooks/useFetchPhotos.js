import { useState, useEffect } from "react";

const API_URL = "https://picsum.photos/v2/list?limit=30";

export default function useFetchPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        return res.json();
      })
      .then((data) => {
        if (!ignore) {
          setPhotos(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!ignore) {
          setError(err.message || "Something went wrong");
          setLoading(false);
        }
      });

    return () => {
      ignore = true; // avoids setting state if component unmounts
    };
  }, []);

  return { photos, loading, error };
}