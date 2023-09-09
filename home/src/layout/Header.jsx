import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>Micro Frontend</div>
      <div className={classes.menu}>
        <button className={classes.btn}> Products</button>
        <button className={classes.btn}> Products</button>
        <button className={classes.btn}> Products</button>
      </div>
    </div>
  );
};
export default Header;
