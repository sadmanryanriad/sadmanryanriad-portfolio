import toast from "react-hot-toast";

const handleSubmit = (e) =>{
    e.preventDefault();
    toast.success("I will Contact you!");
    e.target.reset();
}

const ContactForm = () => {
    return (
      <div className="text-center flex-1">
        <div className="flex items-center justify-center px-5">
          <div className="mx-auto w-full max-w-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label
                  name="name"
                  className="mb-3 block text-base font-medium "
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full rounded-md border dark:bg-gray-600 py-3 px-6 text-base font-medium  outline-none focus:border-orange-400 dark:border-gray-600 dark:focus:border-orange-400 focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                required
                  name="email"
                  className="mb-3 block text-base font-medium "
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@domain.com"
                  className="w-full rounded-md border dark:bg-gray-600 py-3 px-6 text-base font-medium  outline-none focus:border-orange-400 dark:border-gray-600 dark:focus:border-orange-400 focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  name="message"
                  className="mb-3 block text-base font-medium "
                >
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  id="message"
                  placeholder="Type your message"
                  className="w-full resize-none rounded-md border dark:bg-gray-600 py-3 px-6 text-base font-medium  outline-none focus:border-orange-400 dark:border-gray-600 dark:focus:border-orange-400 focus:shadow-md"
                ></textarea>
              </div>
              <div>
                <button className="btn btn-btn btn-sm sm:btn-md dark:bg-gray-400 bg-gray-700 text-white dark:text-black border-none">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactForm;