import "../styles/Input.css";
import { useState, useEffect } from "react";
export default function GroupSelect({ type, value, onChange }) {
  const optionArr = ["가족", "친구", "직장", "스터디"];
  const [selectValue, setSelectValue] = useState(value);
  useEffect(() => {
    setSelectValue(value);
  }, [value]);
  const handleSelectChange = (e) => {
    const newValue = e.target.value;
    setSelectValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="group-select-box">
      <label>{type}</label>
      <div className="select-box">
        <select  className = "group-select-box-select"onChange={handleSelectChange}>
          {optionArr.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>
        <button className='group-select-box-addBtn'>조직추가</button>
      </div>
    </div>
  );
}
