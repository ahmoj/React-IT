import { useContext, useState } from "react";
import { TextField, Button, Container, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const Login = () => {
  const navigate = useNavigate();
  const { setLoggedInUser } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      email,
      password,
    };
    const localUserString = localStorage.getItem("user");
    const localUser = JSON.parse(localUserString);
    if (
      user.email === localUser.email &&
      user.password === localUser.password
    ) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      setLoggedInUser(user);
      navigate("/");
    } else {
      alert("Nisu ispravni kredencijali.");
    }
  };
  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;