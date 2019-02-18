import * as React from "react";
import { cn } from "@bem-react/classname";

// interface
import { ICar } from "../../actions/interface";

// style
import "./Car.css";

interface IProps {
  car: ICar;
}

class Car extends React.Component<IProps> {
  public render() {
    const carCl = cn("Car");
    const { car } = this.props;

    return (
      <article className={carCl()}>
        <span>{car.full_name}</span>
      </article>
    );
  }
}

export default Car;
