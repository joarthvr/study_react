import { useState } from "react";
import "../styles/InputContainer.css";
import Input from "./Input";
import GroupSelect from "./GroupSelect";

export default function InputContainer() {
  const [errors, setErrors] = useState(false);

  const handleSave = () => {
    let items = JSON.parse(localStorage.getItem("contactList")) || [];

    // 이름 검사: 한글이면서 2글자 이상
    if (!/^[가-힣]{2,}$/.test(formData.이름)) {
      setErrors(true);
      alert("이름은 2글자 이상의 한글이어야 합니다.");
      return;
    }

    // 전화번호 검사: 010-XXXX-XXXX 형식
    if (!/^010-\d{4}-\d{4}$/.test(formData.전화번호)) {
      setErrors(true);
      alert("올바른 전화번호 형식이 아닙니다. (예: 010-1234-5678)");
      return;
    }

    // 그룹 검사
    if (formData.그룹 === "") {
      setErrors(true);
      alert("그룹을 선택해주세요.");
      return;
    }

    if (errors) {
      const newData = [...items, formData];
      localStorage.setItem("contactList", JSON.stringify(newData));
      alert("저장되었습니다.");

      setFormData({
        이름: "",
        전화번호: "",
        그룹: "",
        간단한기록: "",
      });
      setErrors(false);
      return;
    }
  };

  const [formData, setFormData] = useState({
    이름: "",
    전화번호: "",
    그룹: "",
    간단한기록: "",
  });

  console.log(formData);

  const handleInputChange = (type, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [type]: value,
    }));
  };

  return (
    <div>
      <div className="input-container">
        <Input
          type="이름"
          value={formData.이름}
          onChange={(value) => handleInputChange("이름", value)}
        />
        <Input
          type="전화번호"
          value={formData.전화번호}
          onChange={(value) => handleInputChange("전화번호", value)}
        />
        <GroupSelect
          type="그룹"
          value={formData.그룹}
          onChange={(value) => handleInputChange("그룹", value)}
        />
        <Input
          type="간단한기록"
          value={formData.간단한기록}
          onChange={(value) => handleInputChange("간단한기록", value)}
        />
        <button onClick={handleSave} className="input-con-btn">
          저장
        </button>
      </div>
    </div>
  );
}
