import React, { useState } from "react";
import styled from "styled-components";

const Search = styled.input`
  width: 100%;
  border: 0;
  margin: 0;
  height: 1.1875em;
  display: block;
  padding: 6px 0 7px 5px;
  min-width: 0;
  background: none;
  box-sizing: content-box;
  text-align: start;
  cursor: text;
  font-size: inherit;
  :focus {
    outline: 0;
    border-bottom: 2px solid #1976d2;
  }
`;

const Label = styled.label`
  display: inline-block;
  left: 15px;
  top: 16px;
  transition: all 2s ease-in;
  color: #1976d2;
`;

const Container = styled.div`
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms;
  background-color: #fff;
  display: block;
  padding: 25px;
`;

export default ({ onSubmit }) => {
  const [query, setQuery] = useState("");
  const [labelActive, setLabel] = useState(false);

  const handleChange = event => setQuery(event.target.value.trim());

  const onKeyDown = event => {
    if (event.key === "Enter") {
      onSubmit(query);
    }
  };

  return (
    <Container>
      {labelActive && <Label>Search...</Label>}
      <Search
        placeholder={!labelActive ? "Search..." : ""}
        value={query}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        onFocus={() => setLabel(true)}
        onBlur={() => setLabel(false)}
      />
    </Container>
  );
};
