/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function QuoteCard({ author, quote, tags }) {
  return (
    <Card sx={{ width: 275, boxShadow: "0px 10px 20px 5px black" }}>
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {author}
        </Typography>
        <Typography variant="body3">{quote}</Typography>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {tags.map((tag, index, arr) => {
            const doesNextTagExists = arr[index + 1];
            return (
              <Typography sx={{ mb: 1.5 }} key={index}>
                {tag}
                {doesNextTagExists && ",  "}
              </Typography>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

export default QuoteCard;