import Film from "./Film"

const FilmList = ({movies}) => {

        const storeMovieElements = movies.map((movie) => {
            return <Film key={movie.id} name={movie.name}>{movie.url}</Film>

        })

    return (
        <>
        {storeMovieElements}
        <p><a href="https://www.imdb.com/calendar/?region=gb">View more upcoming release </a></p>
        </>
    )
}

export default FilmList