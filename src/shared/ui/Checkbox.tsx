type Props = {
  value: boolean;
  onChange?: () => void;
  disabled?: boolean;
};

export const Checkbox: React.FC<Props> = ({ value, onChange, disabled }) => {
  return (
    <>
      <label className={`flex ${disabled ? "opacity-75" : ""}`}>
        <div className={`border border-black w-6 h-6 p-0.5`}>
          <div
            className={`w-full h-full ${value ? "bg-black" : "bg-transparent"}`}
          ></div>
        </div>
        <input
          disabled={disabled}
          onChange={onChange}
          value={value ? "on" : "off"}
          className="invisible size-0"
          type="checkbox"
        />
      </label>
    </>
  );
};
