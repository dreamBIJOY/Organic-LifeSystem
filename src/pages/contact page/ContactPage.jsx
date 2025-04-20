import React, { useEffect } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import LastSection from "../home page/components/Last Section/LastSection";
import BackToTopButton from "../home page/components/Back To Top Button/BackToTopButton";

function ContactPage() {
    useEffect(()=>{
      window.scrollTo(0,0)
    },[])
  return (
    <div>
      <div className="w-10/12 mx-auto flex py-30 justify-between">
        {/* Left: Store Information */}
        <div className="rounded-md w-[400px] h-[600px]">
          <h2 className="text-3xl font-semibold">
            Store information
            <hr className="border-green-700 w-[100px]" />
            <hr className="border-gray-300 w-[270px]" />
          </h2>
          <div className="mt-16">
            <div className="border-t-2 border-b-2 border-gray-200 py-5 mt-6">
              <span className="flex items-center text-2xl gap-2"><IoLocationSharp className="text-[30px] text-black" />Location:-</span>
              <p className="text-xl px-9"> House: 29/31, Noor Tower, Block: A, Road: Main Road, Banasree,
              Rampura, Dhaka 1219</p>
            </div>
            <div className="border-t-2 border-b-2 border-gray-200 py-5 mt-14">
              <span className="flex items-center text-2xl gap-2"><MdPhoneInTalk className="text-[30px] text-black" />Call Us:-</span>
              <p className="text-xl px-9">09678242404</p>
            </div>
            <div className="border-t-2 border-b-2 border-gray-200 py-5 mt-16">
              <span className="flex items-center text-2xl gap-2"><HiOutlineMail  className="text-[30px] text-black" />E-mail Us:-</span>
              <p className="text-xl px-9">hello@organiclifesystem.com</p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="w-7/10 border border-gray-200 rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-4">Contact us</h2>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xl font-medium mb-1">
                  Subject
                </label>
                <select className="w-full border border-gray-200 outline-none rounded px-3 py-2">
                  <option>Support</option>
                  <option>Sales</option>
                </select>
              </div>
              <div>
                <label className="block text-xl font-medium mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-200 outline-none  rounded px-3 py-2"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xl font-medium mb-1">
                Attachment
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="file"
                  className="border px-3 py-2 rounded w-full border-gray-200 outline-none "
                />
                <span className="text-sm text-gray-500">optional</span>
              </div>
            </div>

            <div>
              <label className="block text-xl font-medium mb-1">Message</label>
              <textarea
                className="w-full border rounded px-3 py-2 border-gray-200 outline-none "
                placeholder="How can we help?"
                rows="6"
              />
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms" className="text-lg">
                I agree to the terms and conditions and the privacy policy
              </label>
            </div>

            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
      <LastSection/>
      <BackToTopButton/>
    </div>
  );
}

export default ContactPage;
