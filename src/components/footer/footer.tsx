import style from "./footer.module.css";
import { classes } from "@/utils/helpers";

export default function Footer() {
  return (
    <footer className={style["footer"]}>
      <button
        className={classes(style["footer__button"], {
          [style["footer__button--active"]]: true,
        })}
        type="button"
      >
        English
      </button>
      <button className={classes(style["footer__button"])} type="button">
        Русский
      </button>
      <button className={classes(style["footer__button"])} type="button">
        عربي
      </button>
    </footer>
  );
}
