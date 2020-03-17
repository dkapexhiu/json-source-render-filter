import React, { useState } from "react";
import dataList from "./dataList.json";

function App() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(dataList);
  const excludeColumns = [""];

  // handle change event of search input
  const handleChange = value => {
    setSearchText(value);
    filterData(value);
  };

  // filter records by search text
  const filterData = value => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(dataList);
    else {
      const filteredData = dataList.filter(item => {
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
        style={{ marginLeft: 5 }}
        type="text"
        placeholder="Type to search..."
        value={searchText}
        onChange={e => handleChange(e.target.value)}
      />
      <div className="box-container">
        {data.map((d, i) => {
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
        <div className="clearboth" />
        {data.length === 0 && <span>No records found to display!</span>}
      </div>
    </div>
  );
}

export default App;
