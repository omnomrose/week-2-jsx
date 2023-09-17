import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

// import App from "./App";
function App() {
  return (
    <div>
      <NewsFeed id="1">
        <News
          creator="By: Steve Hanley"
          image="https://placehold.co/600x400?text=News+Story"
          href="https://cleantechnica.com/2022/02/14/tesla-shanghai-capacity-will-exceed-1-million-cars-in-2022-byd-blade-batteries-coming/"
          title="Tesla Shanghai Capacity Will Exceed 1 Million Cars In 2022, BYD Blade Batteries Coming"
          desc="Tesla's Giga Shanghai is expanding and will soon be able to manufacture more than 1 million cars a year."
        />

        <News
          creator="By: Milenio Digital"
          image="http://www.milenio.com/uploads/media/2022/02/13/elon-musk-estimo-deuda-unidos.jpeg"
          href="https://www.milenio.com/negocios/elon-musk-deuda-eu-60-billones-dolares"
          title="Elon Musk asegura que la 'verdadera' deuda de EU es de al menos 60 billones de dólares"
          desc="El director ejecutivo de Tesla y SpaceX, Elon Musk, estimó que la deuda
          de Estados Unidos en tres veces mayor a su economía. ?La verdadera deuda
          nacional, incluidos los derechos no financiados, es de al menos 60
          billones de dólares, aproximadamente tres veces el tamaño de toda la
          economía de ..."
        />
        <News
          creator="By: Maria Merano"
          image="https://placehold.co/600x400?text=News+Story"
          href="https://www.teslarati.com/tesla-recall-heater-defroster-system-transport-canada/"
          title="Tesla recall for heater and defroster systems issued by Transport Canada"
          desc="Transport Canada issued a recall for the Tesla Model 3, Model Y, and Model S on February 3, 2022, the agency told Teslarati recently. The recall was issued after the agency discovered an issue with the heat system in certain Tesla vehicles. Transport Canada reported that a little over ..."
        />
        <News
          creator="By: Newsroom Infobae"
          image="https://placehold.co/600x400?text=News+Story"
          href="https://www.infobae.com/america/agencias/2022/02/14/china-represento-la-mitad-de-las-ventas-globales-de-coches-electricos-en-2021-2/"
          title="China representó la mitad de las ventas globales de coches eléctricos en 2021"
          desc="Shanghái (China), 14 feb La mitad de las ventas de vehículos eléctricos registradas en 2021 a nivel mundial se efectuaron en China, según datos publicados hoy por la consultora Canalys. En total, según las estimaciones de Canalys, se vendieron 6,5 millones de este tipo de vehículos -incluyendo los totalmente eléctricos ...s"
        />
        <News
          creator="By: Zachary Shahan"
          href="https://cleantechnica.com/2022/02/13/tesla-model-y-top-selling-suv-in-california-in-2021/"
          title="Tesla Model Y = Top Selling SUV in California in 2021"
          image="https://placehold.co/600x400?text=News+Story"
          desc="It’s hard to believe, even as someone who has been placed firmly on the Tesla bull list for a decade, but the Tesla Model Y ended 2021 as the top selling SUV or truck in California! That is across all types of SUVs and trucks. The Model Y outsold the #2 Toyota RAV4, a much ..."
        />
      </NewsFeed>
    </div>
  );
}

function News(props) {
  let image;
  if (!props.image) {
    image = "https://placehold.co/600x400?text=News+Story";
  } else {
    image = props.image;
  }

  return (
    <li className="news">
      <div className="headliner">
        <div className="thumbnail">
          <img src={image} alt="" />
        </div>
        <h1 className="title">
          <a href={props.href}>{props.title}</a>
          <span className="author">{props.creator}</span>
          <span className="thumbnail">{props.thumbnail}</span>
        </h1>
      </div>
      <p className="desc">{props.desc}</p>
    </li>
  );
}

function NewsFeed(props) {
  return (
    <div>
      <h1 className="news-header"> My News Feed </h1>
      <ul className="news-container">{props.children}</ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
