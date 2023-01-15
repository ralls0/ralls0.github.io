import React from "react";
import Grid from "@mui/material/Grid";
import { RootStyleCss } from "./style";

function HomePage() {
  return (
    <div style={RootStyleCss}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>Piru Piru</Grid>
      </Grid>
    </div>
  );
}

export { HomePage };
