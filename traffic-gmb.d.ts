namespace Gmb {
  interface BaseResponse {
    version: string;
    generated_timestamp: string;
  }

  /*
   * 1. Route Listing API
   */
  interface RoutesRegionalResponse extends BaseResponse {
    data: {
      routes: string[];
      data_timestamp: string;
    };
    type: "Routes-Regional";
  }

  interface RoutesAllResponse extends IBaseRespons {
    data: {
      routes: {
        HKI: string[];
        KLN: string[];
        NT: string[];
      };
      data_timestamp: string;
    };
    type: "Routes-All";
  }

  /*
   * 2. Route API
   */
  interface Headway {
    weekdays: boolean[];
    public_holiday: boolean;
    headway_seq: number;
    start_time: string;
    end_time: string | null;
    frequency: number | null;
    frequency_upper: number | null;
  }

  interface Direction {
    route_seq: number;
    orig_tc: string;
    orig_sc: string;
    orig_en: string;
    dest_tc: string;
    dest_sc: string;
    dest_en: string;
    remarks_tc: string | null;
    remarks_sc: string | null;
    remarks_en: string | null;
    headways: Headway[];
  }

  interface Route {
    route_id: number;
    region: string;
    route_code: string;
    description_tc: string;
    description_sc: string;
    description_en: string;
    directions: Direction[];
    data_timestamp: string;
  }

  interface RouteResponse extends BaseResponse {
    data: Route[];
    type: "Route";
  }

  /*
   * 3. Stop API
   */
  interface Coordinate {
    latitude: number;
    longitude: number;
  }

  interface Stop {
    coordinates: {
      wgs84: Coordinate;
      hk80: Coordinate;
    };
    enabled: boolean;
    remarks_tc: string;
    remarks_sc: string;
    remarks_en: string;
    data_timestamp: string;
  }

  export interface StopResponse extends IBaseResponse {
    data: Stop;
  }

  /*
   * 4. Route-Stop API
   */
  export interface RouteStop {
    stop_seq: number;
    stop_id: string;
    name_tc: string;
    name_sc: string;
    name_en: string;
  }

  interface RouteStopResponse extends IBaseResponse {
    data: {
      data_timestamp: string;
      route_stops: RouteStop[];
    };
    type: "Route-Stop";
  }

  /*
   * 5. Stop-Route API
   */
  interface Route {
    route_id: number;
    route_seq: number;
    stop_seq: number;
    name_tc: string;
    name_sc: string;
    name_en: string;
  }

  interface StopRouteResponse extends IBaseResponse {
    data: Route;
    type: "Stop-Route";
  }

  /*
   * 6. Route-Stop ETA API
   */
  export interface Eta {
    eta_seq: number;
    diff: number;
    timestamp: string;
    remarks_en: string;
    remarks_sc: string;
    remarks_tc: string;
  }

  interface EtaEnabledBySeq {
    enabled: true;
    stop_id: number;
    eta: Eta[];
  }

  interface EtaDisabledBySeq {
    enabled: boolean;
    route_seq: number;
    stop_seq: number;
    eta: Eta[];
  }

  interface EtaDisabledBySeq {
    stop_id: number;
    enabled: false;
    description_tc: string;
    description_sc: string;
    description_en: string;
  }

  interface EtaDisabledByStopId {
    enabled: boolean;
    route_seq: number;
    stop_seq: number;
    description_tc: string;
    description_sc: string;
    description_en: string;
  }

  interface ETARouteStopBySeqResponse extends IBaseResponse {
    data: EtaEnabledBySeq | EtaDisabledBySeq;
    type: "ETA-Route-Stop";
  }

  interface ETARouteStopByStopIdResponse extends IBaseResponse {
    data: EtaDisabledBySeq[] | EtaDisabledByStopId[];
    type: "ETA-Route-Stop";
  }

  /*
   * 7. Stop ETA API
   */
  interface RouteForEtaStop {
    enabled: boolean;
    route_id: number;
    route_seq: number;
    stop_seq: number;

    description_tc: string;
    description_sc: string;
    description_en: string;
    eta: Eta[];
  }

  interface StopEtaResponse {
    data: RouteForEtaStop[];
    type: "ETA-Stop";
  }

  /*
   * 8. Last Update API
   */
  interface LastUpdateOfSingleObjectResponse {
    data: {
      last_update_date: string;
    };
    type: "Last-Update";
  }

  interface LastUpdateOfRoutes {
    route_id: number;
    route_seq: number;
    last_update_date: string;
  }

  interface LastUpdateOfRoutesResponse {
    data: LastUpdateOfRoutes[];
    type: "Last-Update";
  }

  interface LastUpdateOfStop {
    stop_id: number;
    last_update_date: string;
  }

  interface LastUpdateOfStopResponse {
    data: LastUpdateOfStop[];
    type: "Last-Update";
  }
}
