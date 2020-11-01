import React from "react";
import './App.css';
import {MenuItem, FormControl, Select} from "@material-ui/core"
function App() {
  return (
    <div className="app">
      <h1>COVID-19 TRACKER</h1>
      <FormControl className="app_dropdown">
        <Select value="abc" variant="outlined">
          <MenuItem value="WorldWide">abcd</MenuItem>
          <MenuItem value="WorldWide">yoo</MenuItem>
          <MenuItem value="WorldWide">you will be</MenuItem>
          <MenuItem value="WorldWide">amazon sde</MenuItem>


        </Select>
      </FormControl>

      {/*  Header  */}
      {/*  Title+ Select input dropdown field */}

      {/* infoboxes */}
      {/* infoboxes */}
      {/* infoboxes */}

      {/* title */}
      {/* graph */}

      {/* Chart */}
    </div>
  );
}

export default App;
