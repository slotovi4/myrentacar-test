import * as React from "react";
import { cn } from "@bem-react/classname";

// styles
import "./Header.css";

class Header extends React.Component {
  public state = {
    lang: "RU",
    currencyListOpen: false,
    sellectedCurency: "РУБ"
  };

  public node: any;

  // check click on render
  public componentWillMount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }

  // detele cick on delete component
  public componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }

  public render() {
    const header = cn("Header");
    const { lang, currencyListOpen, sellectedCurency } = this.state;

    return (
      <section className={header()}>
        <div className={header("Container")}>
          <div className={header("Top")}>
            <ul className={header("Menu")}>
              <li className={header("Link", { active: true })}>все курорты</li>
              <li className={header("Link")}>о компании</li>
              <li className={header("Link")}>контакты</li>
              <li className={header("Link")}>журнал о чехии</li>
            </ul>

            <div className={header("Rigth", { activeArrow: currencyListOpen })}>
              <span
                className={header("Eng")}
                onClick={() =>
                  this.setState({ lang: lang === "RU" ? "ENG" : "RU" })
                }
              >
                {lang === "RU" ? "in English, please" : "По-русски, пожалуйста"}
              </span>
              <ul
                className={header("Currency")}
                ref={node => (this.node = node)}
                onClick={this.currencyClick}
              >
                <li className={header("CurrencyOption", { sellected: true })}>
                  {sellectedCurency}
                </li>
                <ul
                  className={header("CurrencyList", {
                    opened: currencyListOpen
                  })}
                >
                  <li
                    className={header("CurrencyOption", {
                      hidden: sellectedCurency === "РУБ" ? true : false,
                      color: "dark",
                      type: "rub"
                    })}
                    onClick={this.setCurrency}
                  >
                    РУБ
                  </li>
                  <li
                    className={header("CurrencyOption", {
                      hidden: sellectedCurency === "EUR" ? true : false,
                      color: "dark",
                      type: "eur"
                    })}
                    onClick={this.setCurrency}
                  >
                    EUR
                  </li>
                  <li
                    className={header("CurrencyOption", {
                      hidden: sellectedCurency === "USD" ? true : false,
                      color: "dark",
                      type: "usd"
                    })}
                    onClick={this.setCurrency}
                  >
                    USD
                  </li>
                </ul>
              </ul>
            </div>
          </div>

          <div className={header("Content")}>
            <div className={header("LeftContent")}>
              <h3 className={header("Name")}>MYRENTACAR . ЧЕХИЯ</h3>
              <span className={header("PreInfo")}>
                Рекомендательный прокат автомобилей на курортах и в
                туристических городах
              </span>
              <h1 className={header("Title")}>Аренда в Чехии</h1>
              <div className={header("AutoNums")}>
                <h6 className={header("AutoNum")}>
                  Всего 2 345 автомобилей со средним чеком €24 в сутки
                </h6>
                <h6 className={header("AutoNum")}>
                  Всего 2 345 автомобилей со средним чеком €24 в сутки
                </h6>
                <h6 className={header("AutoNum")}>
                  Всего 2 345 автомобилей со средним чеком €24 в сутки
                </h6>
              </div>
            </div>
            <div className={header("RightContent")}>
              <span className={header("Comments")}>ОТЗЫВЫ · 3 956</span>
              <span className={header("PreInfo")}>Мнение наших клиентов</span>
              <div className={header("InfoLinks")}>
                <span className={header("InfoLink", { type: "car" })}>
                  особенности пдд
                </span>
                <span className={header("InfoLink", { type: "map" })}>
                  подборка маршрутов
                </span>
                <span className={header("InfoLink", { type: "point" })}>
                  о стране{" "}
                  <a className={header("InfoLink", { type: "load" })} href="#">
                    + скачать.pdf
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className={header("Filter")}>
            <div className={header("FilterSection", { type: "left" })}>
              <div className={header("City")}>
                <span className={header("FilterText")}>
                  Город получения и возврата
                </span>
                <span className={header("FilterTitle")}>Карловы Вары</span>
              </div>
              <div className={header("Rent")}>
                <span className={header("FilterText")}>Даты аренды</span>
                <span className={header("FilterTitle")}>
                  28 фев. – 9 мар. · 10 дней
                </span>
              </div>
            </div>
            <div className={header("FilterSection", { type: "right" })}>
              <span className={header("FilterTitle")}>Расширенные фильтры</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // check click location
  private handleClick = (e: any) => {
    if (this.node.contains(e.target)) {
      return;
    }

    // if click on not component -> hide list
    this.setState({ currencyListOpen: false });
  };

  // on select oprion
  private setCurrency = (e: any) => {
    const value = e.target.innerText;

    // set new value & hide list
    this.setState({ sellectedCurency: value, currencyListOpen: false });
  };

  // on click currency select
  private currencyClick = () => {
    const { currencyListOpen } = this.state;

    // hide/show option list
    this.setState({ currencyListOpen: !currencyListOpen });
  };
}

export default Header;
