import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContextProvider";
import { baseURL } from "../utilities/url";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyListPage = () => {
  const [listedSpot, setListedSpot] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user } = useContext(AuthContext);
  const userEmail = user.email;

  useEffect(() => {
    document.title = "Looming | My Listed Spot";
  }, []);

  useEffect(() => {
    fetch(`${baseURL}/allDataByEmail/${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setListedSpot(data);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${baseURL}/allspot/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                position: "top",
                icon: "success",
                title: "Deleted Successfully!",
                showConfirmButton: false,
                timer: 1500,
              });
              const filtered = listedSpot.filter((spot) => spot._id !== id);
              setListedSpot(filtered);
            }
          });
      }
    });
  };

  if (loading) {
    return (
      <div className='bg-white dark:bg-gray-900 flex items-center justify-center h-screen w-full'>
        <div className='bg-gray-600 size-16 rounded-full flex items-center justify-center'>
          <span className='loading loading-spinner loading-lg text-center text-white'></span>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-white dark:bg-gray-900 min-h-screen'>
      <div className='md:w-[80%] mx-auto'>
        <div className='mb-12'>
          <div>
            <h2 className='text-center text-3xl text-gray-900 font-bold'>
              I have added the tourist spot!
            </h2>
          </div>
        </div>
        <div>
          <div className='overflow-x-auto'>
            <table className='table'>
              {/* head */}
              <thead>
                <tr className='text-gray-900 dark:text-white font-semibold text-xl'>
                  <th>No</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Duration</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {listedSpot.map((spot, i) => (
                  <tr key={spot?._id}>
                    <th className='text-green-400 dark:text-blue-500 font-semibold text-xl'>
                      {i + 1}
                    </th>
                    <td>
                      <div className='flex items-center gap-3'>
                        <div className='avatar'>
                          <div className='w-16 h-12'>
                            <img src={spot?.photoURL} alt='' />
                          </div>
                        </div>
                        <div>
                          <div className='font-bold md:text-lg text-black dark:text-gray-100'>
                            {spot?.spotName}
                          </div>
                          <div className='text-sm text-gray-700  dark:text-gray-100'>
                            {spot?.location}, {spot?.country}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className='text-gray-800 dark:text-gray-100 font-semibold text-lg'>
                      ${spot?.averageCost}
                    </td>
                    <td className='text-gray-800 dark:text-gray-100 font-semibold text-lg'>
                      {spot?.travelTime}
                    </td>
                    <th>
                      <Link to={`/updateMyList/${spot._id}`}>
                        <button className='bg-[#f52dd0] mr-3 text-white px-4 py-2 rounded-md'>
                          Update
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(spot._id)}
                        className='bg-[#f64a2f] text-white px-4 py-2 rounded-md'
                      >
                        Delete
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyListPage;
