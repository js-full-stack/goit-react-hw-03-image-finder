import Loader from 'react-loader-spinner';
import './Loader.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Spinner = () => {
  return (
    <div className="WpapperLoader">
      <Loader type="Oval" color="black" height={60} width={60} />
    </div>
  );
};

export default Spinner;
