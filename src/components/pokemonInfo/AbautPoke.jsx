import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const AbautPoke = () => {
  const [abautPoke, setAbautPoke] = useState()

  const {name} = useParams()
  
  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`;
    axios
      .get(URL)
      .then((res) => {
        setAbautPoke(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(abautPoke)

  return (
    <div className='about__pokemon'>
      <div className='about__pokemon-text'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum accusamus voluptatem facere repellendus quaerat sit unde Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quibusdam optio eius architecto. Architecto quod harum facere fuga voluptatibus, magni tenetur odio! Aut quae temporibus asperiores iste, perferendis ad modi? </p>
      </div>
      <section className='about__measurement'>
        <article className='border__right'>
          <p>
            {abautPoke?.weight / 10}kg  ({(abautPoke?.weight / 10 * 2).toFixed(1)}lbs)
          </p>
          <p className='opaque'>
            Weight
          </p>
        </article>
        <article>
        <p>
        {abautPoke?.height / 10}m  ({(abautPoke?.height * 10)}cm)
          </p>
          <p className='opaque'>
            Height
          </p>
        </article>
      </section>
      <div className="about__icons-container">
            {abautPoke?.types.map((type) => (
              <div whileHover={{scale: 1.04 }} key={type.type.url} className="about__icons-container-singular">
                
                  <img
                  src={`./media/${type.type.name}.svg`}
                  className={`icon__about ${type.type.name}`}
                  alt={type.type.name}
                />
                
                <div className="about__icon-text">
                  <span>{type.type.name}</span>
                </div>
              </div>
            ))}
          </div>
    </div>
  )
}

export default AbautPoke