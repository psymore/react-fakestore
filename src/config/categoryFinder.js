import { useParams } from "react-router-dom";

const useCategoryFromUrl = () => {
  const { category } = useParams();
  return category;
};

export default useCategoryFromUrl;
