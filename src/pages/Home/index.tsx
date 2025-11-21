import { Link } from "react-router-dom"
import { useFilms } from "../../hooks/useFilms"
import type { Film } from "../../types/types"

export const Home = () => {

    const { data, isLoading, error } = useFilms()

    if (isLoading) {
        return (
            <main className="h-screen bg-[#000000] flex justify-center items-center">
                <p className="text-[#ffffff] text-[40px]">Carregando...</p>
            </main>
        )
    }

    if (error) {
        return (
            <main className="h-screen bg-[#000000] flex justify-center items-center">
                <div className="w-[650px] bg-[#ffffff] p-5 rounded-2xl">
                    <p className="text-[#000000] text-[25px]">Ocorreu um erro ao buscar os filmes: erro</p>
                </div>
            </main>
        )
    }

    console.log(data)

    return (
        <main className="bg-[#000000] flex justify-center items-center">
            <div className="grid grid-cols-[1fr_1fr_1fr] auto-rows-[100vh] items-center gap-x-[100px]">
                {data?.data
                    .sort((a, b) => a.title.localeCompare(b.title))
                    .slice(0, 10)
                    .map((film: Film) => (
                        <Link
                            to={`/film/${film.id}`}
                            key={film.id}
                            className="w-[360px] h-[530px]"
                        >
                            <div className="bg-[#261fff] w-full h-full p-[30px] flex flex-col items-center gap-2">
                                <img src={film.image} className="rounded-2xl" />
                                <h2 className="text-[#ffffff] text-[20px]">{film.title}</h2>
                            </div>
                        </Link>
                    ))}
            </div>
        </main>
    )
}