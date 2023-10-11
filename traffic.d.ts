export * from "./traffic-gmb";

export type Company = "CTB" | "NWFB" | "KMB";
export type Bound = "I" | "O";

interface IBaseRoute {
  dest_en: string;
  dest_sc: string;
  dest_tc: string;
  orig_en: string;
  orig_sc: string;
  orig_tc: string;
  route: string;
}

export interface IKmbRoute extends IBaseRoute {
  bound: Bound;
  service_type: string;
}

export interface IBravoRoute extends IBaseRoute {
  co: Company;
  data_timestamp: string;
}

interface IBaseRouteStop {
  route: string;
  stop: string;
}

export interface IKmbRouteStop extends IBaseRouteStop {
  bound: string;
  seq: string;
  service_type: string;
}

export interface IBravoRouteStop extends IBaseRouteStop {
  co: Company;
  data_timestamp: string;
  dir: Bound;
  seq: number;
}

interface IBaseStop {
  lat: string;
  long: string;
  name_en: string;
  name_sc: string;
  name_tc: string;
  stop: string;
}

export interface IKmbStop extends IBaseStop {}

export interface IBravoStop extends IBaseStop {
  data_timestamp: string;
}

interface IBaseEta {
  co: Company;
  route: string;
  dir: Bound;
  seq: number;
  dest_tc: string;
  dest_sc: string;
  dest_en: string;
  rmk_tc: string;
  rmk_sc: string;
  rmk_en: string;
  eta: string;
  eta_seq: number;
  data_timestamp: string;
}

export interface IKmbEta extends IBaseEta {
  service_type: number;
}

export interface IBravoEta extends IBaseEta {
  stop: string;
}

export interface IBaseResponse {
  generated_timestamp: string;
  version: string;
}

export interface IKmbRouteListResponse extends IBaseResponse {
  data: IKmbRoute[];
  type: "RouteList";
}

export interface IBravoRouteListResponse extends IBaseResponse {
  data: IBravoRoute[];
  type: "RouteList";
}

export interface IKmbRouteStopResponse extends IBaseResponse {
  data: IKmbRouteStop[];
  type: "RouteStop";
}

export interface IBravoRouteStopResponse extends IBaseResponse {
  data: IBravoRouteStop[];
  type: "RouteStop";
}

export interface IKmbStopListResponse extends IBaseResponse {
  data: IKmbStop[];
  type: "StopList";
}

export interface IKmbEtaResponse extends IBaseResponse {
  data: IKmbEta[];
  type: "ETA";
}

export interface IBravoEtaResponse extends IBaseResponse {
  data: IBravoEta[];
  type: "StopList";
}

export interface IKmbStopETAResponse extends IBaseResponse {
  data: IKmbEta[];
  type: "StopETA";
}

export interface IKmbStopResponse extends IBaseResponse {
  data: IKmbStop;
  type: "StopETA";
}

export interface ICitybusStopResponse extends IBaseResponse {
  data: IBravoStop;
  type: "Stop";
}
