import React, { useState } from "react";
import { Container, TextField, CircularProgress, Alert, List, ListItem, ListItemText } from "@mui/material";
import useFetchData from "../hooks/useFetchData";

const DataPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, loading, error } = useFetchData("https://jsonplaceholder.typicode.com/posts");

  const filteredData = data
    ? data.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <Container>
      <h2>Data Page</h2>
      <TextField
        label="Search Posts"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      {!loading && !error && (
        <List>
          {filteredData.map((item) => (
            <ListItem key={item.id}>
              <ListItemText primary={item.title} secondary={item.body} />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default DataPage;
