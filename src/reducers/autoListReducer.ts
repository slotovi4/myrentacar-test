import {
  GET_CARS_DATA,
  GET_ALL_CARS,
  GET_COMPACT_CARS,
  GET_MIDDLE_CLASS_CARS,
  GET_LUX_CARS,
  GET_SUV_CARS
} from "../actions/types";
import { ICar, IAllCars } from "../actions/interface";

interface IAction {
  type:
    | "GET_CARS_DATA"
    | "GET_ALL_CARS"
    | "GET_COMPACT_CARS"
    | "GET_MIDDLE_CLASS_CARS"
    | "GET_LUX_CARS"
    | "GET_SUV_CARS";
  carsData?: IAllCars;
  allCars?: ICar[];
  compactCars?: ICar[];
  middleClassCars?: ICar[];
  luxCars?: ICar[];
  suvCars?: ICar[];
}

interface IState {
  carsData: IAllCars | null;
  allCars: ICar[] | null;
  compactCars: ICar[] | null;
  middleClassCars: ICar[] | null;
  luxCars: ICar[] | null;
  suvCars: ICar[] | null;
}

const initialState: IState = {
  carsData: null,
  allCars: null,
  compactCars: null,
  middleClassCars: null,
  luxCars: null,
  suvCars: null
};

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case GET_CARS_DATA:
      return {
        ...state,
        carsData: action.carsData
      };
    case GET_ALL_CARS:
      return {
        ...state,
        allCars: action.allCars
      };
    case GET_COMPACT_CARS:
      return {
        ...state,
        compactCars: action.compactCars
      };
    case GET_MIDDLE_CLASS_CARS:
      return {
        ...state,
        middleClassCars: action.middleClassCars
      };
    case GET_LUX_CARS:
      return {
        ...state,
        luxCars: action.luxCars
      };
    case GET_SUV_CARS:
      return {
        ...state,
        suvCars: action.suvCars
      };
    default:
      return state;
  }
};
