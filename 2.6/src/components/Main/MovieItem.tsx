import { useState } from "react";
import { Movie } from "../../types";

interface MovieItemProps {
    movie: Movie;
    }

const MovieItem = ({movie} : MovieItemProps) => {
    const [descriptionprinted, setDescriptionPrinted] = useState(false);

    const handleClick = () => {
        setDescriptionPrinted(!descriptionprinted);
    }

  return (
    <div>
        <li onClick={handleClick}>
            <strong>{movie.title}</strong> - Réalisateur : {movie.director}
        </li>
        <p>
            {descriptionprinted ? <i>{movie.description}</i> : null}
        </p>
    </div>
  );
}

export default MovieItem;