import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { baseURL } from "../utilities/url";
import Swal from "sweetalert2";

const AddTouristSpot = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const watchMysel = watch("country");

  useEffect(() => {
    setSelectedCountry("");
    const filtraPavimento = () => {
      console.log("mysel value", watchMysel);
      setSelectedCountry(watchMysel);
    };
    filtraPavimento();
    console.log("effect calling........");
  }, [watchMysel]);

  console.log("selectedCountry", selectedCountry);

  const handleAddSpot = (data) => {
    const {
      averageCost,
      country,
      description,
      location,
      photoURL,
      seasonality,
      spotName,
      totaVisitorsPerYear,
      travelTime,
      userEmail,
      userName,
    } = data;

    const spotInfo = {
      averageCost,
      country,
      description,
      location,
      photoURL,
      seasonality,
      spotName,
      totaVisitorsPerYear,
      travelTime,
      userEmail,
      userName,
    };

    fetch(`${baseURL}/allspot`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(spotInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Successfully Added a Tourist Spot!",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
      });
  };

  return (
    <div className='bg-white'>
      <div className='w-[88%] mx-auto py-16 bg-white'>
        <h2 className='text-4xl font-bold text-center mb-9 text-gray-950'>
          Add a New Tourist Spot
        </h2>
        <form onSubmit={handleSubmit(handleAddSpot)}>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10'>
            <div className='shadow-sm'>
              <fieldset className='border border-solid border-gray-300 p-3 w-full rounded-lg'>
                <legend className='font-medium text-black/60'>PhotoURL</legend>
                <input
                  type='text'
                  {...register("photoURL", { required: true })}
                  placeholder='Enter PhotoURL'
                  className='px-4 py-1 w-full focus:outline-0 text-black bg-white'
                />
              </fieldset>
              <p>
                {errors.photoURL && (
                  <span className='text-red-600'>PhotoURL is required</span>
                )}
              </p>
            </div>
            <div className='shadow-sm'>
              <fieldset className='border border-solid border-gray-300 p-3 w-full rounded-lg'>
                <legend className='font-medium text-black/60'>
                  Tourists Spot Name
                </legend>
                <input
                  type='text'
                  {...register("spotName", { required: true })}
                  placeholder='Tourists Spot Name'
                  className='px-4 py-1 w-full focus:outline-0 text-black bg-white'
                />
              </fieldset>
              <p>
                {errors.spotName && (
                  <span className='text-red-600'>Spot Name is required</span>
                )}
              </p>
            </div>
            <div className='shadow-sm'>
              <fieldset className='border border-solid border-gray-300 p-3 w-full rounded-lg'>
                <legend className='font-medium text-black/60'>
                  Country Name
                </legend>
                <select
                  className={"w-full bg-white outline-none text-black"}
                  defaultValue='0'
                  {...register("country")}
                >
                  <option value='0'>Select Country</option>
                  <option value='Bangladesh'>Bangladesh</option>
                  <option value='Thailand'>Thailand</option>
                  <option value='Indonesia'>Indonesia</option>
                  <option value='Malaysia'>Malaysia</option>
                  <option value='Vietnam'>Vietnam</option>
                  <option value='Cambodia'>Cambodia</option>
                </select>
              </fieldset>
              <p>
                {errors.country && (
                  <span className='text-red-600'>Select at least one</span>
                )}
              </p>
            </div>
            <div className='shadow-sm'>
              <fieldset className='border border-solid border-gray-300 p-3 w-full rounded-lg'>
                <legend className='font-medium text-black/60'>Location</legend>
                <input
                  type='text'
                  {...register("location", { required: true })}
                  placeholder='Enter location'
                  className='px-4 py-1 w-full focus:outline-0 text-black bg-white'
                />
              </fieldset>
              <p>
                {errors.location && (
                  <span className='text-red-600'>Location is required</span>
                )}
              </p>
            </div>
            <div className='shadow-sm'>
              <fieldset className='border border-solid border-gray-300 p-3 w-full rounded-lg'>
                <legend className='font-medium text-black/60'>
                  Short Description
                </legend>
                <input
                  type='text'
                  {...register("description", { required: true })}
                  placeholder='Enter description'
                  className='px-4 py-1 w-full focus:outline-0 text-black bg-white'
                />
              </fieldset>
              <p>
                {errors.description && (
                  <span className='text-red-600'>Description is required</span>
                )}
              </p>
            </div>
            <div className='shadow-sm'>
              <fieldset className='border border-solid border-gray-300 p-3 w-full rounded-lg'>
                <legend className='font-medium text-black/60'>
                  Average Cost
                </legend>
                <input
                  type='text'
                  {...register("averageCost", { required: true })}
                  placeholder='Enter cost'
                  className='px-4 py-1 w-full focus:outline-0 text-black bg-white'
                />
              </fieldset>
              <p>
                {errors.averageCost && (
                  <span className='text-red-600'>Average cost is required</span>
                )}
              </p>
            </div>
            <div className='shadow-sm'>
              <fieldset className='border border-solid border-gray-300 p-3 w-full rounded-lg'>
                <legend className='font-medium text-black/60'>
                  Seasonality
                </legend>
                <input
                  type='text'
                  {...register("seasonality", { required: true })}
                  placeholder='Seasonality  - Summer / Winter'
                  className='px-4 py-1 w-full focus:outline-0 text-black bg-white'
                />
              </fieldset>
              <p>
                {errors.seasonality && (
                  <span className='text-red-600'>Seasonality is required</span>
                )}
              </p>
            </div>
            <div className='shadow-sm'>
              <fieldset className='border border-solid border-gray-300 p-3 w-full rounded-lg'>
                <legend className='font-medium text-black/60'>
                  Travel Time
                </legend>
                <input
                  type='text'
                  {...register("travelTime", { required: true })}
                  placeholder='Travel Time'
                  className='px-4 py-1 w-full focus:outline-0 text-black bg-white'
                />
              </fieldset>
              <p>
                {errors.travelTime && (
                  <span className='text-red-600'>Travel time is required</span>
                )}
              </p>
            </div>
            <div className='shadow-sm'>
              <fieldset className='border border-solid border-gray-300 p-3 w-full rounded-lg'>
                <legend className='font-medium text-black/60'>
                  Total Visitors Per Year
                </legend>
                <input
                  type='text'
                  {...register("totaVisitorsPerYear", { required: true })}
                  placeholder='Total Visitors Per Year'
                  className='px-4 py-1 w-full focus:outline-0 text-black bg-white'
                />
              </fieldset>
              <p>
                {errors.totaVisitorsPerYear && (
                  <span className='text-red-600'>This field is required</span>
                )}
              </p>
            </div>
            <div className='shadow-sm'>
              <fieldset className='border border-solid border-gray-300 p-3 w-full rounded-lg'>
                <legend className='font-medium text-black/60'>
                  User Email
                </legend>
                <input
                  type='email'
                  {...register("userEmail", { required: true })}
                  placeholder='User Email'
                  className='px-4 py-1 w-full focus:outline-0 text-black bg-white'
                />
              </fieldset>
              <p>
                {errors.userEmail && (
                  <span className='text-red-600'>Email is required</span>
                )}
              </p>
            </div>
            <div className='shadow-sm'>
              <fieldset className='border border-solid border-gray-300 p-3 w-full rounded-lg'>
                <legend className='font-medium text-black/60'>User Name</legend>
                <input
                  type='text'
                  {...register("userName", { required: true })}
                  placeholder='User Name'
                  className='px-4 py-1 w-full focus:outline-0 text-black bg-white'
                />
              </fieldset>
              <p>
                {errors.userName && (
                  <span className='text-red-600'>User name is required</span>
                )}
              </p>
            </div>
            <div>
              <button className='w-full mt-3 px-3 py-5 text-lg bg-[#FF497C] hover:bg-[#ab3154] rounded text-white font-semibold'>
                Add New Spot
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTouristSpot;
