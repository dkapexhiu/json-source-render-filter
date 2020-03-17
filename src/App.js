import React, { useState } from 'react';

function App() {
  const dataList = [
  {
    "Country_Region": "Canada",
    "Confirmed": 373,
    "Deaths": 1,
    "Recovered": 9,
    "Active": 363
  },
  {
    "Country_Region": "Maldives",
    "Confirmed": 13,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 13
  },
  {
    "Country_Region": "Lithuania",
    "Confirmed": 17,
    "Deaths": 0,
    "Recovered": 1,
    "Active": 16
  },
  {
    "Country_Region": "Cambodia",
    "Confirmed": 7,
    "Deaths": 0,
    "Recovered": 1,
    "Active": 6
  },
  {
    "Country_Region": "Ethiopia",
    "Confirmed": 5,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 5
  },
  {
    "Country_Region": "Aruba",
    "Confirmed": 2,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 2
  },
  {
    "Country_Region": "Argentina",
    "Confirmed": 56,
    "Deaths": 2,
    "Recovered": 1,
    "Active": 53
  },
  {
    "Country_Region": "Bolivia",
    "Confirmed": 11,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 11
  },
  {
    "Country_Region": "Cameroon",
    "Confirmed": 4,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 4
  },
  {
    "Country_Region": "Burkina Faso",
    "Confirmed": 15,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 15
  },
  {
    "Country_Region": "Bahrain",
    "Confirmed": 214,
    "Deaths": 0,
    "Recovered": 77,
    "Active": 137
  },
  {
    "Country_Region": "Saudi Arabia",
    "Confirmed": 118,
    "Deaths": 0,
    "Recovered": 2,
    "Active": 116
  },
  {
    "Country_Region": "Slovenia",
    "Confirmed": 253,
    "Deaths": 1,
    "Recovered": 0,
    "Active": 252
  },
  {
    "Country_Region": "Guatemala",
    "Confirmed": 2,
    "Deaths": 1,
    "Recovered": 0,
    "Active": 1
  },
  {
    "Country_Region": "Bosnia and Herzegovina",
    "Confirmed": 24,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 24
  },
  {
    "Country_Region": "Guinea",
    "Confirmed": 1,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 1
  },
  {
    "Country_Region": "Germany",
    "Confirmed": 6672,
    "Deaths": 14,
    "Recovered": 59,
    "Active": 6599
  },
  {
    "Country_Region": "Spain",
    "Confirmed": 9428,
    "Deaths": 335,
    "Recovered": 530,
    "Active": 8563
  },
  {
    "Country_Region": "Liberia",
    "Confirmed": 1,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 1
  },
  {
    "Country_Region": "Netherlands",
    "Confirmed": 1414,
    "Deaths": 24,
    "Recovered": 2,
    "Active": 1388
  },
  {
    "Country_Region": "Pakistan",
    "Confirmed": 136,
    "Deaths": 0,
    "Recovered": 2,
    "Active": 134
  },
  {
    "Country_Region": "Oman",
    "Confirmed": 22,
    "Deaths": 0,
    "Recovered": 9,
    "Active": 13
  },
  {
    "Country_Region": "Tanzania",
    "Confirmed": 1,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 1
  },
  {
    "Country_Region": "North Macedonia",
    "Confirmed": 18,
    "Deaths": 0,
    "Recovered": 1,
    "Active": 17
  },
  {
    "Country_Region": "Albania",
    "Confirmed": 51,
    "Deaths": 1,
    "Recovered": 0,
    "Active": 50
  },
  {
    "Country_Region": "Gabon",
    "Confirmed": 1,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 1
  },
  {
    "Country_Region": "Monaco",
    "Confirmed": 7,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 7
  },
  {
    "Country_Region": "New Zealand",
    "Confirmed": 8,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 8
  },
  {
    "Country_Region": "Jersey",
    "Confirmed": 2,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 2
  },
  {
    "Country_Region": "Jamaica",
    "Confirmed": 10,
    "Deaths": 0,
    "Recovered": 2,
    "Active": 8
  },
  {
    "Country_Region": "Greenland",
    "Confirmed": 1,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 1
  },
  {
    "Country_Region": "United Arab Emirates",
    "Confirmed": 98,
    "Deaths": 0,
    "Recovered": 23,
    "Active": 75
  },
  {
    "Country_Region": "Guam",
    "Confirmed": 3,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 3
  },
  {
    "Country_Region": "Uruguay",
    "Confirmed": 8,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 8
  },
  {
    "Country_Region": "India",
    "Confirmed": 119,
    "Deaths": 2,
    "Recovered": 13,
    "Active": 104
  },
  {
    "Country_Region": "Azerbaijan",
    "Confirmed": 15,
    "Deaths": 1,
    "Recovered": 6,
    "Active": 8
  },
  {
    "Country_Region": "Congo (Brazzaville)",
    "Confirmed": 1,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 1
  },
  {
    "Country_Region": "Saint Vincent and the Grenadines",
    "Confirmed": 1,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 1
  },
  {
    "Country_Region": "Kenya",
    "Confirmed": 3,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 3
  },
  {
    "Country_Region": "Turkey",
    "Confirmed": 18,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 18
  },
  {
    "Country_Region": "Afghanistan",
    "Confirmed": 21,
    "Deaths": 0,
    "Recovered": 1,
    "Active": 20
  },
  {
    "Country_Region": "Bangladesh",
    "Confirmed": 8,
    "Deaths": 0,
    "Recovered": 2,
    "Active": 6
  },
  {
    "Country_Region": "Saint Lucia",
    "Confirmed": 2,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 2
  },
  {
    "Country_Region": "Hungary",
    "Confirmed": 39,
    "Deaths": 1,
    "Recovered": 1,
    "Active": 37
  },
  {
    "Country_Region": "San Marino",
    "Confirmed": 109,
    "Deaths": 7,
    "Recovered": 4,
    "Active": 98
  },
  {
    "Country_Region": "Mongolia",
    "Confirmed": 1,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 1
  },
  {
    "Country_Region": "France",
    "Confirmed": 5397,
    "Deaths": 127,
    "Recovered": 12,
    "Active": 5258
  },
  {
    "Country_Region": "Rwanda",
    "Confirmed": 5,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 5
  },
  {
    "Country_Region": "Slovakia",
    "Confirmed": 63,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 63
  },
  {
    "Country_Region": "Somalia",
    "Confirmed": 1,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 1
  },
  {
    "Country_Region": "Peru",
    "Confirmed": 86,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 86
  },
  {
    "Country_Region": "Norway",
    "Confirmed": 1312,
    "Deaths": 3,
    "Recovered": 1,
    "Active": 1308
  },
  {
    "Country_Region": "Cruise Ship",
    "Confirmed": 696,
    "Deaths": 7,
    "Recovered": 325,
    "Active": 364
  },
  {
    "Country_Region": "Benin",
    "Confirmed": 1,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 1
  },
  {
    "Country_Region": "Cuba",
    "Confirmed": 4,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 4
  },
  {
    "Country_Region": "Republic of the Congo",
    "Confirmed": 1,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 1
  },
  {
    "Country_Region": "Togo",
    "Confirmed": 1,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 1
  },
  {
    "Country_Region": "China",
    "Confirmed": 81032,
    "Deaths": 3217,
    "Recovered": 67910,
    "Active": 9905
  },
  {
    "Country_Region": "Armenia",
    "Confirmed": 30,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 30
  },
  {
    "Country_Region": "Dominican Republic",
    "Confirmed": 11,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 11
  },
  {
    "Country_Region": "Ukraine",
    "Confirmed": 5,
    "Deaths": 1,
    "Recovered": 0,
    "Active": 4
  },
  {
    "Country_Region": "Ghana",
    "Confirmed": 6,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 6
  },
  {
    "Country_Region": "Finland",
    "Confirmed": 277,
    "Deaths": 0,
    "Recovered": 10,
    "Active": 267
  },
  {
    "Country_Region": "Indonesia",
    "Confirmed": 134,
    "Deaths": 5,
    "Recovered": 8,
    "Active": 121
  },
  {
    "Country_Region": "Central African Republic",
    "Confirmed": 1,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 1
  },
  {
    "Country_Region": "Sweden",
    "Confirmed": 1103,
    "Deaths": 6,
    "Recovered": 1,
    "Active": 1096
  },
  {
    "Country_Region": "Vietnam",
    "Confirmed": 61,
    "Deaths": 0,
    "Recovered": 16,
    "Active": 45
  },
  {
    "Country_Region": "Russia",
    "Confirmed": 90,
    "Deaths": 0,
    "Recovered": 8,
    "Active": 82
  },
  {
    "Country_Region": "Bulgaria",
    "Confirmed": 52,
    "Deaths": 2,
    "Recovered": 0,
    "Active": 50
  },
  {
    "Country_Region": "Romania",
    "Confirmed": 158,
    "Deaths": 0,
    "Recovered": 9,
    "Active": 149
  },
  {
    "Country_Region": "Portugal",
    "Confirmed": 331,
    "Deaths": 0,
    "Recovered": 3,
    "Active": 328
  },
  {
    "Country_Region": "South Africa",
    "Confirmed": 62,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 62
  },
  {
    "Country_Region": "Liechtenstein",
    "Confirmed": 4,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 4
  },
  {
    "Country_Region": "US",
    "Confirmed": 4093,
    "Deaths": 69,
    "Recovered": 12,
    "Active": 4012
  },
  {
    "Country_Region": "Malaysia",
    "Confirmed": 566,
    "Deaths": 0,
    "Recovered": 42,
    "Active": 524
  },
  {
    "Country_Region": "Austria",
    "Confirmed": 1018,
    "Deaths": 3,
    "Recovered": 6,
    "Active": 1009
  },
  {
    "Country_Region": "Japan",
    "Confirmed": 825,
    "Deaths": 27,
    "Recovered": 144,
    "Active": 654
  },
  {
    "Country_Region": "Brazil",
    "Confirmed": 200,
    "Deaths": 0,
    "Recovered": 1,
    "Active": 199
  },
  {
    "Country_Region": "The Bahamas",
    "Confirmed": 1,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 1
  },
  {
    "Country_Region": "Panama",
    "Confirmed": 55,
    "Deaths": 1,
    "Recovered": 0,
    "Active": 54
  },
  {
    "Country_Region": "Costa Rica",
    "Confirmed": 35,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 35
  },
  {
    "Country_Region": "Luxembourg",
    "Confirmed": 77,
    "Deaths": 1,
    "Recovered": 0,
    "Active": 76
  },
  {
    "Country_Region": "Andorra",
    "Confirmed": 2,
    "Deaths": 0,
    "Recovered": 1,
    "Active": 1
  },
  {
    "Country_Region": "Ireland",
    "Confirmed": 169,
    "Deaths": 2,
    "Recovered": 0,
    "Active": 167
  },
  {
    "Country_Region": "Nigeria",
    "Confirmed": 2,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 2
  },
  {
    "Country_Region": "Ecuador",
    "Confirmed": 37,
    "Deaths": 2,
    "Recovered": 0,
    "Active": 35
  },
  {
    "Country_Region": "Brunei",
    "Confirmed": 54,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 54
  },
  {
    "Country_Region": "Australia",
    "Confirmed": 377,
    "Deaths": 3,
    "Recovered": 23,
    "Active": 351
  },
  {
    "Country_Region": "Iran",
    "Confirmed": 14991,
    "Deaths": 853,
    "Recovered": 4590,
    "Active": 9548
  },
  {
    "Country_Region": "Algeria",
    "Confirmed": 54,
    "Deaths": 4,
    "Recovered": 12,
    "Active": 38
  },
  {
    "Country_Region": "Czechia",
    "Confirmed": 298,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 298
  },
  {
    "Country_Region": "Chile",
    "Confirmed": 155,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 155
  },
  {
    "Country_Region": "Puerto Rico",
    "Confirmed": 3,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 3
  },
  {
    "Country_Region": "Belgium",
    "Confirmed": 1058,
    "Deaths": 5,
    "Recovered": 1,
    "Active": 1052
  },
  {
    "Country_Region": "Thailand",
    "Confirmed": 147,
    "Deaths": 1,
    "Recovered": 35,
    "Active": 111
  },
  {
    "Country_Region": "Iraq",
    "Confirmed": 124,
    "Deaths": 10,
    "Recovered": 26,
    "Active": 88
  },
  {
    "Country_Region": "Georgia",
    "Confirmed": 33,
    "Deaths": 0,
    "Recovered": 1,
    "Active": 32
  },
  {
    "Country_Region": "Denmark",
    "Confirmed": 916,
    "Deaths": 3,
    "Recovered": 1,
    "Active": 912
  },
  {
    "Country_Region": "Philippines",
    "Confirmed": 142,
    "Deaths": 12,
    "Recovered": 2,
    "Active": 128
  },
  {
    "Country_Region": "Moldova",
    "Confirmed": 23,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 23
  },
  {
    "Country_Region": "French Guiana",
    "Confirmed": 11,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 11
  },
  {
    "Country_Region": "Morocco",
    "Confirmed": 29,
    "Deaths": 1,
    "Recovered": 1,
    "Active": 27
  },
  {
    "Country_Region": "Namibia",
    "Confirmed": 2,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 2
  },
  {
    "Country_Region": "Guernsey",
    "Confirmed": 1,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 1
  },
  {
    "Country_Region": "Switzerland",
    "Confirmed": 2200,
    "Deaths": 14,
    "Recovered": 4,
    "Active": 2182
  },
  {
    "Country_Region": "Taiwan*",
    "Confirmed": 67,
    "Deaths": 1,
    "Recovered": 20,
    "Active": 46
  },
  {
    "Country_Region": "Seychelles",
    "Confirmed": 3,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 3
  },
  {
    "Country_Region": "Estonia",
    "Confirmed": 205,
    "Deaths": 0,
    "Recovered": 1,
    "Active": 204
  },
  {
    "Country_Region": "Kosovo",
    "Confirmed": 2,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 2
  },
  {
    "Country_Region": "Mexico",
    "Confirmed": 53,
    "Deaths": 0,
    "Recovered": 4,
    "Active": 49
  },
  {
    "Country_Region": "Lebanon",
    "Confirmed": 99,
    "Deaths": 3,
    "Recovered": 1,
    "Active": 95
  },
  {
    "Country_Region": "Korea, South",
    "Confirmed": 8236,
    "Deaths": 75,
    "Recovered": 1137,
    "Active": 7024
  },
  {
    "Country_Region": "Uzbekistan",
    "Confirmed": 6,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 6
  },
  {
    "Country_Region": "Egypt",
    "Confirmed": 150,
    "Deaths": 2,
    "Recovered": 27,
    "Active": 121
  },
  {
    "Country_Region": "Antigua and Barbuda",
    "Confirmed": 1,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 1
  },
  {
    "Country_Region": "Colombia",
    "Confirmed": 54,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 54
  },
  {
    "Country_Region": "Reunion",
    "Confirmed": 9,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 9
  },
  {
    "Country_Region": "Eswatini",
    "Confirmed": 1,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 1
  },
  {
    "Country_Region": "Cyprus",
    "Confirmed": 33,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 33
  },
  {
    "Country_Region": "Qatar",
    "Confirmed": 439,
    "Deaths": 0,
    "Recovered": 4,
    "Active": 435
  },
  {
    "Country_Region": "Italy",
    "Confirmed": 27980,
    "Deaths": 2158,
    "Recovered": 2749,
    "Active": 23073
  },
  {
    "Country_Region": "Bhutan",
    "Confirmed": 1,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 1
  },
  {
    "Country_Region": "Sudan",
    "Confirmed": 1,
    "Deaths": 1,
    "Recovered": 0,
    "Active": 0
  },
  {
    "Country_Region": "Nepal",
    "Confirmed": 1,
    "Deaths": 0,
    "Recovered": 1,
    "Active": 0
  },
  {
    "Country_Region": "Malta",
    "Confirmed": 30,
    "Deaths": 0,
    "Recovered": 2,
    "Active": 28
  },
  {
    "Country_Region": "Kuwait",
    "Confirmed": 123,
    "Deaths": 0,
    "Recovered": 9,
    "Active": 114
  },
  {
    "Country_Region": "Congo (Kinshasa)",
    "Confirmed": 2,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 2
  },
  {
    "Country_Region": "Suriname",
    "Confirmed": 1,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 1
  },
  {
    "Country_Region": "Venezuela",
    "Confirmed": 17,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 17
  },
  {
    "Country_Region": "Holy See",
    "Confirmed": 1,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 1
  },
  {
    "Country_Region": "Israel",
    "Confirmed": 255,
    "Deaths": 0,
    "Recovered": 4,
    "Active": 251
  },
  {
    "Country_Region": "Iceland",
    "Confirmed": 180,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 180
  },
  {
    "Country_Region": "Senegal",
    "Confirmed": 24,
    "Deaths": 0,
    "Recovered": 2,
    "Active": 22
  },
  {
    "Country_Region": "Cote d'Ivoire",
    "Confirmed": 1,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 1
  },
  {
    "Country_Region": "Trinidad and Tobago",
    "Confirmed": 4,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 4
  },
  {
    "Country_Region": "Jordan",
    "Confirmed": 17,
    "Deaths": 0,
    "Recovered": 1,
    "Active": 16
  },
  {
    "Country_Region": "Martinique",
    "Confirmed": 15,
    "Deaths": 1,
    "Recovered": 0,
    "Active": 14
  },
  {
    "Country_Region": "Kazakhstan",
    "Confirmed": 10,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 10
  },
  {
    "Country_Region": "Poland",
    "Confirmed": 150,
    "Deaths": 3,
    "Recovered": 13,
    "Active": 134
  },
  {
    "Country_Region": "Mauritania",
    "Confirmed": 1,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 1
  },
  {
    "Country_Region": "Mayotte",
    "Confirmed": 1,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 1
  },
  {
    "Country_Region": "Paraguay",
    "Confirmed": 8,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 8
  },
  {
    "Country_Region": "Latvia",
    "Confirmed": 34,
    "Deaths": 0,
    "Recovered": 1,
    "Active": 33
  },
  {
    "Country_Region": "Guyana",
    "Confirmed": 4,
    "Deaths": 1,
    "Recovered": 0,
    "Active": 3
  },
  {
    "Country_Region": "Belarus",
    "Confirmed": 36,
    "Deaths": 0,
    "Recovered": 3,
    "Active": 33
  },
  {
    "Country_Region": "Guadeloupe",
    "Confirmed": 6,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 6
  },
  {
    "Country_Region": "Honduras",
    "Confirmed": 6,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 6
  },
  {
    "Country_Region": "Equatorial Guinea",
    "Confirmed": 1,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 1
  },
  {
    "Country_Region": "Tunisia",
    "Confirmed": 20,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 20
  },
  {
    "Country_Region": "Singapore",
    "Confirmed": 243,
    "Deaths": 0,
    "Recovered": 109,
    "Active": 134
  },
  {
    "Country_Region": "Serbia",
    "Confirmed": 55,
    "Deaths": 0,
    "Recovered": 1,
    "Active": 54
  },
  {
    "Country_Region": "United Kingdom",
    "Confirmed": 1551,
    "Deaths": 37,
    "Recovered": 21,
    "Active": 1493
  },
  {
    "Country_Region": "Greece",
    "Confirmed": 331,
    "Deaths": 4,
    "Recovered": 8,
    "Active": 319
  },
  {
    "Country_Region": "Sri Lanka",
    "Confirmed": 28,
    "Deaths": 0,
    "Recovered": 1,
    "Active": 27
  },
  {
    "Country_Region": "Croatia",
    "Confirmed": 57,
    "Deaths": 0,
    "Recovered": 2,
    "Active": 55
  }
];

  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(dataList);
  const excludeColumns = [""];

  // handle change event of search input
  const handleChange = value => {
    setSearchText(value);
    filterData(value);
  };

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(dataList);
    else {
      const filteredData = dataList.filter(item => {
        return Object.keys(item).some(key =>
          excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  }

  return (
    <div className="App">
      Search: <input
        style={{ marginLeft: 5 }}
        type="text"
        placeholder="Type to search..."
        value={searchText}
        onChange={e => handleChange(e.target.value)}
      />
      <div className="box-container">
        {data.map((d, i) => {
          return <div key={i} className="box">
            <b>Country: </b>{d.Country_Region}<br />
            <b>Confirmed: </b>{d.Confirmed}<br />
            <b>Deaths: </b>{d.Deaths}<br />
            <b>Recovered: </b>{d.Recovered}
          </div>
        })}
        <div className="clearboth"></div>
        {data.length === 0 && <span>No records found to display!</span>}
      </div>
    </div>
  );
}

export default App;
