export interface Film {
    id: string,
    title: string,
    image: string,
    description: string,
    producer: string,
    release_date: string,
    rt_score: string
}

export interface DataResponse {
    data: Film[]
}