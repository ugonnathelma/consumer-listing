import React, { useEffect, useState } from "react";
import axios from "axios";

import ListView from "./List";
import { API_URL } from "../../../config";

const List = () => {
  const [companies, setCompanies] = useState([]);

  // fetch data on first load
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${API_URL}/companies`);
      if (data) setCompanies(data);
    };

    fetchData();
  }, []);

  return <ListView companies={companies} />;
};

export default List;
