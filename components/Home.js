import { getRoomsAction } from "@/redux/actions/roomActions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RoomItem from "./room/RoomItem";

const Home = () => {
  const dispatch = useDispatch();
  const allRooms = useSelector((state) => state.allRooms);
  const { loading: loadingallrooms, error: errorallrooms, allrooms } = allRooms;
  // console.log(allrooms);
  // useEffect(() => {
  //   if (!allrooms) {
  //     dispatch(getRoomsAction());
  //   }
  // }, [dispatch, allrooms]);
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
