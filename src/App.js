import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personne: {
        fullName: "John Doe",
        bio: "Développeur Full Stack",
        imgSrc:
          "https://enviesdafrique.fr/wp-content/uploads/2021/01/Vimto-boisson-_cannette-sri-shop_600x.png",
        profession: "Ingénieur Logiciel",
      },
      montre: false,
      count: 0,
    };
  }

  cliquer = () => {
    this.setState((prevState) => ({
      montre: !prevState.montre,
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { personne, montre, count } = this.state;

    return (
      <div className="App">
        <button onClick={this.cliquer}>
          {montre ? "Cacher le profil" : "afficher le profil"}
        </button>

        {montre && (
          <div>
            <h1>{personne.fullName}</h1>
            <img src={personne.imgSrc} alt={personne.fullName} />
            <p>{personne.bio}</p>
            <p>Profession: {personne.profession}</p>
          </div>
        )}

        <p>Temps écoulé depuis le montage: {count} secondes</p>
      </div>
    );
  }
}

export default App;