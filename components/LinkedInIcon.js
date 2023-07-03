import React, { useEffect, useRef, useState } from "react";


export default function LinkedInIcon() {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 171 171" className="icon"><path fill-opacity=".25" d="M27.8.7c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6zm37.6 93.8c0 15.9.2 22.3.3 14.2.2-8.2.2-21.2 0-29-.1-7.8-.3-1.2-.3 14.8zm11.1 11c0 19.2.1 27 .2 17.2.2-9.8.2-25.6 0-35-.1-9.5-.3-1.5-.2 17.8zM145.3 94c0 2.5.2 3.5.4 2.2.2-1.2.2-3.2 0-4.5-.2-1.2-.4-.2-.4 2.3zm-31 16c0 3.6.2 5 .4 3.2.2-1.7.2-4.7 0-6.5-.2-1.7-.4-.3-.4 3.3zm-17.9 9c0 8 .2 11.2.3 7.2.2-3.9.2-10.5 0-14.5-.1-3.9-.3-.7-.3 7.3zm28.9-6c0 4.1.2 5.8.4 3.7.2-2 .2-5.4 0-7.5-.2-2-.4-.3-.4 3.8zm-40 4c0 4.1.2 5.8.4 3.7.2-2 .2-5.4 0-7.5-.2-2-.4-.3-.4 3.8zm49 2c0 4.7.2 6.6.4 4.2.2-2.3.2-6.1 0-8.5-.2-2.3-.4-.4-.4 4.3zm11.1 6.5c0 6 .1 8.4.3 5.2.2-3.2.2-8.1 0-11-.2-2.9-.3-.3-.3 5.8zM33.8 159.7c.6.2 1.8.2 2.5 0 .6-.3.1-.5-1.3-.5-1.4 0-1.9.2-1.2.5zm102 0c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6z"/><path fill-opacity=".44" d="M10.1 70.6c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3z"/><g stroke-width="0"><path d="M24.9.9c-9.4.5-11 .9-14.5 3.3C3.6 9 1.6 13.1.8 23.4 0 35.5-.2 131.8.7 145.5c.6 9.9.9 11.1 3.8 15.4 2 2.9 5 5.5 8.1 7.1l4.8 2.5h137.1l4.6-2.7c2.6-1.6 6-4.8 7.7-7.3 3-4.5 3-4.7 3.7-22.8 1.1-28.9.1-119.6-1.4-123.2-.7-1.7-2.9-4.7-4.9-6.8C156.8 0 161.3.5 95 .4 62.3.3 30.7.5 24.9.9zM146.4 12c9.2 1.1 11.2 3.1 12.6 12.5 1.3 9.5 1.3 114-.1 122.5-1.4 9.2-3.4 10.9-13.7 12.2-12.6 1.5-122.8.6-127-1.1-6.5-2.6-6.5-2.9-7.3-51.1-.8-46.9.1-84.9 2-89.1 1.9-3.8 4.9-5.3 12.6-6 11.3-.9 113.3-.9 120.9.1z"/><path d="M33.2 22c-11.9 5.4-9.8 24.6 3 28.1 11.1 2.9 21.2-5.8 19.5-16.8-1.8-11-11.9-16.1-22.5-11.3zm-4.3 38.6-2.7.5-.4 15.7c-.2 8.6-.2 28.6 0 44.4l.5 28.7 7.3.6c9.7 1 19.3.2 20.4-1.5 2.4-3.9 2.7-84.7.3-87.1-1.3-1.3-20.2-2.2-25.4-1.3zM45 105.5V140h-9V71h9v34.5zm24.5-44.7-3 .7-.3 44.2-.2 44.2 3.4.6c1.9.4 8 .5 13.6.3 8.7-.2 10.4-.6 11.6-2.2 1.1-1.6 1.4-6.4 1.5-22 .1-24.4.8-30.3 3.9-32.8 2.5-2 7.1-2.4 10-.8 4 2.1 4.4 4.7 5 30.2.4 18.4.8 25 1.8 26 .9.9 5 1.3 14.2 1.3 7 0 13.1-.3 13.4-.6.4-.3.7-15.4.8-33.5.2-31.5.1-33.1-1.9-37.6-2.7-5.8-10.1-13.4-15.6-15.8-5.9-2.6-17.7-3.4-25.4-1.7-4.2.9-6.8 1-8 .3-2.1-1.2-20.6-1.8-24.8-.8zm16.1 12.9c1.7 8 3.6 8.9 9.7 4.7 6.1-4.1 13.9-7.4 17.7-7.4 7.1 0 17.5 6.8 19.9 13.1.5 1.4 1.3 14.6 1.7 29.2l.7 26.7h-9l-.6-15.2c-.4-8.3-.7-18.7-.7-23.1 0-9.4-1.6-13.5-6.8-17.1-10.1-6.9-19.9-5.9-28.2 2.8l-3.5 3.7-.6 19.7c-.4 10.8-.8 21.8-.8 24.4L85 140h-9V71h4.5c4.1 0 4.5.2 5.1 2.7z"/></g><path fill-opacity=".42" d="M10.1 76.6c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3z"/><path fill-opacity=".07" d="M36.1 80.6c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3zm0 4c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3zm0 7c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3zm0 4c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3zm0 4c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3zm0 8c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3zm0 4c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3zm0 4c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3zm.2 5.9c0 2.2.2 3 .4 1.7.2-1.2.2-3 0-4-.3-.9-.5.1-.4 2.3zm-.1 10.5c0 1.9.2 2.7.5 1.7.2-.9.2-2.5 0-3.5-.3-.9-.5-.1-.5 1.8z"/><path fill-opacity=".06" d="M110 93.4c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3z"/><path fill-opacity=".14" d="M56.2 99.5c0 1.6.2 2.2.5 1.2.2-.9.2-2.3 0-3-.3-.6-.5.1-.5 1.8z"/><path fill-opacity=".38" d="M28 45.4c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4S28 44.6 28 45.4zm61.4 41.8-1.9 2.3 2.3-1.9c2.1-1.8 2.7-2.6 1.9-2.6-.2 0-1.2 1-2.3 2.2z"/></svg>
    )

}
