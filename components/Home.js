import { connect } from "react-redux";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import RoomItem from "./room/RoomItem";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { clearErrors } from "@/redux/actions/roomActions";
import Pagination from "react-js-pagination";
import Link from "next/link";

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const allRooms = useSelector((state) => state.allRooms);
  const { loading: loadingallrooms, error: errorallrooms, allrooms } = allRooms;
  let { location, page = 1 } = router.query;
  page = Number(page);
  useEffect(() => {
    if (errorallrooms) {
      toast.error(errorallrooms);
      dispatch(clearErrors());
    }
  }, [errorallrooms, dispatch]);

  const handlePagination = (pageNumber) => {
    window.location.href = `/?page=${pageNumber}`;
  };

  let count = allrooms.roomsCount;
  if (location) {
    count = allrooms.filteredRoomsCount;
  }

  return (
    <>
      <section id="rooms" className="container mt-5">
        <h2 className="mb-3 ml-2 stays-heading">
          {location ? `Rooms in ${location}` : "All Rooms"}
        </h2>
        <Link href="/search" className="ml-2 back-to-search">
          <span>
            {" "}
            <i className="fa fa-arrow-left"></i> Back to Search
          </span>
        </Link>
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
      {allrooms.resPerPage < count && (
        <div className="d-flex justify-content-center mt-5">
          <Pagination
            activePage={page}
            itemsCountPerPage={allrooms.resPerPage}
            totalItemsCount={allrooms.roomsCount}
            onChange={handlePagination}
            nextPageText={"Next"}
            prevPageText={"Prev"}
            firstPageText={"First"}
            lastPageText={"Last"}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    allRooms: state.allRooms,
    // other props as needed
  };
};

export default connect(mapStateToProps)(Home);
