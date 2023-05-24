import { useState } from "react";

const Filter = (props) => {
  const [year, setYear] = useState("");
  const yearSelectionHandler = (event) => {
    setYear(event.target.value);
    props.onDateChange(year);
  };

  return (
    <div className="filter">
      <p>Filter by year</p>
      <p>Current year: {year}</p>
      <form action="#">
        <label>
          <select
            id="selected-year"
            name="selected-year"
            required
            // size="4"
            onChange={yearSelectionHandler}
          >
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default Filter;
