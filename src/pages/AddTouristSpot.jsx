import { useForm } from "react-hook-form";

const AddTouristSpot = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const handleAddSpot = (data) => {
    const {
      averageCost,
      countryName,
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
  };

  return (
    <div className='w-[88%] mx-auto my-16'>
      <h2 className='text-4xl font-bold text-center mb-9'>
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
                className='px-4 py-1 w-full focus:outline-0'
              />
            </fieldset>
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
                className='px-4 py-1 w-full focus:outline-0'
              />
            </fieldset>
          </div>
          <div className='shadow-sm'>
            <fieldset className='border border-solid border-gray-300 p-3 w-full rounded-lg'>
              <legend className='font-medium text-black/60'>
                Country Name
              </legend>
              <input
                type='text'
                {...register("countryName", { required: true })}
                placeholder='Enter Country Name'
                className='px-4 py-1 w-full focus:outline-0'
              />
            </fieldset>
          </div>
          <div className='shadow-sm'>
            <fieldset className='border border-solid border-gray-300 p-3 w-full rounded-lg'>
              <legend className='font-medium text-black/60'>Location</legend>
              <input
                type='text'
                {...register("location", { required: true })}
                placeholder='Enter location'
                className='px-4 py-1 w-full focus:outline-0'
              />
            </fieldset>
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
                className='px-4 py-1 w-full focus:outline-0'
              />
            </fieldset>
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
                className='px-4 py-1 w-full focus:outline-0'
              />
            </fieldset>
          </div>
          <div className='shadow-sm'>
            <fieldset className='border border-solid border-gray-300 p-3 w-full rounded-lg'>
              <legend className='font-medium text-black/60'>Seasonality</legend>
              <input
                type='text'
                {...register("seasonality", { required: true })}
                placeholder='Seasonality  - Summer / Winter'
                className='px-4 py-1 w-full focus:outline-0'
              />
            </fieldset>
          </div>
          <div className='shadow-sm'>
            <fieldset className='border border-solid border-gray-300 p-3 w-full rounded-lg'>
              <legend className='font-medium text-black/60'>Travel Time</legend>
              <input
                type='text'
                {...register("travelTime", { required: true })}
                placeholder='Travel Time'
                className='px-4 py-1 w-full focus:outline-0'
              />
            </fieldset>
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
                className='px-4 py-1 w-full focus:outline-0'
              />
            </fieldset>
          </div>
          <div className='shadow-sm'>
            <fieldset className='border border-solid border-gray-300 p-3 w-full rounded-lg'>
              <legend className='font-medium text-black/60'>User Email</legend>
              <input
                type='email'
                {...register("userEmail", { required: true })}
                placeholder='User Email'
                className='px-4 py-1 w-full focus:outline-0'
              />
            </fieldset>
          </div>
          <div className='shadow-sm'>
            <fieldset className='border border-solid border-gray-300 p-3 w-full rounded-lg'>
              <legend className='font-medium text-black/60'>User Name</legend>
              <input
                type='text'
                {...register("userName", { required: true })}
                placeholder='User Name'
                className='px-4 py-1 w-full focus:outline-0'
              />
            </fieldset>
          </div>
          <div>
            <button className='w-full mt-3 px-3 py-5 text-lg bg-[#FF497C] hover:bg-[#ab3154] rounded text-white font-semibold'>
              Add New Spot
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTouristSpot;
