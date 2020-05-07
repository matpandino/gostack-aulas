import React, { useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    async function loadData(): Promise<void> {
      const [repository, issues] = await Promise.all([
        api.get(`repos/${params.repository}`),
        api.get(`repos/${params.repository}/issues`),
      ]);

      console.log(repository);
      console.log(issues);
    }

    loadData();
    // api.get(`repos/${params.repository}`).then((response) => {
    //   console.log(response.data);
    // });

    // api.get(`repos/${params.repository}/issues`).then((response) => {
    //   console.log(response.data);
    // });
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://cdn.discordapp.com/avatars/109838612190785536/8e76c1906e4aab374fa9dfc304415548.png?size=512"
            alt="Matu"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>47</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>34</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="fdswpodsaipo">
          <div>
            <strong>sadsadsad</strong>
            <p>asdasdasdas</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;