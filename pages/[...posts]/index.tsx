import { GetServerSideProps } from "next";

export default function PostDetail({ id }) {
  return <div>post detail id: {id}</div>;
}

export const getServerSideProps: GetServerSideProps = async context => {
    // context.
    return {
        props: {
          id: 1
        }
    };
};
