import React from "react";

import "./global.css";
import "./app.css";
import "./sidebar.css";
import "./main.css";

// Três conceitos principais do react

// Componente: bloco isolado de HTML, CSS e JS o qual não interfere no restante da aplicação.
// Propriedade: informações que um componente PAI passa para o componente FILHO.
// Estado: informações mantidas pelo componente (lembrar: imutabilidade).

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastar</strong>

        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/300170?s=400&v=4"
                alt="Rogério Gomes Rios"
              />
              <div className="user-info">
                <strong>Rogério Gomes Rios</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>

            <p>
              CTO na @RogerLista. Apaixonado pelas melhores tecnologias de
              desenvolvimento
            </p>
            <a href="http://github.com/rogerlista">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/300170?s=400&v=4"
                alt="Rogério Gomes Rios"
              />
              <div className="user-info">
                <strong>Rogério Gomes Rios</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>

            <p>
              CTO na @RogerLista. Apaixonado pelas melhores tecnologias de
              desenvolvimento
            </p>
            <a href="http://github.com/rogerlista">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/300170?s=400&v=4"
                alt="Rogério Gomes Rios"
              />
              <div className="user-info">
                <strong>Rogério Gomes Rios</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>

            <p>
              CTO na @RogerLista. Apaixonado pelas melhores tecnologias de
              desenvolvimento
            </p>
            <a href="http://github.com/rogerlista">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/300170?s=400&v=4"
                alt="Rogério Gomes Rios"
              />
              <div className="user-info">
                <strong>Rogério Gomes Rios</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>

            <p>
              CTO na @RogerLista. Apaixonado pelas melhores tecnologias de
              desenvolvimento
            </p>
            <a href="http://github.com/rogerlista">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
