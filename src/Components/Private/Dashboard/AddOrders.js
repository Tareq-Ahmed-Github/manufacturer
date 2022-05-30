import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const AddOrders = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios.post("https://bike-hunt.herokuapp.com/addtools", data).then((res) => {
      if (res.data?.upsertedCount === 1) {
        toast.success("Productd is added");
        console.log(res.data);
        reset();
      } else {
        toast.warning("Server error Plz try again");
      }
    });
  };
  return (
    <div>
      <div className="card text-black flex-shrink-0 mx-auto w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label ">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              placeholder="Product Name"
              {...register("tittle", { required: true })}
              className="input input-bordered"
            />
            <label className=" label text-sm text-red-500">
              {errors.tittle && <span>This field is required</span>}
            </label>
          </div>
          <div className="from-control grid grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                min={1}
                {...register("price", { required: true, min: 1 })}
                className="input input-bordered"
              />
              <label className=" label text-sm text-red-500">
                {errors.price && <span>This field is required</span>}
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                placeholder="Quantity"
                min={1}
                {...register("quan", { required: true, min: 1 })}
                className="input input-bordered"
              />
              <label className=" label text-sm text-red-500">
                {errors.quan && <span>This field is required</span>}
              </label>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product image</span>
            </label>
            <input
              type="text"
              placeholder="Product Description"
              defaultValue=""
              {...register("img", { required: true })}
              className="block w-full py-1 text-sm font-normal  text-gray-700 bg-white bg-clip-padding px-2 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              type="text"
              placeholder="Product Description"
              {...register("description", { required: true })}
              className="input input-bordered h-20"
            />
            <label className=" label text-sm text-red-500">
              {errors.description && <span>This field is required</span>}
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-green-500 border-none hover:bg-green-600">
              ADD PRODUCT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddOrders;


// // import axios from "axios";
// import axios from "axios";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import fetcher from "../../../Api";
// import AddOrders from './AddOrders';

// const AddOrders = () => {
//   const [imageURL, setImageURL] = useState("");
//   const [loading, setLoading] = useState(false);

//   const { register, handleSubmit, reset } = useForm();

//   const onSubmit = async (data) => {
//     // console.log(data);
//     // const orderData = {
//     //   ...data,
//     //   image: imageURL,
//     // };

//     const res = await fetcher.post("add-tools", data);
//     console.log(res);
//     reset();
//     // setImageURL("");
//   };

//   const handleUploadImage = (event) => {
//     setLoading(true);
//     const image = event.target.files[0];

//     const formData = new FormData();

//     formData.set("image", image);

//     axios
//       .post(
//         "https://api.imgbb.com/1/upload?key=bcd26824d8d85699e84c01a6866dd83b",
//         formData
//       )
//       .then((res) => {
//         setImageURL(res.data.data.display_url);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className='h-screen w-full flex bg-accent justify-center items-center'>
//       <div class='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
//         <div class='card-body'>
//           <h1 className='text-center text-2xl'>Add Order</h1>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div class='form-control'>
//               <label htmlFor='orderName' class='label'>
//                 <span class='label-text'>Order Name</span>
//               </label>
//               <input
//                 type='text'
//                 id='orderName'
//                 class='input input-bordered'
//                 {...register("orderName")}
//               />
//             </div>
//             <div class='form-control'>
//               <label class='label'>
//                 <span class='label-text'>Order Charge</span>
//               </label>
//               <input
//                 type='text'
//                 class='input input-bordered'
//                 {...register("orderCharge")}
//               />
//             </div>
//             <div class='form-control'>
//               <label
//                 htmlFor='image'
//                 class={
//                   loading
//                     ? "btn btn-primary loading mt-5"
//                     : "btn btn-primary mt-5"
//                 }
//               >
//                 Upload Image
//               </label>
//               <input
//                 type='file'
//                 id='image'
//                 class='input input-bordered hidden'
//                 onChange={handleUploadImage}
//               />
//             </div>
//             <div class='form-control mt-6'>
//               <button
//                 type='submit'
//                 class='btn btn-primary'
//                 disabled={!imageURL ? true : false}
//               >
//                 Add Order
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddOrders;