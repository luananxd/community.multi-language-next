import style from "./header.module.css";

export default function Header() {
  const today = new Date();

  return (
    <header className={style["header"]}>
      <h1 className={style["header__title"]}>Random Store</h1>
      <div className={style["header__links"]}>
        <a className={style["header__link"]} href="tel:+79999999999">
          Call Us
        </a>
        <a className={style["header__link"]} href="mailto:luanan@yandex.ru">
          Email Us
        </a>
        <div>
          Today is:
          <time dateTime="2025-07-14"> 07/14/2025</time>
        </div>
        <div className={style["header__cart"]}>Your cart: $0.00</div>
      </div>
    </header>
  );
}
