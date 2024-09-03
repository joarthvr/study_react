import { useState, useEffect } from "react";
import "../styles/Input.css";

export default function Input({ type, value, onChange }) {
  const [inputValue, setInputValue] = useState(value);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7)
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 7)}-${phoneNumber.slice(7, 11)}`;
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    let formattedValue = newValue;
    let isValid = true;

    if (type === "전화번호") {
      // 백스페이스 키 입력 처리
      if (e.nativeEvent.inputType === "deleteContentBackward") {
        formattedValue = newValue.replace(/[^0-9]/g, "");
      } else {
        formattedValue = formatPhoneNumber(newValue);
      }
      isValid = /^010-\d{4}-\d{4}$/.test(formattedValue);
      setShowWarning(!isValid && formattedValue.length > 0);
    } else if (type === "이름") {
      const koreanRegex = /^[가-힣\s]{2,}$/;
      isValid = koreanRegex.test(newValue);
      setShowWarning(!isValid && newValue.length > 0);
    } else if (type === "간단한기록") {
      isValid = true;
      setShowWarning(false);
    }

    setInputValue(formattedValue);
    onChange(formattedValue);
  };

  const handleComposition = (e) => {
    if (e.type === 'compositionend') {
      handleInputChange(e);
    }
  };

  return (
    <>
      <div className="input-box">
        <label>{type}</label>
        <input
        className='input-box-input'
          value={inputValue}
          onChange={handleInputChange}
          onCompositionEnd={handleComposition}
          type="text"
          placeholder={`${type}`}
        />
      </div>
      {showWarning && type === "이름" && (
        <p className="warning-message" role="alert">
          이름은 한글로 두 글자 이상 입력해주세요.
        </p>
      )}
      {showWarning && type === "전화번호" && (
        <p className="warning-message" role="alert">
          전화번호는 010-0000-0000 형식으로 입력해주세요.
        </p>
      )}
    </>
  );
}