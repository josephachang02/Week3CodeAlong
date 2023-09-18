import Menu from '../Menu';
import ProductList from '../ProductList';
import './index.css';


const Dashboard = () => {
  return (
    <div id="dashboard">
        <h1>Dashboard - select some products!</h1>
        <Menu />
        <ProductList />
    </div>
  )
}

export default Dashboard