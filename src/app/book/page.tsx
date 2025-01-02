import Image from "next/image";

export default function Page() {
  return (
    <main className="h-full">
      {/* Booking Section */}
      <section className="flex flex-col items-center">
        <h1 className="text-[#2C2F24] md:text-6xl sm:text-5xl text-3xl font-serif font-medium my-6 text-center">
          Book A Table
        </h1>
        <p className="text-[#495460] text-center">
          We consider all the drivers of change gives you the components <br />
          you need to change to create a truly happens.
        </p>

        <div className="h-auto md:w-[717px] w-11/12 sm:w-auto bg-gray-100 rounded-md shadow-md mt-9 p-7 z-10">
          <form method="post">
            {/* Row 1 */}
            <div className="flex sm:flex-row flex-col gap-4 items-center">
              <div className="flex flex-col w-full">
                <label htmlFor="dateInput" className="ml-4 font-bold">
                  Date
                </label>
                <input
                  id="dateInput"
                  type="date"
                  className="h-12 p-5 border border-[#DBDFD0] rounded-full"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="timeInput" className="ml-4 font-bold">
                  Time
                </label>
                <select
                  id="timeInput"
                  name="timeSelection"
                  className="pr-6 border border-[#DBDFD0] h-12 p-3 rounded-full"
                >
                  <option value="06:30 pm">06:30 pm</option>
                  <option value="08:00 pm">08:00 pm</option>
                  <option value="10:00 pm">10:00 pm</option>
                  <option value="12:00 am">12:00 am</option>
                </select>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex sm:flex-row flex-col gap-4 mt-5 items-center">
              <div className="flex flex-col w-full">
                <label htmlFor="name" className="ml-4 font-bold">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter Your Name"
                  className="h-12 p-5 border border-[#DBDFD0] rounded-full"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="Phone" className="ml-4 font-bold">
                  Phone
                </label>
                <input
                  id="Phone"
                  type="number"
                  placeholder="xxxx-xxxxxxx"
                  className="h-12 p-5 border border-[#DBDFD0] rounded-full"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex sm:flex-row flex-col gap-4 mt-5 items-center">
              <div className="flex flex-col w-full">
                <label htmlFor="totalPerson" className="ml-4 font-bold">
                  Total Person
                </label>
                <select
                  id="totalPerson"
                  name="totalPerson"
                  className="pr-6 border border-[#DBDFD0] h-12 p-3 rounded-full"
                >
                  <option value="1 Person">1 Person</option>
                  <option value="2 Person">2 Person</option>
                  <option value="3 Person">3 Person</option>
                  <option value="4 Person">4 Person</option>
                  <option value="Family">Family</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#4a016b] w-full text-white font-bold p-3 rounded-full mt-5"
            >
              Book A Table
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="mt-12 h-auto relative bottom-28">
        <div className="w-full flex justify-center">
          <Image
            src={"/image/map.png"}
            height={767}
            width={1600}
            alt="map"
            className="w-full h-[600px]"
          />
        </div>
      </section>

      
    </main>
  );
}