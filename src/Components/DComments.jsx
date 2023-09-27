import React from "react";

function DComments() {
  return (
    <section class="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
      <div class="w-3/4 mx-auto px-4">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Discussion
          </h2>
        </div>
        <form class="mb-6">
          <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label for="comment" class="sr-only">
              Your comment
            </label>
            <textarea
              rows="6"
              class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>
          <button class="inline-flex items-center py-2.5 px-4 text-sm font-semibold text-center text-white bg-blue-700 rounded-lg dark:focus:ring-primary-900 hover:bg-primary-800">
            Post comment
          </button>
          <button class="inline-flex items-center py-2.5 px-4 text-red-600 text-sm font-semibold text-center rounded-lg hover:bg-primary-800">
            Cancel
          </button>
        </form>
        <section>
        <article class="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
          <footer class="flex justify-between items-center mb-2">
            <div class="flex items-center">
              <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                <img
                  class="mr-2 w-6 h-6 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  alt="Michael Gough"
                />
                Michael Gough
              </p>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                <time pubdate datetime="2022-02-08" title="February 8th, 2022">
                  Feb. 8, 2022
                </time>
              </p>
            </div>
            <button
              id="dropdownComment1Button"
              data-dropdown-toggle="dropdownComment1"
              class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              type="button"
            >
              <i class="fa-solid fa-trash text-xl text-red-600"></i>
              <span class="sr-only">Comment settings</span>
            </button>
          </footer>
          <p class="text-gray-500 dark:text-gray-400">
            Very straight-to-point article. Really worth time reading. Thank
            you! But tools are just the instruments for the UX designers. The
            knowledge of the design tools are as important as the creation of
            the design strategy.
          </p>
          <div class="flex items-center mt-4 space-x-4">
            
              <input
                class="px-2 w-full text-sm rounded-lg mr-2 text-gray-900 border-[1px] focus:outline-none focus:ring-0 py-2"
                placeholder="Write a reply..."
                required
              />
              <span className="inline-flex items-center py-2.5 px-4 text-sm font-semibold text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">Reply</span>
          </div>
        </article>
        <article class="p-6 mb-3 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900">
          <footer class="flex justify-between items-center mb-2">
            <div class="flex items-center">
              <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                <img
                  class="mr-2 w-6 h-6 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="Jese Leos"
                />
                Jese Leos
              </p>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                <time pubdate datetime="2022-02-12" title="February 12th, 2022">
                  Feb. 12, 2022
                </time>
              </p>
            </div>
            <button
              id="dropdownComment2Button"
              data-dropdown-toggle="dropdownComment2"
              class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              type="button"
            >
              <i class="fa-solid fa-trash text-xl text-red-600"></i>
            </button>
          </footer>
          <p class="text-gray-500 dark:text-gray-400">
            Much appreciated! Glad you liked it ☺️
          </p>
        </article>
        </section>
      </div>
    </section>
  );
}

export default DComments;
