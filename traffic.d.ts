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

export interface IGmbEta {
  diff: number;
  eta_seq: number;
  remarks_en: string;
  remarks_sc: string;
  remarks_tc: string;
  timestamp: string;
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

export interface IGmbRouteListResponse extends IBaseResponse {
  data: {
    routes: string[];
  };
  type: "Routes-All";
}

export interface IGmbRouteDirection {
  route_seq: number;
  orig_tc: string;
  orig_sc: string;
  orig_en: string;
  dest_tc: string;
  dest_sc: string;
  dest_en: string;
  remarks_tc: string;
  remarks_sc: string;
  remarks_en: string;
  headways: any[];
}

export interface IGmbRouteInfo {
  route_id: number;
  region: string;
  route_code: string;
  description_tc: string;
  description_sc: string;
  description_en: string;
  directions: IGmbRouteDirection[];
}

export interface IGmbStopInfo {
  stop_seq: number;
  stop_id: string;
  name_tc: string;
  name_sc: string;
  name_en: string;
}

export interface IGmbRouteInfoResponse extends IBaseResponse {
  data: IGmbRouteInfo[];
  type: "Route";
}

export interface IGmbRouteStopResponse extends IBaseResponse {
  data: {
    route_stops: IGmbStopInfo[];
  };
  type: "Route-Stop";
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

export interface IGmbEtaResponse extends IBaseResponse {
  data: {
    enabled: true;
    eta: IGmbEta[];
    stop: number;
  };
  type: "ETA-Route-Stop";
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
