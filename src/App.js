import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Navbar />
        <Hero />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          eligendi cum, similique dolor obcaecati dignissimos! Amet, ipsa
          laudantium magni veritatis magnam culpa cum iure voluptatum.
          Consectetur maxime explicabo commodi, quasi itaque cupiditate ipsum
          officiis? Ullam perspiciatis, nihil repudiandae tempore deleniti
          reiciendis eligendi dicta impedit cumque, quas voluptatum, consequatur
          corporis error! Praesentium corporis ipsam ea fugit eius nam corrupti
          vitae illum itaque delectus maiores molestiae fuga veniam, unde ut
          repellendus quae maxime, quam est repellat voluptatum dignissimos odit
          similique? Dignissimos qui cum quas, culpa odit illum enim blanditiis
          magnam rerum, doloremque aut iure, consequuntur fuga! Aut, dolore
          sequi. Ipsum, neque fugiat minus debitis minima doloribus veritatis
          deleniti! Nihil earum minima non odio ea assumenda nulla eum alias
          laborum temporibus eius, ex beatae aliquam atque fugiat fuga qui est
          voluptatem. Tempora architecto iste recusandae voluptas fugiat? Quae
          quisquam, nobis similique obcaecati error nihil debitis veniam velit
          adipisci iste maxime, earum optio nostrum! Ullam eaque necessitatibus
          dolores ab tempora quae, facilis quibusdam unde voluptates expedita,
          quidem totam culpa magni reprehenderit quis delectus corrupti
          repudiandae? Natus iure odio illum tenetur dolorum vel nisi maxime
          asperiores doloremque vitae facere quia blanditiis nobis alias, sequi
          ratione ea obcaecati eligendi expedita. Deserunt necessitatibus
          aspernatur consectetur quasi assumenda! Enim nemo vero praesentium
          natus ut amet ad facere, aliquam repudiandae omnis debitis maxime
          voluptatum aperiam voluptatibus earum nisi tempora minima neque. Fuga
          repudiandae quae ex! Vitae, libero esse? Obcaecati alias velit fuga
          nisi, distinctio, assumenda asperiores eum sapiente qui inventore id
          magni esse accusamus. Minima magni nisi numquam aperiam maxime ex
          libero vel doloribus, minus tempora perspiciatis cumque cupiditate
          dolorum consectetur qui provident explicabo fugiat! Voluptate sed,
          totam hic veritatis odit dolor necessitatibus tenetur ducimus tempora
          cupiditate quam! Laborum ducimus explicabo est, velit tenetur quis qui
          ab porro quo, accusantium iste temporibus minus enim. Ad ratione
          dolores fugiat quia.
        </p>
      </Router>
    </div>
  );
}

export default App;
