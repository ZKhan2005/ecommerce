
export default function contact () {
  return (
    <main  className=" h-full" >
      <section className="flex flex-col items-center ">
        <h1 className="text-[#2C2F24] text-6xl font-serif font-medium my-6 text-center ">
        Contact Us
        </h1>
        <p className="text-[#495460] text-center  z-50">
          We consider all the drivers of change gives you the components <br />
          you need to change to create a truly happens.
        </p>

      {/* form container */}
        <div className="h-auto md:w-[717px]  w-11/12 sm:w-auto bg-gray-100   rounded-md shadow-lg  shadow-slate-400 mt-9  p-7">
          <form method="post">
            {/* row 1 */}
            <div className="flex sm:flex-row flex-col gap-4 items-center">
              <div className="flex flex-col w-full">
                <label htmlFor="name" className="ml-4 font-bold">Name</label>
                <input id="name" type="text" placeholder="Enter your name" className="h-12 p-5 border border-[#DBDFD0] rounded-full"/>
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="email" className="ml-4 font-bold">Email</label>
                <input id="emil" type="email" placeholder="Enter email address" className="h-12 p-5 border border-[#DBDFD0] rounded-full"/>
              </div>
            </div>
            {/* row 2 */}
            <div className="flex  sm:flex-row flex-col  gap-4 mt-5 items-center">
              <div className="flex flex-col w-full">
                <label htmlFor="subject" className="ml-4 font-bold">Subject</label>
                <input id="subject" type="text" placeholder="Write a subject" className="h-12 p-5 border border-[#DBDFD0] rounded-full"/>
              </div>
             
            </div>

            {/* row 3 */}
            <div className="flex  sm:flex-row flex-col gap-4 mt-5 items-center">
              <div className="flex flex-col w-full">
                <label htmlFor="totalPerson" className="ml-4 font-bold">Total Person</label>
                 <textarea  className="h-32 p-5 border border-[#DBDFD0] rounded-md "  placeholder="write your message"/>
              </div>
            </div>
            <button type="submit" className="bg-[#471180] w-full text-white font-bold p-3 rounded-full mt-5">
              Book A Table
            </button>
          </form>
        </div>


        {/* address  */}

        <div className="h-auto  mb-9 md:w-[717px] grid sm:grid-cols-3 grid-cols-2  small:grid-cols-1  gap-3  md:justify-around  w-11/12 sm:w-auto text-[#2C2F24]   mt-10"> 
             <div>
                <h3 className="font-bold mb-2">Call us:</h3>
                <p className="text-[#711e82] font-bold ">+1-234-567-8900</p>

             </div>
             <div>
                <h3 className="font-bold mb-2">Hours:</h3>
                <p> Mon-Fri: 11am - 11pm </p>
                <p>Sat, Sun: 9am - 2am</p>
             </div>
             <div>
                <h3  className="font-bold mb-2">Our Location:</h3>
                <p>Street Number 5</p>
                <p>Gulshan-E-Iqbal, 115</p>
                <p>Karachi, Pakistan.</p>
             </div>
        </div>
      </section>

     
    </main>
  );
}




