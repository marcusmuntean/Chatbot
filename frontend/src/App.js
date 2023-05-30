import { TextField, Box, Button, Typography } from "@mui/material";
import { useState, React } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");

  const GenerateResponse = () => {
    let url = "http://localhost:9000/chat/send/" + prompt;
    axios
      .get(url)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Typography variant="h3" marginLeft={"45%"} marginBottom={"15px"}>
        Chatbot
      </Typography>
      <Box width={"40%"} marginLeft={"30%"}>
        <TextField
          autoFocus
          margin="dense"
          label="Message"
          multiline
          fullWidth
          rows={9}
          variant="filled"
          value={prompt}
          onChange={(e) => {
            setPrompt(e.target.value);
          }}
        />
        <Button variant="contained" onClick={() => GenerateResponse()}>
          Generate Response
        </Button>
      </Box>
    </>
  );
}

export default App;
