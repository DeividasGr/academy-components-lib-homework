import cx from "classnames";
import "./index.css";

function Pill({ children, color, id, className }) {
  const classes = cx(
    "pill",
    className,
    ["green", "yellow", "redish"].includes(color)
      ? `pill--${color}`
      : "pill--grey"
  );

  return (
    <div id={id} className={classes}>
      <p>{children}</p>
    </div>
  );
}

export default Pill;
