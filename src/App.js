import logo from './logo.svg';
import './App.css';
import React from 'react';
import EmojiButton from './EmojiButton'
import Header from './Header'
import PetCard from './PetCard'



const pets = [
  { id: 1, name: "Fezzik", image: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/23124207/Old-English-Sheepdog-running-in-the-park.jpg" },
  { id: 2, name: "Lucy", image: "https://emborapets.com/wp-content/uploads/2020/08/Why-Does-My-Springer-Spaniel-Smell-So-Bad_.jpg"}
]

const petArr = pets.map((petObj) => {
  return <PetCard name={petObj.name} />
})


function App() {
  return (
    <div>
      <Header />
      <main>
        {/* <PetCard name={pets[0].name} image={pets[0].image} />
        <PetCard name={pets[1].name} image={pets[1].image} /> */}
        {petArr}
      </main>
    </div>
  );
}

export default App;
