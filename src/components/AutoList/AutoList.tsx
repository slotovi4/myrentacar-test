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

// interface
import { ICar } from "../../actions/interface";

// components
import Car from "../Car/Car";

// styles
import "./AutoList.css";

interface IProps {
  allCars: ICar[] | null;
  compactCars: ICar[] | null;
  middleClassCars: ICar[] | null;
  luxCars: ICar[] | null;
  suvCars: ICar[] | null;
  getCarsData: () => void;
  getAllCars: () => void;
  getCompactCars: () => void;
  getMiddleClassCars: () => void;
  getLuxCars: () => void;
  getSuvCars: () => void;
}

class AutoList extends React.Component<IProps> {
  public state = {
    cars: []
  };

  public async componentWillMount() {
    await this.props.getCarsData();
    await this.props.getAllCars();

    this.setState({ cars: this.props.allCars });
  }

  public render() {
    const list = cn("AutoList");
    const { cars } = this.state;

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
          {cars && cars.map((car: ICar) => <Car key={car.id} car={car} />)}
        </div>
      </section>
    );
  }
}

// проверка при клике если они загружены в пропс запрос не делать
const mapStateToProps = (state: any) => ({
  allCars: state.autoList.allCars,
  compactCars: state.autoList.compactCars,
  middleClassCars: state.autoList.middleClassCars,
  luxCars: state.autoList.luxCars,
  suvCars: state.autoList.suvCars
});

export default connect(
  mapStateToProps,
  {
    getCarsData,
    getAllCars,
    getCompactCars,
    getMiddleClassCars,
    getLuxCars,
    getSuvCars
  }
)(AutoList);
