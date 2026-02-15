export type TypographyProps = {
  Tag?:
    | keyof React.JSX.IntrinsicElements
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | React.JSXElementConstructor<any>;
  children?: React.ReactNode;
  color?: "black-surface" | "black-surface-64" | "white";
  size?: "lg" | "4.5xl" | "5xl";
  weight?: "normal" | "bold";
};

export const Typography: React.FC<TypographyProps> = ({
  Tag = "span",
  children,
  color = "white",
  size = "lg",
  weight = "normal",
}) => {
  return (
    <Tag
      className={`
      ${color === "black-surface" ? "text-(--black-surface)" : ""}
      ${color === "black-surface-64" ? "text-(--black-surface-64)" : ""}
      ${color === "white" ? "text-white" : ""}
      ${size === "lg" ? "text-lg" : ""}
      ${size === "4.5xl" ? "text-[2.5rem]" : ""}
      ${size === "5xl" ? "text-5xl" : ""}
      font-${weight}
    `}
    >
      {children}
    </Tag>
  );
};
