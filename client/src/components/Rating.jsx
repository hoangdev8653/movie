import { Rate } from "antd";
function Rating({ rating, disabled, onRateChange, allowHalf, defaultValue }) {
  const handleChange = (value) => {
    onRateChange(value);
  };

  return (
    <div>
      <Rate
        defaultValue={defaultValue}
        value={rating}
        disabled={disabled}
        onChange={handleChange}
        allowHalf={allowHalf}
      />
    </div>
  );
}

export default Rating;
