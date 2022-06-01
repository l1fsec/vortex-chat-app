import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const BoxWrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex", //something is off with styling, not sure how to fix.
  alignItems: "center",
  justifyContent: "center",
  background: "#003566",
});

const AuthBox = (props) => {
  return (
    <BoxWrapper>
      <Box
        sx={{
          width: 700,
          height: 400, //Style the box
          bgcolor: "#0d1321",
          borderRadius: "5px",
          boxShadow: "0 10px 10px 0 rgb(13, 19, 33 / 10%",
          flexDirection: "column",
          padding: "25px",
        }}
      >
        {props.children} {/*Here will be others*/}
      </Box>
    </BoxWrapper>
  );
};

export default AuthBox;
