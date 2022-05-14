import { Link } from 'react-router-dom';

import Style from './Home.module.css';
const Home: React.FC = () => (
    <div className={Style['container']}>
        <h1>Teste de Fibromialgia</h1>
        <Link style={{ display: 'block', margin: '1rem 0' }} to="questions">
            Começar
        </Link>
    </div>
);

export default Home;
