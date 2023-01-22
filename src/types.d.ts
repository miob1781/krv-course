export interface SectionData {
    title: string,
    path: string,
    description?: string,
    subSections?: SectionData[]
}
