import Layout from "@/components/layouts/Layout";
import RoomDetails from "@/components/room/RoomDetails";
import { getRoomDetailsAction } from "@/redux/actions/roomActions";
import { wrapper } from "@/redux/store";

export default function RoomDetailsPage() {
  return (
    <>
      <Layout>
        <RoomDetails title="Room Details" />
      </Layout>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, params }) => {
      if (store) {
        const { dispatch } = store;
        await dispatch(getRoomDetailsAction(req, params.roomId));
      } else {
        console.log("store object is not defined");
      }
    }
);
