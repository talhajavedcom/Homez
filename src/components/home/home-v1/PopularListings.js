"use client";
import listings from "@/data/listings";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const PopularListings = ({data = listings }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {data.slice(0, 8).map((listing) => (
          <SwiperSlide key={listing.id}>
            <div className="item">
              <div className="listing-style1">
                <div className="list-thumb">
                  <Image
                    width={382}
                    height={248}
                    className="w-100 h-100 cover"
                    src={listing.image}
                    alt="listings"
                  />
                  <div className="sale-sticker-wrap">
                    {listing.featured && (
                      <div className="list-tag fz12">
                        <span className="flaticon-electricity me-2" />
                        FEATURED
                      </div>
                    )}
                  </div>

                  <div className="list-price">
                    {listing.price} / <span>mo</span>
                  </div>
                </div>
                <div className="list-content">
                  <h6 className="list-title">
                    <Link href={`/single-v2/${listing.id}`}>{listing.title}</Link>
                  </h6>
                  <p className="list-text">{listing.location}</p>
                  <div className="list-meta d-flex align-items-center">
                    <a href="#">
                      <span className="flaticon-bed" /> {listing.bed} bed
                    </a>
                    <a href="#">
                      <span className="flaticon-shower" /> {listing.bath} bath
                    </a>
                    <a href="#">
                      <span className="flaticon-expand" /> {listing.sqft} sqft
                    </a>
                  </div>
                  <hr className="mt-2 mb-2" />
                  <div className="list-meta2 d-flex justify-content-between align-items-center">
                    <span className="for-what">For Rent</span>
                    <div className="icons d-flex align-items-center">
                      <a href="#">
                        <span className="flaticon-fullscreen" />
                      </a>
                      <a href="#">
                        <span className="flaticon-new-tab" />
                      </a>
                      <a href="#">
                        <span className="flaticon-like" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PopularListings;
