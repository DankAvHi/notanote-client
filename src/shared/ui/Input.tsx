type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<Props> = (props) => {
  return (
    <input
      {...props}
      className={`
        border border-(--black-surface)
        p-5 
        bg-(--white) 
        w-full 
        text-(--black-surface)
        placeholder:text-(--black-surface-64)
        ${props.className}`}
    />
  );
};
