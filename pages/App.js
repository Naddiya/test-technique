import { DefaultComponent } from "../components/DefaultComponent";
import { AnimeList } from "../components/AnimeList";


const App = () => {
    return (
        <div className="container">
        <DefaultComponent />
        <AnimeList />
        <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0 auto;
          width: 75%;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
  
        * {
          box-sizing: border-box;
        }
      `}</style>
      </div>
    )
}

export default App;