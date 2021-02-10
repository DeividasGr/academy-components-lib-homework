import cx from "classnames";
import "./index.css";

function Divider({ isShort, isFancy, className }) {
  const classes = cx("divider", className, {
    "divider--fancy": isFancy,
    "divider--short": isShort,
  });

  return <hr className={classes} />;
}

export default Divider;
