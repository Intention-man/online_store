import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = []
        this._brands = []
        this._devices = []

        this._page = 1
        this._totalCount = 0
        this._limit = 2

        this._selectedType = ""
        this._selectedBrand = ""
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(selectedType) {
        this._selectedType = selectedType
        this.setPage(1)
    }

    setSelectedBrand(selectedBrand) {
        this._selectedBrand = selectedBrand
        this.setPage(1)
    }

    setPage(page) {
        this._page = page
    }
    setTotalCount(totalCount) {
        this._totalCount = totalCount
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }
}