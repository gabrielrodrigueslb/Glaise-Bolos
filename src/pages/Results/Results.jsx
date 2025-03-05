import { useParams } from 'react-router-dom';
import HeaderAlt from '../../components/HeaderAlt/HeaderAlt';
import ThemeCard from '../../components/ThemeCard/ThemeCard';
import './Results.scss';
import { useEffect, useState } from 'react';
import themes from '../../api/api';


export default function Results() {
  const { id } = useParams(null);
  const [actualTheme, setActualTheme] = useState();

useEffect(() =>{
  const foundTheme = themes.find(theme => theme.id === parseInt(id));

  if(foundTheme) {
    setActualTheme(foundTheme)
  }else{
    setActualTheme(null);
  }

}, [id]);

 if(!actualTheme){
  return <div>Theme not found</div>;
 }

const cakes = Object.values(actualTheme.bolos)
  console.log(actualTheme.bolos)
  console.log(cakes)

  return (
    <>
      <HeaderAlt btnReturn='/themes'/>
      <main className="theme">
        <h1 className="title container">{actualTheme.name}</h1>
        <section className='theme-galery container'>


        {actualTheme.bolos.map((bolo) => (
          <div key={bolo.id} className='img-container'><img src={bolo.img} alt="bolo mario" /></div>
        ))}

        </section>
        
      </main>
    </>
  );
}
