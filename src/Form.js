import React from "react";

export default function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="Github username"
        value={props.addProfiles}
        onChange={props.handleChange}
        required
      />
      <button>Add card</button>
    </form>
  );
}
