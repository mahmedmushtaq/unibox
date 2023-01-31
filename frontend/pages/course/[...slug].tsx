import { useRouter } from "next/router";
import Course from "../../src/components/Course";

const SlugPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <Course slug={slug as string} />
    </div>
  );
};

export default SlugPage;
