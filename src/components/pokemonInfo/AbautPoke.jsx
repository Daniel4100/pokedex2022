import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

const AbautPoke = () => {
  const [abautPoke, setAbautPoke] = useState()
  const [text, setText] = useState()

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
  }, [name]);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}/`)
    .then(res => {
      const i = res.data.flavor_text_entries.findIndex(e => e.language.name === 'en')
      setText(res.data.flavor_text_entries[i].flavor_text)
    })
    .catch(err => console.log(err))
  }, [name])
  
  console.log(text)

  console.log(abautPoke)

  return (
    <motion.div 
      
      initial={{opacity: 0, x: -100}}
      animate={{opacity: 1, x: 0}}
    className='about__pokemon'>
      <div className='about__pokemon-text'>
        <p>{text && text}</p>
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
              <div  key={type.type.url} className="about__icons-container-singular">
                
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
    </motion.div>
  )
}

export default AbautPoke