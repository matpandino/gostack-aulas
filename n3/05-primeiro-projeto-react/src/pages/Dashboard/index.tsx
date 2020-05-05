import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashbaord: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://cdn.discordapp.com/avatars/109838612190785536/8e76c1906e4aab374fa9dfc304415548.png?size=512"
            alt="Mateus Pandino"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://cdn.discordapp.com/avatars/109838612190785536/8e76c1906e4aab374fa9dfc304415548.png?size=512"
            alt="Mateus Pandino"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://cdn.discordapp.com/avatars/109838612190785536/8e76c1906e4aab374fa9dfc304415548.png?size=512"
            alt="Mateus Pandino"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://cdn.discordapp.com/avatars/109838612190785536/8e76c1906e4aab374fa9dfc304415548.png?size=512"
            alt="Mateus Pandino"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://cdn.discordapp.com/avatars/109838612190785536/8e76c1906e4aab374fa9dfc304415548.png?size=512"
            alt="Mateus Pandino"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashbaord;
