import React from 'react';
import './about.css';

const About = () => {
    return (
        
       <section id='about'>
            <h3 className='title has-text-centered is-size-2'>About me</h3> 
            <div className='container'>
                <aside className='about-picture'>
                    <img src="../img/ai.webp" alt="" />
                </aside>
                <aside className='about-text has-text-justified'>
                    <p>Me considero un hombre al que le gustan los desafíos y el aprendizaje continuo. Nacido en Francia, en los '90, di mis primeros pasos en el mundo de la informática con una Amstrad CPC en casa . Hoy, luego de vivir en otros países, conocer otras culturas y diferentes lenguas y lenguajes, hace 4 años que habito suelo argentino y me dedico al Desarrollo FrontEnd, luego de resignificar mi formación.
 Transito el universo de la programación, estudiando y aprendiendo cada día con entusiasmo y curiosidad. En estos momentos me encuentro esperando la oportunidad (como puerto) de integrar un equipo de trabajo para aplicar no solo mis conocimientos sino también mis aptitudes, riguroso, abierto a la crítica, y con buena actitud para encarar los desafíos, con el objetivo de crecer profesionalmente de forma dinámica y comprometida, siempre abierto y alerta a la evolución constante que se espera de un desarrollador.</p>
                </aside>       
            </div>     
       </section>
    );
}

export default About;
