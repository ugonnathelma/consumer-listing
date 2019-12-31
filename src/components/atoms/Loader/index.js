import React from "react";
import { Loader } from "./styles";
import loaderImage from "../../../images/loading-gif.gif";

export default () => (
  <Loader data-test-id={"loader"}>
    <span>
      <img src={loaderImage} alt="Loading..." width="150px" />
    </span>
  </Loader>
);
