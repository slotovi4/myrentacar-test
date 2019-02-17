import * as React from "react";
import { cn } from "@bem-react/classname";
import { connect } from "react-redux";
import {
  getCarsData,
  getAllCars,
  getCompactCars,
  getMiddleClassCars,
  getLuxCars,
  getSuvCars
} from "../../actions/autoListActions";

// styles
import "./AutoList.css";

interface IProps {
  getCarsData: () => void;
  getAllCars: () => void;
  getCompactCars: () => void;
  getMiddleClassCars: () => void;
  getLuxCars: () => void;
  getSuvCars: () => void;
}

class AutoList extends React.Component<IProps> {
  public componentWillMount() {
    this.props.getCarsData();
    this.props.getAllCars();
  }

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
            <li
              className={list("Text", { type: "filter", sellected: true })}
              onClick={this.props.getAllCars}
            >
              Все
            </li>
            <li
              className={list("Text", { type: "filter" })}
              onClick={this.props.getCompactCars}
            >
              Компактные
            </li>
            <li
              className={list("Text", { type: "filter" })}
              onClick={this.props.getMiddleClassCars}
            >
              Средний класс
            </li>
            <li
              className={list("Text", { type: "filter" })}
              onClick={this.props.getLuxCars}
            >
              Люкс
            </li>
            <li
              className={list("Text", { type: "filter" })}
              onClick={this.props.getSuvCars}
            >
              Внедорожники
            </li>
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

// проверка при клике если они загружены в пропс запрос не делать

export default connect(
  null,
  {
    getCarsData,
    getAllCars,
    getCompactCars,
    getMiddleClassCars,
    getLuxCars,
    getSuvCars
  }
)(AutoList);
