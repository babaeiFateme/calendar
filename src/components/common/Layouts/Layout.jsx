import React from "react";

import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
    return (
        <main>
            <div class="flex h-screen">
                <Sidebar />
                <div class="flex-1">
                    <header className="bg-green-200 p-[22px]">کیف پول</header>
                    <div class="p-4">
                        <h1 class="text-xl font-bold">Main Content</h1>
                        <p class="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed ullamcorper odio et ligula vestibulum
                            faucibus. Integer vel ligula at purus tempor
                            tristique vel ac nisl. Donec laoreet purus in tellus
                            laoreet, vel efficitur mi mattis.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Layout;
