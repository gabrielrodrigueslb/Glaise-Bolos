import { FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa";


import Header from '../components/Header/Header';
import Carrosel from '../components/Carrossel/Carrosel';
import Servicos from '../components/Servicos/Servicos';

import './Home.scss';

export default function Home() {
  return (
    <>
      <main className="background main">
        <div className="container">
          <Header />
          <Carrosel />

          <section className="services-list">
            <Servicos
              icon="/icon-brigadeiro.svg"
              title="Doces"
              text="Sabores irresistíveis, preparados com ingredientes selecionados."
            />
            <Servicos
              icon="/icon-bolo-decorado.svg"
              title="Bolos Decorados"
              text="Arte e sabor em cada detalhe, feitos sob medida para seus momentos especiais."
            />
            <Servicos
              icon="/icon-salgados.svg"
              title="Salgados"
              text="Salgados crocantes e recheados, ideais para qualquer evento."
            />
          </section>

          <section className="container-alt galeria" id="galeria">
            <h2 className="title">Galeria de fotos</h2>
            <p>
              Inspire-se com nossos modelos. Acesse a galeria e escolha seu
              favorito!
            </p>
            <div className="photos">
              <div className="img-container">
                <img src="/bolo-mario.png" alt="Bolo Super Mario" />
              </div>
              <div className="img-container">
                <img src="/bolo-dourado.png" alt="Bolo Dourado" />
              </div>
              <div className="img-container">
                <img src="/bolo-batizado.png" alt="Bolo Batizado" />
              </div>
            </div>
            <button className="btn-2">Ver mais modelos</button>
          </section>
        </div>
      </main>

      <section className="about background-alt">
        <div className="container-alt about-content">
          <h2 className="title-alt">Sobre nós</h2>

          <div className="glaise-bolos">
            <div className="img-container">
              <img src="/glaise-bolos.svg" alt="Glaise Bolos" />
            </div>
            <div className="text-container">
              <p>
                A Glaise Bolos é o resultado de mais de 15 anos de dedicação e
                paixão pela confeitaria. No ramo desde 2010 e, desde então,
                viemos transformando cada criação em um verdadeiro prazer para
                os sentidos. Seu talento e experiência a tornaram uma referência
                no mercado, reconhecida pela qualidade e atenção aos detalhes.
                <br />
                <br />
                A Glaise Bolos se destaca por oferecer bolos, doces e chocolates
                de altíssima qualidade, atendendo Betim e região. Cada criação é
                pensada para tornar seu evento único e inesquecível.
                <br />
                <br />
                Confie na expertise de quem está no ramo há mais de duas
                décadas. Experimente nossas delícias e faça seu evento brilhar!
              </p>
            </div>
          </div>
        </div>
      </section>

        <section className="contact background2" id="contato">
            <div className="container-alt contact-content">
                <h2 className="title">Contato</h2>
                <p>Entre em contato e faça seu pedido!</p>

                <ul className='contact-list'>
                    <li className='contact-card whats'><FaWhatsapp className="whatsapp"/>(31) 97128-4049</li>
                    <li className='contact-card insta'><FaInstagram className="instagram"/>glaisebolos</li>
                    <li className='contact-card phone'><FaPhoneAlt className="telephone"/>(31) 97128-4049</li>
                </ul>
            </div>
        </section>
    </>
  );
}
