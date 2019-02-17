export interface ICar {
  id: number;
}

export interface IAllCars {
  cars: ICar[];
  only_online: boolean;
  count: number;
  online_count: number;
  busy_count: number;
  online_buzy_count: number;
}
