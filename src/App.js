import React, { useState } from "react";
import axios from "axios";

function App() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(null);
  const excludeColumns = [""];

  const fetchData = async () => {
    const response = await axios.get(
      "https://json-api-test123.herokuapp.com/data"
    );
    setData(response.data);
  };

  const resetSearch = () => {
    setSearchText("");
  };

  React.useEffect(() => {
    if (searchText === "") {
      fetchData();
    }
  }, [searchText]);

  React.useEffect(() => {
    fetchData();
    resetSearch();
  }, []);

  // handle change event of search input
  const handleChange = value => {
    setSearchText(value);
    filterData(value);
  };

  // filter records by search text
  const filterData = value => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(data);
    else {
      const filteredData = data.filter(item => {
        return Object.keys(item).some(key =>
          excludeColumns.includes(key)
            ? false
            : item[key]
                .toString()
                .toLowerCase()
                .includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  };

  return (
    <div className="App">
      Search:{" "}
      <input
        id="inputField"
        style={{ marginLeft: 5 }}
        type="text"
        placeholder="Type to search..."
        value={searchText}
        onChange={e => handleChange(e.target.value)}
      />
      <div className="box-container">
        {data &&
          data.map((d, i) => {
            return (
              <div key={i} className="box">
                <b>Country: </b>
                {d.Country_Region}
                <br />
                <b>Confirmed: </b>
                {d.Confirmed}
                <br />
                <b>Deaths: </b>
                {d.Deaths}
                <br />
                <b>Recovered: </b>
                {d.Recovered}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
