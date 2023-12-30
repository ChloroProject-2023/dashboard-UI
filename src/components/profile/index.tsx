import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  EventHandler,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { ProfileData } from "./ProfileData";
import { Link } from "react-router-dom";

const useOnClickOutside = (
  ref: MutableRefObject<HTMLDivElement | null>,
  handler: EventHandler<any>,
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

const Profile = () => {
  const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(ref, () => setIsMenuToggle(false));

  return (
    <div>
      <div
        onClick={() => setIsMenuToggle(!isMenuToggle)}
        className="w-16 h-16 border rounded-full bg-gray-300 hover:bg-gray-100 cursor-pointer"
      >
        <img
          src="https://picsum.photos/200"
          className="w-16 h-16 rounded-full"
        />
      </div>
      {isMenuToggle && (
        <div
          ref={ref}
          className="absolute top-0 right-0 w-96 h-screen border rounded-lg bg-white"
        >
          <div className="w-full">
            <div className="flex items-center my-3 gap-5">
              <img
                src="https://picsum.photos/200"
                className="ml-8 w-8 h-8 rounded-full"
              />
              <h1 className="text-2xl font-bold">John Doe</h1>
              <button
                className="flex items-center justify-center w-12 h-12 p-1 ml-auto mr-8 rounded-full hover:bg-gray-200"
                onClick={() => setIsMenuToggle(!isMenuToggle)}
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            <hr />
            <div>
              <ul>
                {ProfileData.map((item, index) => {
                  return (
                    <Link
                      to={item.path}
                      key={index}
                    >
                    <li key={index} className="flex items-center my-3 gap-3 hover:bg-gray-100">
                      <div className="w-12 h-12 p-1 ml-6 rounded-full">
                        <item.icon
                          className="w-10 h-10 rounded-full"
                        />
                      </div>
                      <h1 className=" mt-1 text-md">{item.title}</h1>
                    </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
