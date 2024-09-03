import { useState, useEffect } from "react";
import SearchContainer from "./SearchContainer";
import "../styles/ListArea.css";
export default function ListArea() {
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("contactList")) || [];
    setContactList(data);
  }, []);

  const handleDelete = (index) => {
    const updatedList = contactList.filter((_, i) => i !== index);
    setContactList(updatedList);
    localStorage.setItem("contactList", JSON.stringify(updatedList));
  };

  const handleDetails = (item) => {
    console.log("세부사항:", item);
  };

  return (
    <div className="list-area">
      <SearchContainer />
      {contactList.map((item, index) => (
        <ul key={index} className="contact-item">
          <div className="contact-item-info">
            <li>{item.이름}</li>
            <li>{item.전화번호}</li>
            <li>{item.그룹}</li>
          </div>
          <div className="button-group">
            <button onClick={() => handleDetails(item)}>세부사항</button>
            <button onClick={() => handleDelete(index)}>삭제</button>
          </div>
        </ul>
      ))}
    </div>
  );
}
