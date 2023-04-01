// import { Loading } from '@/components';
import { storeChatList } from '@/store';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TransitionPage = (props) => {
  const { replace } = props;
  const { uuid, isChatLoading } = storeChatList();
  const navigate = useNavigate();

  useEffect(() => {
    if (uuid && !isChatLoading) {
      const replaced = replace(uuid);
      navigate({ pathname: replaced }, { replace: true });
    }
  }, [uuid, isChatLoading, navigate, replace]);

  return <div></div>;
};

export default TransitionPage;
