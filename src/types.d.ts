export interface SectionData {
    title: string,
    path: string,
    component: string,
    description?: string,
    subSections?: SectionData[]
}
