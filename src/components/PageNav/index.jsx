import { NavBar } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';

const PageNav = (props) => {
  const { backArrow = true } = props;
  const navigate = useNavigate();
  const back = () => navigate(-1);

  return (
    <NavBar style={{ color: '#fff' }} onBack={back} backArrow={backArrow}>
      {props.title}
    </NavBar>
  );
};

export default PageNav;
