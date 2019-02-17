import * as React from "react";
import { cn } from "@bem-react/classname";

// styles
import "./AutoList.css";

class AutoList extends React.Component {
  public render() {
    const list = cn("AutoList");

    return (
      <section className={list()}>
        <div className={list("Header")}>
          <span className={list("Title")}>123 автомобилей из 2 102</span>
          <span className={list("Text", { type: "price" })}>
            Сначала дешевые
          </span>
        </div>

        <div className={list("Section", { type: "filter" })}>
          <ul className={list("Filter")}>
            <li className={list("Text", { type: "filter", sellected: true })}>
              Все
            </li>
            <li className={list("Text", { type: "filter" })}>Компактные</li>
            <li className={list("Text", { type: "filter" })}>Средний класс</li>
            <li className={list("Text", { type: "filter" })}>Люкс</li>
            <li className={list("Text", { type: "filter" })}>Внедорожники</li>
          </ul>
        </div>

        <div className={list("Section", { type: "types" })}>
          <div className={list("TypeCard", { type: "new" })}>
            <h6 className={list("Type")}>Новые</h6>
            <span className={list("CarsNum")}>453 автомобиля</span>
          </div>
          <div className={list("TypeCard", { type: "fast" })}>
            <h6 className={list("Type")}>Быстрые</h6>
            <span className={list("CarsNum")}>26 автомобилей</span>
          </div>
          <div className={list("TypeCard", { type: "eco" })}>
            <h6 className={list("Type")}>Экономичные</h6>
            <span className={list("CarsNum")}>213 автомобилей</span>
          </div>
          <div className={list("TypeCard", { type: "suv" })}>
            <h6 className={list("Type")}>Внедорожники</h6>
            <span className={list("CarsNum")}>453 автомобиля</span>
          </div>
        </div>

        <div className={list("Section", { type: "cars" })}>
          <span>123</span>
        </div>
      </section>
    );
  }
}

export default AutoList;
