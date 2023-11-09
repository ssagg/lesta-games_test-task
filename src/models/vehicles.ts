export interface IShip {
  vehicles: IVehicle[];
}

export interface IVehicle {
  description: string;
  level: number;
  title: string;
  icons: {
    large: string;
    medium: string;
  };
  nation: {
    color: string;
    name: string;
    title: string;
    icons: {
      large: string;
      medium: string | null;
      small: string;
    };
  };
  type: {
    name: string;
    title: string;
    icons: {
      default: string;
    };
  };
}
