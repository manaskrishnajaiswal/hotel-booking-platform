import { clearErrors } from "@/redux/actions/roomActions";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RoomFeatures from "./RoomFeatures";

const RoomDetails = () => {
  const dispatch = useDispatch();
  const roomDetails = useSelector((state) => state.roomDetails);
  const {
    loading: loadingallrooms,
    error: errorroomdetails,
    roomdetails,
  } = roomDetails;

  useEffect(() => {
    if (errorroomdetails) {
      toast.error(errorroomdetails);
      dispatch(clearErrors());
    }
  }, [errorroomdetails, dispatch]);
  return (
    <>
      {roomdetails ? (
        <>
          <Head>
            <title>{roomdetails.room.name} - BookIT</title>
          </Head>
          <div className="container container-fluid">
            <h2 className="mt-5">{roomdetails.room.name}</h2>
            <p>{roomdetails.room.address}</p>
            <div className="ratings mt-auto mb-3">
              <div className="rating-outer">
                <div
                  className="rating-inner"
                  style={{ width: `${(roomdetails.room.rating / 5) * 100}%` }}
                ></div>
              </div>
              <span id="no_of_reviews">
                ({roomdetails.room.numOfReviews} Reviews)
              </span>
            </div>
            <Carousel>
              {roomdetails.room.images &&
                roomdetails.room.images.map((image) => (
                  <Carousel.Item key={image.public_id}>
                    <div style={{ width: "100%", height: "440px" }}>
                      <Image
                        className="d-block m-auto"
                        src={image.url}
                        alt={roomdetails.room.name}
                        layout="fill"
                      />
                    </div>
                  </Carousel.Item>
                ))}
            </Carousel>
            <div className="row my-5">
              <div className="col-12 col-md-6 col-lg-8">
                <h3>Description</h3>
                <p>{roomdetails.room.description}</p>
                <RoomFeatures room={roomdetails.room} />
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="booking-card shadow-lg p-4">
                  <p className="price-per-night">
                    <b>${roomdetails.room.pricePerNight}</b> / night
                  </p>
                  <button className="btn btn-block py-3 booking-btn">
                    Pay
                  </button>
                </div>
              </div>
            </div>
            <div className="reviews w-75">
              <h3>Reviews:</h3>
              <hr />
              <div className="review-card my-3">
                <div className="rating-outer">
                  <div className="rating-inner"></div>
                </div>
                <p className="review_user">by John</p>
                <p className="review_comment">Good Quality</p>
                <hr />
              </div>
              <div className="review-card my-3">
                <div className="rating-outer">
                  <div className="rating-inner"></div>
                </div>
                <p className="review_user">by John</p>
                <p className="review_comment">Good Quality</p>
                <hr />
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default RoomDetails;
