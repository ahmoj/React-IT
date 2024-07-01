/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import QuoteCard from "../../components/Cards/QuoteCard/QuoteCard";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Pagination from '@mui/material/Pagination';
import "./Quotes.css"

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0)

  const handleChange = (event, value) => {
    setPage(value);
  };

  async function getQuotes() {
    setIsLoading(true)
    try {
      
      const response = await fetch ('https://api.quotable.io?limit=16&page=${page}&sortBy=author&order=asc', {
        mode: 'no-cors',
      })

      const result = await response.json()
      console.log(result)
      setQuotes(result.results)
    } 
    catch (error) {
      console.log(error)
    } 
    finally {
      setIsLoading(false) 
    }
  }

  useEffect(() => {
    getQuotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  return (
    <div className="quotes">
      {isLoading ? (
        <Box sx={{ display: "flex", position: "absolute", top: 200 }}>
          <CircularProgress />
        </Box>
      ) : (
        quotes.map((quote) => (
          <QuoteCard
            key={quote._id}
            author={quote.author}
            quote={quote.content}
            tags={quote.tags}
          />
        ))
      )}
      <div>
        <Pagination count={10} page={page} onChange={handleChange} />
      </div>
    </div>
  );
}

export default Quotes;