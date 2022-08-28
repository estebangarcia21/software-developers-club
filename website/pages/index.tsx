import dynamic from 'next/dynamic';

const ClientHome = dynamic(() => import('../components/index/ClientHome'), {
  ssr: false
});

export default ClientHome;
