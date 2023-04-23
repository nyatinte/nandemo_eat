import { buildClerkProps, getAuth } from "@clerk/nextjs/server";
import { GetServerSideProps, NextPage } from "next";

const Page: NextPage = () => {
  return <h1>Page</h1>;
};

export default Page;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { userId } = getAuth(ctx.req);
  if (!userId) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }
  return {
    props: { ...buildClerkProps(ctx.req) },
  };
};
