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