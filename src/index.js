//@ts-check
import fetch from "@36node/fetch";

export default class SDK {
  /**@type {string} **/
  base;
  /**@type {string} **/
  token;

  /**
   * Sdk auth
   *
   * @returns {string} auth header
   * */
  get auth() {
    let token = this.token;
    // @ts-ignore
    if (typeof token === "function") token = token();
    if (token) return `Bearer ${token}`;

    return "";
  }

  /**
   * Init store sdk
   *
   * @param {Object} opt
   * @param {string} opt.base  base url
   * @param {string} opt.token token for authorization
   */
  constructor(opt = { base: "", token: "" }) {
    this.base = opt.base;
    this.token = opt.token;
  }

  /**
   * park's methods
   */
  park = {
    /**
     * Create a park
     *
     * @param {CreateParkRequest} req createPark request
     * @returns {Promise<CreateParkResponse>} The Park created
     */
    createPark: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createPark");

      return fetch(`${this.base}/parks`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List all parks
     *
     * @param {ListParksRequest} req listParks request
     * @returns {Promise<ListParksResponse>} A paged array of parks
     */
    listParks: req => {
      const { query } = req || {};

      return fetch(`${this.base}/parks`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find park by id
     *
     * @param {GetParkRequest} req getPark request
     * @returns {Promise<GetParkResponse>} Expected response to a valid request
     */
    getPark: req => {
      const { parkId } = req || {};

      if (!parkId) throw new Error("parkId is required for getPark");

      return fetch(`${this.base}/parks/${parkId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update park
     *
     * @param {UpdateParkRequest} req updatePark request
     * @returns {Promise<UpdateParkResponse>} The park
     */
    updatePark: req => {
      const { parkId, body } = req || {};

      if (!parkId) throw new Error("parkId is required for updatePark");
      if (!body) throw new Error("requetBody is required for updatePark");

      return fetch(`${this.base}/parks/${parkId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     *
     *
     * @param {DeleteParkRequest} req deletePark request
     */
    deletePark: req => {
      const { parkId } = req || {};

      if (!parkId) throw new Error("parkId is required for deletePark");

      return fetch(`${this.base}/parks/${parkId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * draft's methods
   */
  draft = {
    /**
     * Create a draft
     *
     * @param {CreateDraftRequest} req createDraft request
     * @returns {Promise<CreateDraftResponse>} The draft created
     */
    createDraft: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createDraft");

      return fetch(`${this.base}/drafts`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List all drafts
     *
     * @param {ListDaftsRequest} req listDafts request
     * @returns {Promise<ListDaftsResponse>} A paged array of drafts
     */
    listDafts: req => {
      const { query } = req || {};

      return fetch(`${this.base}/drafts`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find draft by id
     *
     * @param {GetDraftRequest} req getDraft request
     * @returns {Promise<GetDraftResponse>} Expected response to a valid request
     */
    getDraft: req => {
      const { draftId } = req || {};

      if (!draftId) throw new Error("draftId is required for getDraft");

      return fetch(`${this.base}/drafts/${draftId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update draft
     *
     * @param {UpdateDraftRequest} req updateDraft request
     * @returns {Promise<UpdateDraftResponse>} The draft
     */
    updateDraft: req => {
      const { draftId, body } = req || {};

      if (!draftId) throw new Error("draftId is required for updateDraft");
      if (!body) throw new Error("requetBody is required for updateDraft");

      return fetch(`${this.base}/drafts/${draftId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     *
     *
     * @param {DeleteDraftRequest} req deleteDraft request
     */
    deleteDraft: req => {
      const { draftId } = req || {};

      if (!draftId) throw new Error("draftId is required for deleteDraft");

      return fetch(`${this.base}/drafts/${draftId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * vehicle's methods
   */
  vehicle = {
    /**
     * Create a vehicle
     *
     * @param {CreateVehicleRequest} req createVehicle request
     * @returns {Promise<CreateVehicleResponse>} The Vehicle created
     */
    createVehicle: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createVehicle");

      return fetch(`${this.base}/vehicles`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List all vehicles
     *
     * @param {ListVehiclesRequest} req listVehicles request
     * @returns {Promise<ListVehiclesResponse>} A paged array of vehicles
     */
    listVehicles: req => {
      const { query } = req || {};

      return fetch(`${this.base}/vehicles`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find vehicle by id
     *
     * @param {GetVehicleRequest} req getVehicle request
     * @returns {Promise<GetVehicleResponse>} Expected response to a valid request
     */
    getVehicle: req => {
      const { vehicleId } = req || {};

      if (!vehicleId) throw new Error("vehicleId is required for getVehicle");

      return fetch(`${this.base}/vehicles/${vehicleId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update vehicle
     *
     * @param {UpdateVehicleRequest} req updateVehicle request
     * @returns {Promise<UpdateVehicleResponse>} The vehicle
     */
    updateVehicle: req => {
      const { vehicleId, body } = req || {};

      if (!vehicleId)
        throw new Error("vehicleId is required for updateVehicle");
      if (!body) throw new Error("requetBody is required for updateVehicle");

      return fetch(`${this.base}/vehicles/${vehicleId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     *
     *
     * @param {DeleteVehicleRequest} req deleteVehicle request
     */
    deleteVehicle: req => {
      const { vehicleId } = req || {};

      if (!vehicleId)
        throw new Error("vehicleId is required for deleteVehicle");

      return fetch(`${this.base}/vehicles/${vehicleId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * 停止车辆维保
     *
     * @param {StopVehicleMaintainRequest} req stopVehicleMaintain request
     */
    stopVehicleMaintain: req => {
      const { vehicleId } = req || {};

      if (!vehicleId)
        throw new Error("vehicleId is required for stopVehicleMaintain");

      return fetch(`${this.base}/vehicles/${vehicleId}/!stopMaintain`, {
        method: "PUT",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * 停止车辆维保
     *
     * @param {StartVehicleMaintainRequest} req startVehicleMaintain request
     */
    startVehicleMaintain: req => {
      const { vehicleId } = req || {};

      if (!vehicleId)
        throw new Error("vehicleId is required for startVehicleMaintain");

      return fetch(`${this.base}/vehicles/${vehicleId}/!startMaintain`, {
        method: "PUT",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create a vehicle record
     *
     * @param {CreateVehicleRecordRequest} req createVehicleRecord request
     * @returns {Promise<CreateVehicleRecordResponse>} The Vehicle created
     */
    createVehicleRecord: req => {
      const { body } = req || {};

      if (!body)
        throw new Error("requetBody is required for createVehicleRecord");

      return fetch(`${this.base}/vehicles/record`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update vehicle
     *
     * @param {UpdateVehicleRecordRequest} req updateVehicleRecord request
     * @returns {Promise<UpdateVehicleRecordResponse>} The vehicle
     */
    updateVehicleRecord: req => {
      const { vehicleId, body } = req || {};

      if (!vehicleId)
        throw new Error("vehicleId is required for updateVehicleRecord");
      if (!body)
        throw new Error("requetBody is required for updateVehicleRecord");

      return fetch(`${this.base}/vehicles/${vehicleId}/record`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List all alerts by vehicleId
     *
     * @param {ListVehicleAlertsRequest} req listVehicleAlerts request
     * @returns {Promise<ListVehicleAlertsResponse>} A paged array of vehicle alerts
     */
    listVehicleAlerts: req => {
      const { vehicleId, query } = req || {};

      if (!vehicleId)
        throw new Error("vehicleId is required for listVehicleAlerts");

      return fetch(`${this.base}/vehicles/${vehicleId}/alerts`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * 统计-概览
     *
     * @param {SummaryAllRequest} req summaryAll request
     * @returns {Promise<SummaryAllResponse>} A array of repair summary effect by month
     */
    summaryAll: req => {
      const { query } = req || {};

      if (!query) throw new Error("query is required for vehicle");

      return fetch(`${this.base}/summary/all`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * repair's methods
   */
  repair = {
    /**
     * Create a repair order
     *
     * @param {CreateRepairRequest} req createRepair request
     * @returns {Promise<CreateRepairResponse>} The repair order created
     */
    createRepair: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createRepair");

      return fetch(`${this.base}/repairs`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List all repair orders
     *
     * @param {ListRepairsRequest} req listRepairs request
     * @returns {Promise<ListRepairsResponse>} A paged array of repair orders
     */
    listRepairs: req => {
      const { query } = req || {};

      return fetch(`${this.base}/repairs`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find repair order by id
     *
     * @param {GetRepairRequest} req getRepair request
     * @returns {Promise<GetRepairResponse>} Expected response to a valid request
     */
    getRepair: req => {
      const { repairId } = req || {};

      if (!repairId) throw new Error("repairId is required for getRepair");

      return fetch(`${this.base}/repairs/${repairId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * update repair order
     *
     * @param {UpdateRepairRequest} req updateRepair request
     * @returns {Promise<UpdateRepairResponse>} The repair order
     */
    updateRepair: req => {
      const { repairId, body } = req || {};

      if (!repairId) throw new Error("repairId is required for updateRepair");
      if (!body) throw new Error("requetBody is required for updateRepair");

      return fetch(`${this.base}/repairs/${repairId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     *
     *
     * @param {DeleteRepairRequest} req deleteRepair request
     */
    deleteRepair: req => {
      const { repairId } = req || {};

      if (!repairId) throw new Error("repairId is required for deleteRepair");

      return fetch(`${this.base}/repairs/${repairId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * update repair order record
     *
     * @param {UpdateRepairRecordRequest} req updateRepairRecord request
     * @returns {Promise<UpdateRepairRecordResponse>} The repair order
     */
    updateRepairRecord: req => {
      const { repairId, body } = req || {};

      if (!repairId)
        throw new Error("repairId is required for updateRepairRecord");
      if (!body)
        throw new Error("requetBody is required for updateRepairRecord");

      return fetch(`${this.base}/repairs/${repairId}/record`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * 统计-维修单分布排序
     *
     * @param {SummaryRepairsRankRequest} req summaryRepairsRank request
     * @returns {Promise<SummaryRepairsRankResponse>} A array of repair summary rank
     */
    summaryRepairsRank: req => {
      const { query } = req || {};

      if (!query) throw new Error("query is required for repair");

      return fetch(`${this.base}/summary/repairs/rank`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * 统计-维修单维修故障按月统计
     *
     * @param {SummaryRepairsFaultByMonthRequest} req summaryRepairsFaultByMonth request
     * @returns {Promise<SummaryRepairsFaultByMonthResponse>} A array of repair summary fault by month
     */
    summaryRepairsFaultByMonth: req => {
      const { query } = req || {};

      if (!query) throw new Error("query is required for repair");

      return fetch(`${this.base}/summary/repairs/faultByMonth`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * 统计-关联维修单完成情况 按月
     *
     * @param {SummaryRepairsMaintainByMonthRequest} req summaryRepairsMaintainByMonth request
     * @returns {Promise<SummaryRepairsMaintainByMonthResponse>} A array of repair summary maintain by month
     */
    summaryRepairsMaintainByMonth: req => {
      const { query } = req || {};

      if (!query) throw new Error("query is required for repair");

      return fetch(`${this.base}/summary/repairs/maintainByMonth`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * 统计-维修组组内人员故障元件分布
     *
     * @param {SummaryRepairsPersonFaultRequest} req summaryRepairsPersonFault request
     * @returns {Promise<SummaryRepairsPersonFaultResponse>} A array of repair summary fault
     */
    summaryRepairsPersonFault: req => {
      const { query } = req || {};

      if (!query) throw new Error("query is required for repair");

      return fetch(`${this.base}/summary/repairs/person/fault`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * 统计-维修组组内人员故障元件分布
     *
     * @param {SummaryRepairsPersonEffectRequest} req summaryRepairsPersonEffect request
     * @returns {Promise<SummaryRepairsPersonEffectResponse>} A array of repair summary effect by month
     */
    summaryRepairsPersonEffect: req => {
      const { query } = req || {};

      if (!query) throw new Error("query is required for repair");

      return fetch(`${this.base}/summary/repairs/person/effect`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * 统计-正在处理维修单的人员情况
     *
     * @param {SummaryRepairsPersonStateRequest} req summaryRepairsPersonState request
     * @returns {Promise<SummaryRepairsPersonStateResponse>} A array of repair summary effect by month
     */
    summaryRepairsPersonState: req => {
      const {} = req || {};

      return fetch(`${this.base}/summary/repairs/person/state`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * maintain's methods
   */
  maintain = {
    /**
     * Create a maintain order
     *
     * @param {CreateMaintainRequest} req createMaintain request
     * @returns {Promise<CreateMaintainResponse>} The maintain order created
     */
    createMaintain: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createMaintain");

      return fetch(`${this.base}/maintains`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List all maintain orders
     *
     * @param {ListMaintainsRequest} req listMaintains request
     * @returns {Promise<ListMaintainsResponse>} A paged array of maintain orders
     */
    listMaintains: req => {
      const { query } = req || {};

      return fetch(`${this.base}/maintains`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find maintain order by id
     *
     * @param {GetMaintainRequest} req getMaintain request
     * @returns {Promise<GetMaintainResponse>} Expected response to a valid request
     */
    getMaintain: req => {
      const { maintainId } = req || {};

      if (!maintainId)
        throw new Error("maintainId is required for getMaintain");

      return fetch(`${this.base}/maintains/${maintainId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * update maintain order
     *
     * @param {UpdateMaintainRequest} req updateMaintain request
     * @returns {Promise<UpdateMaintainResponse>} The maintain order
     */
    updateMaintain: req => {
      const { maintainId, body } = req || {};

      if (!maintainId)
        throw new Error("maintainId is required for updateMaintain");
      if (!body) throw new Error("requetBody is required for updateMaintain");

      return fetch(`${this.base}/maintains/${maintainId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     *
     *
     * @param {DeleteMaintainRequest} req deleteMaintain request
     */
    deleteMaintain: req => {
      const { maintainId } = req || {};

      if (!maintainId)
        throw new Error("maintainId is required for deleteMaintain");

      return fetch(`${this.base}/maintains/${maintainId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * update maintain order appearance record
     *
     * @param {UpdateAppearanceRecordRequest} req updateAppearanceRecord request
     * @returns {Promise<UpdateAppearanceRecordResponse>} The maintain order
     */
    updateAppearanceRecord: req => {
      const { maintainId, body } = req || {};

      if (!maintainId)
        throw new Error("maintainId is required for updateAppearanceRecord");
      if (!body)
        throw new Error("requetBody is required for updateAppearanceRecord");

      return fetch(`${this.base}/maintains/${maintainId}/appearanceRecord`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * update maintain order software record
     *
     * @param {UpdateSoftwareRecordRequest} req updateSoftwareRecord request
     * @returns {Promise<UpdateSoftwareRecordResponse>} The maintain order
     */
    updateSoftwareRecord: req => {
      const { maintainId, body } = req || {};

      if (!maintainId)
        throw new Error("maintainId is required for updateSoftwareRecord");
      if (!body)
        throw new Error("requetBody is required for updateSoftwareRecord");

      return fetch(`${this.base}/maintains/${maintainId}/softwareRecord`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * 统计-维保单完成情况 按月
     *
     * @param {SummaryMaintainsByMonthRequest} req summaryMaintainsByMonth request
     * @returns {Promise<SummaryMaintainsByMonthResponse>} A array of maintain summary by month
     */
    summaryMaintainsByMonth: req => {
      const { query } = req || {};

      if (!query) throw new Error("query is required for maintain");

      return fetch(`${this.base}/summary/maintains/byMonth`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * 统计-按月维保单故障修复情况
     *
     * @param {SummaryMaintainsFaultByMonthRequest} req summaryMaintainsFaultByMonth request
     * @returns {Promise<SummaryMaintainsFaultByMonthResponse>} A array of maintain summary
     */
    summaryMaintainsFaultByMonth: req => {
      const { query } = req || {};

      if (!query) throw new Error("query is required for maintain");

      return fetch(`${this.base}/summary/maintains/faultByMonth`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * 统计-维保单故障按故障分类统计修复情况
     *
     * @param {SummaryMaintainsFaultRankRequest} req summaryMaintainsFaultRank request
     * @returns {Promise<SummaryMaintainsFaultRankResponse>} A array of maintain summary
     */
    summaryMaintainsFaultRank: req => {
      const { query } = req || {};

      if (!query) throw new Error("query is required for maintain");

      return fetch(`${this.base}/summary/maintains/faultRank`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * record's methods
   */
  record = {
    /**
     * Create a record
     *
     * @param {CreateRecordRequest} req createRecord request
     * @returns {Promise<CreateRecordResponse>} The repair order created
     */
    createRecord: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createRecord");

      return fetch(`${this.base}/records`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List all records
     *
     * @param {ListRecordsRequest} req listRecords request
     * @returns {Promise<ListRecordsResponse>} A paged array of repair orders
     */
    listRecords: req => {
      const { query } = req || {};

      return fetch(`${this.base}/records`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find record by id
     *
     * @param {GetRecordRequest} req getRecord request
     * @returns {Promise<GetRecordResponse>} Expected response to a valid request
     */
    getRecord: req => {
      const { recordId } = req || {};

      if (!recordId) throw new Error("recordId is required for getRecord");

      return fetch(`${this.base}/records/${recordId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update record
     *
     * @param {UpdateRecordRequest} req updateRecord request
     * @returns {Promise<UpdateRecordResponse>} The record
     */
    updateRecord: req => {
      const { recordId, body } = req || {};

      if (!recordId) throw new Error("recordId is required for updateRecord");
      if (!body) throw new Error("requetBody is required for updateRecord");

      return fetch(`${this.base}/records/${recordId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     *
     *
     * @param {DeleteRecordRequest} req deleteRecord request
     */
    deleteRecord: req => {
      const { recordId } = req || {};

      if (!recordId) throw new Error("recordId is required for deleteRecord");

      return fetch(`${this.base}/records/${recordId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * notification's methods
   */
  notification = {
    /**
     * Create a notification
     *
     * @param {CreateNotificationRequest} req createNotification request
     * @returns {Promise<CreateNotificationResponse>} The Notification created
     */
    createNotification: req => {
      const { body } = req || {};

      if (!body)
        throw new Error("requetBody is required for createNotification");

      return fetch(`${this.base}/notifications`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List all notifications
     *
     * @param {ListNotificationsRequest} req listNotifications request
     * @returns {Promise<ListNotificationsResponse>} A paged array of notifications
     */
    listNotifications: req => {
      const { query } = req || {};

      return fetch(`${this.base}/notifications`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find notification by id
     *
     * @param {GetNotificationRequest} req getNotification request
     * @returns {Promise<GetNotificationResponse>} Expected response to a valid request
     */
    getNotification: req => {
      const { notificationId } = req || {};

      if (!notificationId)
        throw new Error("notificationId is required for getNotification");

      return fetch(`${this.base}/notifications/${notificationId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update notification
     *
     * @param {UpdateNotificationRequest} req updateNotification request
     * @returns {Promise<UpdateNotificationResponse>} The notification
     */
    updateNotification: req => {
      const { notificationId, body } = req || {};

      if (!notificationId)
        throw new Error("notificationId is required for updateNotification");
      if (!body)
        throw new Error("requetBody is required for updateNotification");

      return fetch(`${this.base}/notifications/${notificationId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     *
     *
     * @param {DeleteNotificationRequest} req deleteNotification request
     */
    deleteNotification: req => {
      const { notificationId } = req || {};

      if (!notificationId)
        throw new Error("notificationId is required for deleteNotification");

      return fetch(`${this.base}/notifications/${notificationId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * update notification read
     *
     * @param {UpdateNotificationReadRequest} req updateNotificationRead request
     * @returns {Promise<UpdateNotificationReadResponse>} The notification
     */
    updateNotificationRead: req => {
      const { notificationId, body } = req || {};

      if (!notificationId)
        throw new Error(
          "notificationId is required for updateNotificationRead"
        );
      if (!body)
        throw new Error("requetBody is required for updateNotificationRead");

      return fetch(`${this.base}/notifications/${notificationId}/!read`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
  };
}
