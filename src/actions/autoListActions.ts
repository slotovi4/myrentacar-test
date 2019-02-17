import axios from "axios";
import {
  GET_CARS_DATA,
  GET_ALL_CARS,
  GET_COMPACT_CARS,
  GET_MIDDLE_CLASS_CARS,
  GET_LUX_CARS,
  GET_SUV_CARS
} from "../actions/types";

export const getCarsData = () => async (dispatch: any) => {
  const carsData = await axios.get("/api/0.json");

  dispatch({
    type: GET_CARS_DATA,
    carsData: carsData.data
  });
};

export const getAllCars = () => async (dispatch: any) => {
  const allCars = await axios.get("/api/0.json");

  dispatch({
    type: GET_ALL_CARS,
    allCars: allCars.data.cars
  });
};

export const getCompactCars = () => async (dispatch: any) => {
  const compactCars = await axios.get("/api/1.json");

  dispatch({
    type: GET_COMPACT_CARS,
    compactCars: compactCars.data.cars
  });
};

export const getMiddleClassCars = () => async (dispatch: any) => {
  const middleClassCars = await axios.get("/api/2.json");

  dispatch({
    type: GET_MIDDLE_CLASS_CARS,
    middleClassCars: middleClassCars.data.cars
  });
};

export const getLuxCars = () => async (dispatch: any) => {
  const luxCars = await axios.get("/api/3.json");

  dispatch({
    type: GET_LUX_CARS,
    luxCars: luxCars.data.cars
  });
};

export const getSuvCars = () => async (dispatch: any) => {
  const suvCars = await axios.get("/api/4.json");

  dispatch({
    type: GET_SUV_CARS,
    suvCars: suvCars.data.cars
  });
};
