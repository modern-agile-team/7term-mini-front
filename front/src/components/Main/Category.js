export default function Category() {
  return (
    <>
      <span>카테고리 선택</span>
      <div className="radios">
        <label>
          <input type="radio" name="category" value="1" checked />
          자유
        </label>
        <label>
          <input type="radio" name="category" value="3" />
          10대
        </label>
        <label>
          <input type="radio" name="category" value="4" />
          20대
        </label>
        <label>
          <input type="radio" name="category" value="5" />
          30대
        </label>
      </div>
    </>
  );
}
