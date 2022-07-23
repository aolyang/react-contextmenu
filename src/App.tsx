import './App.css'
import { Grid } from "@mui/material";
import MuiDemo from "./examples/Mui";
import "@anti-lib/rc-menu/index.css";

function App() {

  return (
    <div className="App">
      <Grid container
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ width: ":100%", height: "100%" }}>
        <MuiDemo/>
        <div>

        </div>
      </Grid>
    </div>
  )
}

export default App
