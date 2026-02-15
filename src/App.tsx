import { useEffect } from "react";
import { createEngine } from "@miskamyasa/mobx-clicker-game-engine";
import { observer } from "mobx-react-lite";
import "./App.css";

const engine = createEngine({
  dataUrls: {
    workers: "/settings/starter/workers.json",
    levels: "/settings/starter/levels.json",
    operations: "/settings/starter/operations.json",
    upgrades: "/settings/starter/upgrades.json",
    achievements: "/settings/starter/achievements.json",
    articles: "/settings/starter/articles.json",
    prestigeUpgrades: "/settings/starter/prestige-upgrades.json",
  },
});

const App = observer(function App() {
  useEffect(() => {
    engine.game.start();

    return () => {
      engine.game.stop();
    };
  }, []);

  return (
    <main>
      <h1>AgentWorkshop Template</h1>
      <div className="card">
        <button onClick={() => engine.game.click()}>Click</button>
      </div>
      <p>
        Energy: <strong>{engine.resources.energy}</strong>
      </p>
      <p>
        Output: <strong>{engine.resources.output}</strong>
      </p>
      <p className="read-the-docs">
        Data files are served from <code>public/settings/starter</code>.
      </p>
    </main>
  );
});

export default App;
