import React, { useEffect, useContext, useDispatch } from "react";
import axios from "axios";

import ListView from "./List";
import { API_URL } from "../../../config";
import { store } from "../../../config/store";

const List = () => {
  const { dispatch, state } = useContext(store);
  // fetch data on first load
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${API_URL}/companies`);
      if (data) dispatch({ type: "UPDATE_COMPANIES", payload: data });
    };

    fetchData();
  }, [dispatch]);

  return <ListView companies={state.companies} />;
};

export default List;
