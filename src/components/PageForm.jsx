import React from "react";

function PageForm({ setPage }) {
  const [input, setInput] = React.useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(input);
  };
  return (
    <form onSubmit={handleSubmit} classNameName='form-input2'>
      <label>
        Page:
        <input
          classNameName='form-page-number2'
          type='text'
          name='input'
          value={input}
          onChange={handleChange}
        />
      </label>
      <button type='submit'> Change Page</button>
    </form>
  );
}

export default PageForm;
