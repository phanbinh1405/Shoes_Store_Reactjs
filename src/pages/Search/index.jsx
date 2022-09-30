import React from 'react'
import { Input } from "antd";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

//

export default function Search() {
  return (
    <section className="search">
      <div className="search-input">
        <div className="container-fluid">
          <label className="m">Search</label>
          <form
            className=" form d-flex justify-content-start "

          >
            <Input
              type="text"
              placeholder="Product name..."

            />
            <button className="search-btn">Search</button>
          </form>
        </div>
      </div>
      <h1 className="title">Search result</h1>
      <div className="sort-input me-1">
        <Box sx={{ minWidth: 165 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"

              label="Sort by "

              defaultValue=""
            >
              <MenuItem value="ascending">Price: Ascending</MenuItem>
              <MenuItem value="descending>">Price: descending</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="cart">
        <div className="container-fluid d-flex justify-content-end">

        </div>
      </div>
    </section>
  );
}
