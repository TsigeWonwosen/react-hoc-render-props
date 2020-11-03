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
    <form onSubmit={handleSubmit} className='form'>
      <label>
        Page:
        <input
          className='form-input'
          type='text'
          name='input'
          value={input}
          onChange={handleChange}
        />
      </label>
      <button type='submit'> Change</button>
    </form>
  );
}

export default PageForm;
