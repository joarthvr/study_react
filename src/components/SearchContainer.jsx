import "../styles/SearchContainer.css";
export default function SearchContainer() {
  return (
    <div className="search-con">
      <input
        className="search-con-input"
        type="text"
        placeholder="검색어를 입력 후 엔터를 누르세요."
      />
      <button className="whole-list-see-btn">전체리스트 보기</button>
    </div>
  );
}
