export interface ICar {
  id: number;
  full_name: string;
  discount: number;
  daily_cost: number;
  kasko: boolean;
  engine: number;
  online: boolean;
  year: number;
  image_url: string;
  seats: number;
  type_id: number;
  days: number;
  deposit: number;
  deposited: boolean;
}

export interface IAllCars {
  cars: ICar[];
  only_online: boolean;
  count: number;
  online_count: number;
  busy_count: number;
  online_buzy_count: number;
}
