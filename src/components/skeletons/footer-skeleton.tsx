import style from "./footer-skeleton.module.css";
import clsx from "clsx";

export default function FooterSkeleton() {
  return (
    <footer className={style["footer-skeleton"]}>
      <div className={clsx("skeleton", style["footer-skeleton__button"])}></div>
      <div className={clsx("skeleton", style["footer-skeleton__button"])}></div>
      <div className={clsx("skeleton", style["footer-skeleton__button"])}></div>
    </footer>
  );
}
