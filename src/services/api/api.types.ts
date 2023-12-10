export interface DateConfig {
    year: string
    month: string
    day: string
}

export type Top100ProductDTO = Top100Product[] 

export interface Top100Product {
    profileHandle?: string 
    userDisplayName: string
    numSpecies: number
    numCompleteChecklists: number
    rowNum: number
    userId: string
}

export type RecentNotableObservationsInRegionDTO = RecentNotableObservationsInRegion[]

export interface RecentNotableObservationsInRegion {
    speciesCode: string
    comName: string
    sciName: string
    locId: string
    locName: string
    obsDt: string
    howMany: number
    lat: number
    lng: number
    obsValid: boolean
    obsReviewed: boolean
    locationPrivate: boolean
    subId: string
    exoticCategory?: string
}