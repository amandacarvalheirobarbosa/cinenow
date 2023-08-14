import CardFilm from "../components/cardFilms";
import Footer from "../components/footer";
import NavBar from "../components/nabBar";

export default async function Home() {
  return (
    <>
      <NavBar />
      <div className="flex flex-wrap">
        <CardFilm id={1} title="Barbie" genres={teste} overview='No mundo mágico das Barbies, "Barbieland", uma das bonecas começa a perceber que não se encaixa como as outras. Depois de ser expulsa, ela parte para uma aventura no "mundo real", onde descobre que a beleza está no interior de cada um.' voteAverage={7.491} posterPath="/yRRuLt7sMBEQkHsd1S3KaaofZn7.jpg" releaseDate={"19/07/2023"}/>
      </div>
      <Footer/>
    </>
  );
}

const teste = [
  {
    id: 35,
    name: 'Comédia'
  },
  {
    id: 12,
    name: "Aventura"
  },
  {
    id: 14,
    name: "Fantasia"
  }
]