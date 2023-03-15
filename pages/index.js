import Home from "@/components/Home";
import Layout from "@/components/layouts/Layout";
import { getRoomsAction } from "@/redux/actions/roomActions";
import { wrapper } from "@/redux/store";

export default function Index() {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      if (store) {
        const { dispatch } = store;
        await dispatch(getRoomsAction(req));
      } else {
        console.log("store object is not defined");
      }
    }
);
