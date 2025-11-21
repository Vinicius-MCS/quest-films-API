import { useParams } from "react-router-dom"
import type { Film } from "../../types/types"
import { useFilms } from "../../hooks/useFilms"

export const FilmDetail = () => {

    const { id } = useParams()

    const { data } = useFilms()

    const filmDetail = data?.data.find((film: Film) => film.id === id)

    return (
        <main className="bg-[#000000] h-screen flex justify-center items-center">
            <div className="flex h-[80vh] w-[60vw] gap-[25px] bg-[#261fff] p-[30px] pr-10">
                <img src={filmDetail?.image} className="rounded-2xl" />
                <div className="text-[#ffffff] flex flex-col gap-2.5 py-2.5">
                    <h1 className="text-[40px] font-semibold">{filmDetail?.title}</h1>
                    <p className="text-[20px] text-justify">{filmDetail?.description}</p>
                    <p className="text-[20px]">{filmDetail?.producer}</p>
                    <p className="text-[20px]">{filmDetail?.release_date}</p>
                    <p className="text-[20px]">{filmDetail?.rt_score}</p>
                </div>
            </div>
        </main>
    )
}