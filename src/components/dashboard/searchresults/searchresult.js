import React from "react";
import classes from "./searchresult.module.css";

import ResultCard from "../../../shared/resultCard";

import flag from "../../../assets/icons/flag.svg";
import Pagination from "../../../shared/pagination/pagination";

const SearchResult = (props) => {
  const results = props.results;

  return (
    <div className={classes.main}>
      <div>
        <p>Search Results: </p>
        <img src={flag} alt="flag" />
      </div>
      <div className={classes.resultslist}>
        {results.map((x, index) => (
          <ResultCard
            key={index}
            name={x.name}
            logo={x.logo}
            button={x.button}
            zone={x.zone}
            region={x.region}
            zoneStyles={x.zonestyle}
            regionFlag={x.regionFlag}
          />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default SearchResult;
