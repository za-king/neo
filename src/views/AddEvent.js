import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FormData from "form-data";
function AddEvent() {
  let formdata = new FormData();

  const [eventName, setEventName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState(null);
  const [started, setStarted] = useState(null);
  const [finish, setFinish] = useState(null);
  const [speakers, setSpeakers] = useState("");
  const [speakerJob, setSpeakerJob] = useState("");
  const [speakersCompany, setSpeakersCompany] = useState("");
  const [description, setDescription] = useState("");

  const handleUpload = (e) => {
    const file = e.target.file[0];
    setImage(file)
  };

  const data = {
    event_name: eventName,
    price: price,
    image: image,
    date: date,
    started_at: started,
    finish_at: finish,
    speakers: speakers,
    speaker_job: speakerJob,
    speakers_company: speakersCompany,
    description: description,
  };
  const TambahEvent = () => {
    axios.post("http://localhost:3004/events", data).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Events</h1>
          </div>
        </header>

        <main className="p-10">
          <div className="flex justify-center flex-col ">
            <div className="flex bg-black rounded w-full h-[50px] justify-end items-center">
              <div className="m-2">
                <Link to="/events">
                  <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded ">
                    <p>Kembali</p>
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex justify-center mt-10">
              <form class="w-full max-w-lg">
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      Nama Event
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder=""
                      onChange={(event) => {
                        setEventName(event.target.value);
                      }}
                    />
                  </div>
                  <div class="w-full md:w-1/2 px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      Harga
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-price"
                      type="text"
                      placeholder="10000"
                      onChange={(event) => {
                        setPrice(event.target.value);
                      }}
                    />
                  </div>
                  <div class="w-full md:w-1/2 px-3 mb-6">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      Speakers
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-price"
                      type="text"
                      placeholder="Annissa"
                      onChange={(event) => {
                        setSpeakers(event.target.value);
                      }}
                    />
                  </div>
                  <div class="w-full md:w-1/2 px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      Speaker Job
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-price"
                      type="text"
                      placeholder=""
                      onChange={(event) => {
                        setSpeakerJob(event.target.value);
                      }}
                    />
                  </div>

                  <div class="w-full md:w-1/2 px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      Speakers Company
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-price"
                      type="text"
                      placeholder="Gunadarma"
                      onChange={(event) => {
                        setSpeakersCompany(event.target.value);
                      }}
                    />
                  </div>

                  <div class="w-full md:w-1/2 px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      Gambar
                    </label>
                    <input
                      width="48"
                      height="48"
                      type="file"
                      alt=""
                      onChange={(e) =>{handleUpload(e)}}
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      dekripsi
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-password"
                      type="password"
                      placeholder=""
                      onChange={(event) => {
                        setDescription(event.target.value);
                      }}
                    />
                  </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-2">
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Tanggal
                    </label>
                    <input
                      class="appearance-none block w-[200px] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      type="date"
                      format="yyyy-mm-dd"
                      placeholder=""
                      onChange={(event) => {
                        setDate(event.target.value);
                      }}
                    />
                  </div>

                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Mulai
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      type="time"
                      placeholder=""
                      onChange={(event) => {
                        setStarted(event.target.value);
                      }}
                    />
                  </div>

                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Berakhir
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      type="time"
                      placeholder=""
                      onChange={(event) => {
                        setFinish(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <button
                  onClick={TambahEvent}
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Tambah
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AddEvent;
