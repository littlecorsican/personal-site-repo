import React, { useEffect, useRef, useState } from "react";


export default function EmailIcon() {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 256 256" className="icon"><path fill="currentColor" fill-opacity=".05" d="m206.5 69.2-6 6.3 6.3-6c3.4-3.3 6.2-6.1 6.2-6.2 0-.8-1 .1-6.5 5.9zM90 139.5c-2.4 2.5-4.2 4.5-3.9 4.5.3 0 2.5-2 4.9-4.5 2.4-2.5 4.2-4.5 3.9-4.5-.3 0-2.5 2-4.9 4.5z"/><path fill="#767676" fill-opacity=".1" d="M83.8 48.7c24.4.2 64 .2 88 0 24-.1 4.1-.2-44.3-.2s-68.1.1-43.7.2z"/><path fill="currentColor" fill-opacity=".02" d="M17.5 128c0 31.6.1 44.6.2 28.7.2-15.8.2-41.6 0-57.5-.1-15.8-.2-2.8-.2 28.8z"/><g fill="currentColor" stroke-width="0"><path d="M81.7 49.7c25.5.2 67.1.2 92.5 0 25.5-.1 4.7-.2-46.2-.2-50.9 0-71.7.1-46.3.2zm-47.5 1.4c.5.4-.1.9-1.5 1.3-1.4.3-3.9 1.7-5.6 3.2-1.6 1.4-3.4 2.5-3.8 2.5-.4 0-.7.7-.5 1.6.2.8-.1 1.2-.7.8-.7-.4-.8 0-.4 1.1s.3 1.5-.4 1.1c-.7-.5-.9.1-.6 1.5.3 1.4.1 1.8-.4 1.1-.4-.6-.7 27-.5 61.4.2 52.4.5 63 1.7 66 1.8 4.3 1.8 4.6.3 3.7-.7-.4-.8-.3-.4.5.4.6 1.1.9 1.5.6 1.1-.6 5.3 4 4.4 4.9-.5.4-.3.7.2.6 2.2-.5 3.6.1 2.9 1.2-.4.6-.3.8.3.5 1.3-.8 7.4.3 6.9 1.2-.2.3 40.9.6 91.5.6 50.5 0 91.1-.3 90.1-.6-1.2-.4-.9-.7 1.3-1.1 1.7-.3 3.9-.9 4.9-1.3 1.5-.6 1.7-.5 1.1.5-.5.9-.4 1.1.4.6.6-.4.9-1.1.6-1.6-.5-.8 3-3.4 4.7-3.5.3 0 1-.4 1.5-.9s.2-.6-.6-.1c-.9.5-1.2.3-.9-.6.3-.8 1-1.3 1.6-1.2.7.2.9-.4.5-1.4-.4-1.1-.3-1.4.5-.9.9.5 1.1-16.4 1.1-66.4 0-50-.2-66.9-1.1-66.4-.8.5-.9.2-.5-1 .4-.9.3-1.5-.2-1.2-1.1.7-6.3-4.9-5.4-5.9.5-.4.3-.5-.4-.1s-2.6 0-4.2-.8c-2.6-1.4-15-1.6-96.9-1.8-51.7-.2-93.6 0-93 .3zm137.6 9.6c-24.1.2-63.5.2-87.5 0-24.1-.1-4.4-.2 43.7-.2s67.8.1 43.8.2zm30.7 15.6c-43.5 44.3-70 70.5-70.7 70.1-.5-.3-.7 0-.6.8.2.8-.8 1.4-2.6 1.6-2.7.3-6.8-3.5-46.3-43C58.5 82 39 62.3 39 62c0-.3 39.9-.4 88.7-.2l88.8.2-14 14.3zm24.3 51.7c.2 53.1 0 60.6-1.3 62.7-.9 1.3-2.1 2.1-2.7 1.7-.7-.4-.8-.3-.4.4.3.6-.3 1.6-1.5 2.3-2 1-4.4-1.2-32.5-29.2-16.7-16.7-30.4-30.8-30.4-31.4 0-1.5 66.3-67.6 67.5-67.2.6.2 1.1 21.4 1.3 60.7zM65.5 101l33 33-30.7 30.7c-29.4 29.4-30.8 30.6-33.2 29.5-1.4-.6-2.6-1.9-2.7-2.9-.6-5.9-.8-123.3-.2-123.3.5 0 15.7 14.9 33.8 33zm-34.2 89c.5.8.1.6-.7-.4-1.4-1.8-1.6-8.6-1.4-61.5l.3-59.6.5 60c.3 33 .9 60.7 1.3 61.5zm84.7-38.5c5.8 5.8 11.1 10.5 12 10.5.8 0 6.1-4.6 11.7-10.2l10.2-10.2 8.3 7.9c4.6 4.4 16.7 16.2 27.1 26.2 16.6 16.2 21 20.8 17.7 18.8-.5-.3-1-.1-1 .4 0 .8-22.7 1.1-74.5 1.1s-74.5-.3-74.5-1.1c0-.5-.6-.7-1.2-.3-2.3 1.3 5.2-6.6 28.7-30.4 12.6-12.7 23.4-23.2 24-23.2.6 0 5.7 4.7 11.5 10.5z"/><path d="m193.5 83.2-19 19.3 19.3-19C211.6 65.9 213.5 64 212.7 64c-.1 0-8.8 8.7-19.2 19.2zm25.5-9.5-5.5 5.8 5.6-5.4c3.9-3.6 5.8-4.9 6.2-4 .4 1 .6.9.6-.4.1-2.8-1.2-2-6.9 4zM90 140.5c-2.4 2.5-4.2 4.5-3.9 4.5.3 0 2.5-2 4.9-4.5 2.4-2.5 4.2-4.5 3.9-4.5-.3 0-2.5 2-4.9 4.5zm73.5 16.5c2.1 2.2 4.1 4 4.4 4 .3 0-1.3-1.8-3.4-4-2.1-2.2-4.1-4-4.4-4-.3 0 1.3 1.8 3.4 4zm-103 29.2-8 8.3 8.3-8c7.6-7.4 8.7-8.5 7.9-8.5-.1 0-3.8 3.7-8.2 8.2zm135.5 2.3c1.9 1.9 3.6 3.5 3.9 3.5.3 0-1-1.6-2.9-3.5s-3.6-3.5-3.9-3.5c-.3 0 1 1.6 2.9 3.5zm41.5-60.5c0 34.4.1 48.4.2 31.2.2-17.1.2-45.3 0-62.5-.1-17.1-.2-3.1-.2 31.3zm-219 .5c0 33.5.1 47.1.2 30.2.2-17 .2-44.4 0-61-.1-16.6-.2-2.8-.2 30.8z"/></g><path fill="#7B7B7B" fill-opacity=".11" d="M152 146.4c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3zm32 31c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3z"/><g fill="#999" stroke-width="0"><path d="M31.8 51.4c-4.3 1.5-8.2 5.5-10.8 11.1-1.9 3.8-2 7-2 65.6v61.5l2.6 5.3c2.5 5 9.6 11.3 11.1 9.7.3-.3.1-.6-.5-.6-2.1 0-8.5-6.5-10.3-10.5-1.7-3.7-1.9-8.2-1.9-65.3 0-66.1-.1-65.3 5.3-71 5.6-6-.5-5.7 102.2-6.2l94-.5-93-.2c-74.6-.2-93.7 0-96.7 1.1zm192.7 1c4.8 2.2 9.6 8 11.1 13.3.8 3 1.3 3.9 1.3 2.4.2-6.1-8.8-17.2-13.8-17.1-.9.1-.2.7 1.4 1.4z"/><path d="M84.3 60.7c24 .2 63.4.2 87.5 0 24-.1 4.3-.2-43.8-.2-48.1 0-67.8.1-43.7.2zM40 62.5c0 .6 19.2 20.1 42.7 43.5 23.4 23.4 40.8 40.2 38.5 37.5-5.6-6.8-81.2-82.2-81.2-81zm135.9 39.4c-21.7 21.9-40.7 41.3-42.4 43.2l-3 3.4 2.9-2.5c4.1-3.6 82.9-84 82.4-84-.3 0-18.3 17.9-39.9 39.9zm15.2-1.5c-29.1 29.1-33.2 33.6-32.3 35.2 1.5 2.7 59.2 60.1 59.2 58.9 0-.5-13.4-14.4-29.7-30.7L158.5 134l33-33c37.6-37.7 34-34 33.4-34-.2 0-15.4 15-33.8 33.4zm35.4 27.6c0 33.3.1 46.9.2 30.3.2-16.7.2-43.9 0-60.5-.1-16.7-.2-3.1-.2 30.2zm-197 0c0 32.7.1 46.1.2 29.7.2-16.3.2-43.1 0-59.5-.1-16.3-.2-2.9-.2 29.8zM33 69.5c0 .6 14.3 15.3 31.8 32.8l31.9 31.9L67 164.1C50.7 180.5 36.8 194 36.2 194c-.5 0-2.2-1.4-3.6-3.1-1.4-1.7-2.6-2.6-2.6-2.1 0 1.3 5 6.2 6.4 6.2.6 0 14.8-13.7 31.6-30.5L98.5 134l-32.8-32.7C47.7 83.2 33 69 33 69.5zm53 89.2C59.3 185.9 50.5 195 51.2 195c.3 0 12.5-12.1 27.1-27 14.6-14.9 26.2-27 25.8-27-.3 0-8.5 8-18.1 17.7z"/><path d="M106 142.5c0 2 19.5 20.5 21.6 20.5 1.4 0 5.7-3.6 12-10 5.4-5.5 10.1-9.9 10.5-9.8.6.3 22.1 21 46.7 45.1 3.9 3.9 7.2 6.9 7.2 6.6 0-.5-23.5-23.8-43.8-43.4l-10.2-9.9-10.3 10.2c-5.6 5.6-10.9 10.2-11.7 10.2-.8 0-6.1-4.6-11.7-10.2-5.7-5.7-10.3-9.8-10.3-9.3z"/><path d="M126.8 148.7c.6.2 1.8.2 2.5 0 .6-.3.1-.5-1.3-.5-1.4 0-1.9.2-1.2.5zM236.2 189c0 1.4.2 1.9.5 1.2.2-.6.2-1.8 0-2.5-.3-.6-.5-.1-.5 1.3zm-12.2 2c-.6 1.1-1.7 2-2.4 2-.8 0-1.6.7-2 1.5-.4 1.3-.1 1.2 2-.1 2.3-1.5 5.1-5.4 4-5.4-.3 0-1 .9-1.6 2z"/><path d="M232.8 196.5c-1.6 2.7-4.3 5.3-7 6.7l-4.3 2.3-91.5.5-91.5.5 88.7.3c58.8.1 90.3-.2 93.6-.8 5.4-1.2 11.4-5.6 13.8-10.2 2.4-4.6 1.2-4.1-1.8.7zm-142.5-.8c20.8.2 54.6.2 75 0 20.5-.1 3.5-.2-37.8-.2-41.2 0-58 .1-37.2.2zm-55.5 10c.6.2 1.8.2 2.5 0 .6-.3.1-.5-1.3-.5-1.4 0-1.9.2-1.2.5z"/></g><path fill="#969" d="M221.8 50.7c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6zm-196.9 5c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3zm211.6 72.8c0 32.4.1 45.6.2 29.2.2-16.4.2-43 0-59-.1-16.1-.2-2.7-.2 29.8zm-43-29.3-20 20.3 20.3-20c11.1-11 20.2-20.1 20.2-20.2 0-.8-1.9 1.1-20.5 19.9zM182 96.7l-6.5 6.8 6.8-6.5c6.2-6 7.2-7 6.4-7-.1 0-3.2 3-6.7 6.7zm-16.5 30.5-7 7.3 7.3-7c6.7-6.4 7.7-7.5 6.9-7.5-.1 0-3.4 3.3-7.2 7.2zm-22.5 7.5-6.5 6.8 6.8-6.5c3.7-3.5 6.7-6.6 6.7-6.7 0-.8-1 .2-7 6.4zm-9.6 9.5-1.9 2.3 2.3-1.9c2.1-1.8 2.7-2.6 1.9-2.6-.2 0-1.2 1-2.3 2.2zM97 148.7l-5.5 5.8 5.8-5.5c3.1-3 5.7-5.6 5.7-5.7 0-.8-1 .1-6 5.4zm26.1-3.1c1.3 1.7 2.6 3 2.8 2.7.3-.2-.8-1.6-2.4-3.1l-2.8-2.7 2.4 3.1zm16.4 7.6-9 9.3 9.3-9c8.5-8.3 9.7-9.5 8.9-9.5-.1 0-4.3 4.2-9.2 9.2zm15.5-5c2.4 2.7 4.5 4.8 4.7 4.8.8 0 0-.9-4.4-5l-4.8-4.5 4.5 4.7zm11.5 9.8c1 1.1 2 2 2.3 2 .3 0-.3-.9-1.3-2s-2-2-2.3-2c-.3 0 .3.9 1.3 2zm-118 24.2-11 11.3 11.3-11C59.2 172.3 60.5 171 59.7 171c-.1 0-5.2 5.1-11.2 11.2zm133-8.2c1 1.1 2 2 2.3 2 .3 0-.3-.9-1.3-2s-2-2-2.3-2c-.3 0 .3.9 1.3 2zM62 182.7l-5.5 5.8 5.8-5.5c3.1-3 5.7-5.6 5.7-5.7 0-.8-1 .1-6 5.4zm123-5.3c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3zm5.5 5.6c1 1.1 2 2 2.3 2 .3 0-.3-.9-1.3-2s-2-2-2.3-2c-.3 0 .3.9 1.3 2zm9 7c1 1.1 2 2 2.3 2 .3 0-.3-.9-1.3-2s-2-2-2.3-2c-.3 0 .3.9 1.3 2z"/><path fill="#7C7C7C" fill-opacity=".27" d="M176 169.4c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3z"/><path fill="#7A7A7A" fill-opacity=".26" d="m142 134.7-6.5 6.8 6.8-6.5c3.7-3.5 6.7-6.6 6.7-6.7 0-.8-1 .2-7 6.4z"/><path fill="#7C7C7C" fill-opacity=".44" d="M77.5 99c19.2 19.2 35.2 35 35.5 35 .3 0-15.3-15.8-34.5-35C59.3 79.7 43.3 64 43 64c-.3 0 15.3 15.7 34.5 35zm90.5 62.4c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3z"/><path fill="#777" fill-opacity=".18" d="m132.4 144.2-1.9 2.3 2.3-1.9c2.1-1.8 2.7-2.6 1.9-2.6-.2 0-1.2 1-2.3 2.2zM48 181.7l-10.5 10.8L48.3 182c9.9-9.7 11.2-11 10.4-11-.1 0-5 4.8-10.7 10.7z"/><path fill="#7E7B7E" fill-opacity=".37" d="M225.5 128c0 30.5.1 43 .2 27.7.2-15.2.2-40.2 0-55.5-.1-15.2-.2-2.7-.2 27.8z"/><path fill="#666" fill-opacity=".02" d="M219 74.5c-2.4 2.5-4.2 4.5-3.9 4.5.3 0 2.5-2 4.9-4.5 2.4-2.5 4.2-4.5 3.9-4.5-.3 0-2.5 2-4.9 4.5zM55.9 191.7c-1.3 1.6-1.2 1.7.4.4 1.6-1.3 2.1-2.1 1.3-2.1-.2 0-1 .8-1.7 1.7z"/><path fill="#7B7B7B" fill-opacity=".35" d="M63.5 102c17 17 31.2 31 31.5 31 .3 0-13.5-14-30.5-31-17-17.1-31.2-31-31.5-31-.3 0 13.5 13.9 30.5 31zm51 51c4.9 4.9 9.2 9 9.5 9 .2 0-3.6-4.1-8.5-9-4.9-5-9.2-9-9.5-9-.2 0 3.6 4 8.5 9zm57.5 12.4c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3z"/><path fill="#7D777D" fill-opacity=".18" d="M238.5 128c0 31.6.1 44.6.2 28.7.2-15.8.2-41.6 0-57.5-.1-15.8-.2-2.8-.2 28.8z"/><path fill="gray" fill-opacity=".02" d="m194 81.7-6.5 6.8 6.8-6.5c6.2-6 7.2-7 6.4-7-.1 0-3.2 3-6.7 6.7zM160.5 155c1 1.1 2 2 2.3 2 .3 0-.3-.9-1.3-2s-2-2-2.3-2c-.3 0 .3.9 1.3 2zm33 32c1 1.1 2 2 2.3 2 .3 0-.3-.9-1.3-2s-2-2-2.3-2c-.3 0 .3.9 1.3 2z"/><path fill="gray" fill-opacity=".05" d="m204.5 89.2-10 10.3 10.3-10c9.5-9.3 10.7-10.5 9.9-10.5-.1 0-4.7 4.6-10.2 10.2z"/><path fill="#777" fill-opacity=".12" d="m184 109.7-10.5 10.8 10.8-10.5c9.9-9.7 11.2-11 10.4-11-.1 0-5 4.8-10.7 10.7z"/><path fill="#7B7B7B" fill-opacity=".44" d="m168.5 108.2-6 6.3 6.3-6c5.8-5.5 6.7-6.5 5.9-6.5-.1 0-2.9 2.8-6.2 6.2z"/><path fill="#7E7B7E" fill-opacity=".34" d="m154.5 122.2-6 6.3 6.3-6c5.8-5.5 6.7-6.5 5.9-6.5-.1 0-2.9 2.8-6.2 6.2z"/><path fill="#807A80" fill-opacity=".2" d="m166.5 127.2-6 6.3 6.3-6c5.8-5.5 6.7-6.5 5.9-6.5-.1 0-2.9 2.8-6.2 6.2z"/><path fill="#7D7D7D" fill-opacity=".35" d="M117.5 139c2.1 2.2 4.1 4 4.4 4 .3 0-1.3-1.8-3.4-4-2.1-2.2-4.1-4-4.4-4-.3 0 1.3 1.8 3.4 4zm71 25c15.9 15.9 29.2 29 29.5 29 .3 0-12.6-13.1-28.5-29-15.9-16-29.2-29-29.5-29-.3 0 12.6 13 28.5 29z"/><path fill="#7C7C7C" fill-opacity=".26" d="M83.8 207.7c24.3.2 64.1.2 88.5 0 24.3-.1 4.4-.2-44.3-.2-48.7 0-68.6.1-44.2.2z"/><path fill="#7A7A7A" fill-opacity=".27" d="m97.5 149.2-5 5.3 5.3-5c4.8-4.6 5.7-5.5 4.9-5.5-.1 0-2.5 2.4-5.2 5.2zm42 5-7 7.3 7.3-7c6.7-6.4 7.7-7.5 6.9-7.5-.1 0-3.4 3.3-7.2 7.2z"/><path fill="gray" fill-opacity=".11" d="m72 157.7-12.5 12.8L72.3 158c7-6.9 12.7-12.6 12.7-12.7 0-.8-1.4.6-13 12.4z"/><path fill="#767676" fill-opacity=".05" d="M156 150.4c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3zm32 31c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3z"/><path fill="#7D7A7D" fill-opacity=".35" d="m86 160.7-5.5 5.8 5.8-5.5c3.1-3 5.7-5.6 5.7-5.7 0-.8-1 .1-6 5.4z"/><path fill="#7C7C7C" fill-opacity=".25" d="M91.3 194.7c20.3.2 53.1.2 73 0 19.9-.1 3.4-.2-36.8-.2-40.1 0-56.4.1-36.2.2z"/><path fill="#7C7A7C" fill-opacity=".45" d="m74.5 172.2-5 5.3 5.3-5c2.8-2.7 5.2-5.1 5.2-5.2 0-.8-.9.1-5.5 4.9z"/><path fill="#7A7A7A" fill-opacity=".19" d="M180 173.4c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3z"/></svg>
    )

}
