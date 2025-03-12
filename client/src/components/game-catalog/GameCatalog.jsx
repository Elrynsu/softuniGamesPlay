import { useEffect, useState } from "react"
import gameService from "../../services/gameService"
import GameCatalogItem from "./GameCatalogItem";

export default function GameCatalog() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll()
            .then(result => {
                setGames(result);
            })
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>    
            {games.map(game => {
                return <GameCatalogItem key={game._id} {...game} />
            })}

            {/* <!-- Display paragraph: If there is no games  --> */}
            <h3 className="no-articles">No articles yet</h3>
        </section>
    )
}
