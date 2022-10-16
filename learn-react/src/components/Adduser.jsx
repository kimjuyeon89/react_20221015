import { useState } from "react";

function AddUser({ onCreate }) {
  const [inputs, setInputs] = useState({
    name: "",
    age: "",
  });

  const handleInput = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onClickSubmit = () => {
    onCreate(inputs);
    setInputs({
      name: " ",
      age: " ",
    });
  };

  console.log(inputs);

  return (
    <div>
      <input
        type="text"
        value={inputs.name}
        onChange={handleInput}
        name="name"
      />
      <input
        type="number"
        value={inputs.age}
        onChange={handleInput}
        name="age"
      />
      <button onClick={onClickSubmit}>등록</button>
    </div>
  );
}

export default AddUser;
