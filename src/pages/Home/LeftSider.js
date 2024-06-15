import React from "react";

function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-4 sm:flex-row">
          <a href="https://x.com/Its_Kbriaan">
            <i class="ri-twitter-x-line text-tertiary text-xl"></i>
          </a>
          <a href="https://github.com/kbriaan">
           
            <i class="ri-github-fill text-tertiary text-xl"></i>
          </a>

          <a href="https://www.linkedin.com/in/kbriaan/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B0DJ%2BMtITRUuWVRrxzT0d%2Fg%3D%3D">
            <i class="ri-linkedin-box-fill text-tertiary text-xl"></i>
          </a>

          <a href="https://wa.link/lb62nr">
            <i class="ri-whatsapp-fill text-tertiary text-xl"></i>
          </a>
        </div>
        <div className="w-[1px] h-52 bg-tertiary sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSider;
