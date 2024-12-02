import cities from "@/data/propertyByCities";
import Image from "next/image";
import Link from "next/link";

const PropertyByCities = () => {
  return (
    <>
      {cities.slice(29, 37).map((city, index) => (
        <div className="col-sm-6 col-lg-3" key={index}>
          <Link href="/grid-full-2-col">
            <div className="home9-city-style position-relative mb30 mb20-md mb0-sm d-flex align-items-center">
              <div className="city-img flex-shrink-0">
                <Image
                  width={110}
                  height={110}
                  src={city.image}
                  alt="listing"
                />
              </div>
              <div className="flex-shrink-1 ms-3">
                <h6 className="mb-1">{city.name}</h6>
                <p className="mb-0">{city.propertyCount} property</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default PropertyByCities;
