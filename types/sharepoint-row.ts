export interface SharepointRow<T> {
    createdDateTime: string,
    eTag: string,
    id: string,
    lastModifiedDateTime: string,
    webUrl: string,
    createdBy: [Object],
    lastModifiedBy: [Object],
    parentReference: [Object],
    contentType: [Object],
    fields: T
}