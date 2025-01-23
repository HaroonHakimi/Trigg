import React from "react";

type Props = {};

const PrivacyPolicy = (props: Props) => {
  return (
    <section>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">
          Welcome to Trigg! This guide will help you get started with our
          platform.
        </h1>

        <h2 className="text-2xl font-semibold mb-4">Before you start</h2>
        <div className="mb-8">
          <p>
            Make sure you are using an already created facebook page, and it is
            recommended not to make a new one.
          </p>
          <p>
            Make sure your facebook account has 2 step verification enabled in
            order for these steps to work.
          </p>
        </div>

        {/* Introduction */}
        <h3 className="text-2xl font-semibold mb-4">
          Creating a Facebook Page
        </h3>
        <ul className="mb-8">
          <li>1. Sign in to Facebook</li>
          <li>2. Click on Pages</li>
          <li>3. Click on Create New Page</li>
          <li>4. Enter a unique name for your page</li>
          <li>5. Enter Category</li>
          <li>6. Click on Create Page</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">
          Setting up your account to receive messages
        </h3>
        <ul className="mb-8">
          <li>
            1. Click on the top right profile icon, and press &apos;See all
            profiles&apos;
          </li>
          <li>2. Click on your newly created page</li>
          <li>3. &#40;Optional&#41; &apos;Click on Not now&apos;</li>
          <li>
            4. You should be redirected to the home page, under shortcuts, click
            on your profile icon
          </li>
          <li>5. Click on Settings on the left</li>
          <li>6. Click on Linked accounts on the left</li>
          <li>7. Connect your Instagram account</li>
          <li>
            8. Click on view account and activate messages to instagram inbox
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Visual Representation</h2>
        <div className="mb-8">
          <div className="relative w-full aspect-video mt-8 border-gradient rounded-2xl overflow-hidden">
            <video
              className="w-full h-full object-contain"
              controls
              autoPlay
              muted
              loop
            >
              <source
                src="/mp4-files/getting-started-tutorial.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-4">Getting Help</h3>
        <div className="mb-8">
          <p className="">
            If you have any questions, please contact us at{" "}
            <a
              className="bg-gradient-to-r from-[#FFDBBB] via-[#FFA500] to-[#FF8C00]
            font-bold bg-clip-text text-transparent"
              href="mailto:haroonhakimi2005@gmail.com"
            >
              support@trigg.ai
            </a>
            {" "}&#40;Click on the email&#41;
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
