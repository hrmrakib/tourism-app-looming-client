import React from "react";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import { baseURL } from "../utilities/url";
import Swal from "sweetalert2";

const UpdateMyList = () => {
  const loadedData = useLoaderData();
  //   console.log(loadedData);

  const id = loadedData._id;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleUpdateSpot = (data) => {
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
    } = data;

    // console.log("data", data);

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
    };

    fetch(`${baseURL}/allspot/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(spotInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Successfully Updated!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className='bg-white dark:bg-gray-900'>
      <div className='w-[80%] mx-auto'>
        <form onSubmit={handleSubmit(handleUpdateSpot)}>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10'>
            <div className='shadow-sm'>
              <fieldset className='border border-solid border-gray-300 p-3 w-full rounded-lg'>
                <legend className='font-medium text-black/60 dark:text-blue-600'>
                  PhotoURL
                </legend>
                <input
                  type='text'
                  defaultValue={loadedData.photoURL}
                  {...register("photoURL")}
                  placeholder='Enter PhotoURL'
                  className='px-4 py-1 w-full focus:outline-0 text-black dark:text-white bg-white dark:bg-gray-900'
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
                <legend className='font-medium text-black/60 dark:text-blue-600'>
                  Tourists Spot Name
                </legend>
                <input
                  type='text'
                  defaultValue={loadedData.spotName}
                  {...register("spotName")}
                  placeholder='Tourists Spot Name'
                  className='px-4 py-1 w-full focus:outline-0 text-black dark:text-white bg-white dark:bg-gray-900'
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
                <legend className='font-medium text-black/60 dark:text-blue-600'>
                  Country Name
                </legend>
                <select
                  className={
                    "w-full bg-white dark:bg-gray-900 outline-none text-black dark:text-white"
                  }
                  defaultValue={loadedData.country}
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
                <legend className='font-medium text-black/60 dark:text-blue-600'>
                  Location
                </legend>
                <input
                  type='text'
                  defaultValue={loadedData.location}
                  {...register("location")}
                  placeholder='Enter location'
                  className='px-4 py-1 w-full focus:outline-0 text-black dark:text-white bg-white dark:bg-gray-900'
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
                <legend className='font-medium text-black/60 dark:text-blue-600'>
                  Short Description
                </legend>
                <input
                  type='text'
                  defaultValue={loadedData.description}
                  {...register("description")}
                  placeholder='Enter description'
                  className='px-4 py-1 w-full focus:outline-0 text-black dark:text-white bg-white dark:bg-gray-900'
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
                <legend className='font-medium text-black/60 dark:text-blue-600'>
                  Average Cost
                </legend>
                <input
                  type='text'
                  defaultValue={loadedData.averageCost}
                  {...register("averageCost")}
                  placeholder='Enter cost'
                  className='px-4 py-1 w-full focus:outline-0 text-black dark:text-white bg-white dark:bg-gray-900'
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
                <legend className='font-medium text-black/60 dark:text-blue-600'>
                  Seasonality
                </legend>
                <input
                  type='text'
                  defaultValue={loadedData.seasonality}
                  {...register("seasonality")}
                  placeholder='Seasonality  - Summer / Winter'
                  className='px-4 py-1 w-full focus:outline-0 text-black dark:text-white bg-white dark:bg-gray-900'
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
                <legend className='font-medium text-black/60 dark:text-blue-600'>
                  Travel Time
                </legend>
                <input
                  type='text'
                  defaultValue={loadedData.travelTime}
                  {...register("travelTime")}
                  placeholder='Travel Time'
                  className='px-4 py-1 w-full focus:outline-0 text-black dark:text-white bg-white dark:bg-gray-900'
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
                <legend className='font-medium text-black/60 dark:text-blue-600'>
                  Total Visitors Per Year
                </legend>
                <input
                  type='text'
                  defaultValue={loadedData.totaVisitorsPerYear}
                  {...register("totaVisitorsPerYear")}
                  placeholder='Total Visitors Per Year'
                  className='px-4 py-1 w-full focus:outline-0 text-black dark:text-white bg-white dark:bg-gray-900'
                />
              </fieldset>
              <p>
                {errors.totaVisitorsPerYear && (
                  <span className='text-red-600'>This field is required</span>
                )}
              </p>
            </div>

            <div>
              <button className='w-full mt-3 px-3 py-5 text-lg bg-[#FF497C] hover:bg-[#ab3154] rounded text-white font-semibold'>
                Update Spot
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMyList;
