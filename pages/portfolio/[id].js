import { useRouter } from "next/router";
const PortfolioProjectPage = () => {
  const router = useRouter();
  return <div>{router.query.id}</div>;
};

export default PortfolioProjectPage;
