import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import RoomItem from "./room/RoomItem";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { clearErrors } from "@/redux/actions/roomActions";

const Home = () => {
  const allRooms = useSelector((state) => state.allRooms);
  const { loading: loadingallrooms, error: errorallrooms, allrooms } = allRooms;

  useEffect(() => {
    if (errorallrooms) {
      toast.error(errorallrooms);
      dispatch(clearErrors());
    }
  }, [errorallrooms]);

  return (
    <>
      <section id="rooms" className="container mt-5">
        <h2 className="mb-3 ml-2 stays-heading">Stays in New York</h2>

        <a href="#" className="ml-2 back-to-search">
          {" "}
          <i className="fa fa-arrow-left"></i> Back to Search
        </a>
        <div className="row">
          {allrooms && allrooms.rooms.length !== 0 ? (
            allrooms.rooms.map((room) => (
              <RoomItem key={room._id} room={room} />
            ))
          ) : (
            <div className="alert alert-danger">
              <b>No Rooms.</b>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
