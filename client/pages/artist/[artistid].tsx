import { useRouter } from 'next/router';

const ArtistPage = () => {
  const router = useRouter();
  const { artistid } = router.query;

  return <div>{artistid}</div>;
};

export default ArtistPage;
