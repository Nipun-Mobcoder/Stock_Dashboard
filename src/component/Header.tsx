import { useNavigate } from "react-router";
import { useAppSelector } from "../redux/hooks/hooks";

const Header = ({
  setModal,
}: {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  const userLocalItem = localStorage.getItem("user:data");
  if (!userLocalItem) {
    navigate("/sign_in");
    return;
  }
  const userData = JSON.parse(userLocalItem);
  const amount = useAppSelector((state) => state.amount.value/100)

  return (
    <header className="bg-gray-900  w-full text-white py-4 px-6 flex justify-between items-center shadow-lg">
      <div
        className="cursor-pointer flex items-center gap-2"
        onClick={() => navigate("/")}
      >
        <div className="w-8 h-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="#1769FF"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M472.609 336H339c-8.828 0-16.008-7.156-16.008-16 0-8.828 7.18-15.984 16.008-15.984h128.227c6.492 0 11.773-5.383 11.773-12 0-.969-.258-1.867-.469-2.766-12.578-37.922-47.594-65.242-89.016-65.242-51.992 0-94.125 42.984-94.125 95.992 0 53.031 42.133 96.008 94.125 96.008 32 0 60.219-16.336 77.227-41.219l.039.016c2.891-3.875 7.461-6.422 12.664-6.422 8.719 0 15.805 7.086 15.805 15.805 0 3.211-.969 6.188-2.617 8.68-.219.328-.469.594-.703.898-22.727 32.758-60.062 54.25-102.414 54.25-69.32 0-125.523-57.32-125.523-128.016 0-70.68 56.203-128 125.523-128 59.055 0 108.461 41.656 121.828 97.703.32 2.039.5 4.156.5 6.312 0 22.087-17.563 39.985-39.235 39.985zm-40.617-175.984H336c-8.844 0-16-7.176-16-16 0-8.844 7.156-16.004 16-16.004h95.992c8.852 0 16.008 7.16 16.008 16.004 0 8.824-7.156 16-16.008 16zm-415.992 0c8.844 0 16 7.156 16 15.984 0 8.844-7.156 16-16 16-8.828 0-16-7.156-16-16 0-8.828 7.172-15.984 16-15.984zm207 105.25c6.227 0 11.57 3.57 14.211 8.773 11.836 17.742 18.797 39.039 18.797 61.961 0 61.859-50.156 112.016-112.008 112.016H40c-22.078 0-40-17.922-40-40.008v-144c0-22.102 17.922-40 40-40h95.992c44.188 0 80.016-35.809 80.016-79.992 0-44.188-35.828-80.012-80.016-80.012H48c-8.844 0-16 7.176-16 16.004v32.004c0 8.824-7.156 16-16 16-8.828 0-16-7.176-16-16V72.004C0 49.922 17.922 32 40 32H135.992c61.859 0 112.016 50.16 112.016 112.016 0 53.582-37.727 98.164-88.008 109.156 0 0-10.531 2.836-16 2.836H44c-6.617 0-12 5.367-12 12v132c0 8.828 7.156 16 16 16h96c44.18 0 80.008-35.82 80.008-80.008 0-16.828-5.219-32.414-14.102-45.297l.141-.109c-1.898-2.633-3.047-5.844-3.047-9.344 0-8.828 7.156-15.984 16-15.984z"
            />
          </svg>
        </div>
        <span className="text-lg font-bold">Stock Finance</span>
      </div>

      <nav className="hidden md:flex space-x-6">
        <button
          onClick={() => navigate("/dashboard")}
          className="cursor-pointer hover:text-gray-300"
        >
          Dashboard
        </button>
        <button
          onClick={() => navigate("/portfolio")}
          className="cursor-pointer hover:text-gray-300"
        >
          Your Portfolio
        </button>
      </nav>

      <div className="flex items-center space-x-4">
        {userData.userName.firstName ? (
          <>
            <span className="text-sm text-gray-300">
              Hello, {userData.userName.firstName}!
            </span>
            <div className="relative w-[72] h-[32] ">
              <button
                onClick={() => {
                  setModal(true);
                }}
                className="bg-yellow-500 hover:bg-gray-300 px-3 py-1 rounded-full text-sm text-black flex items-center gap-2 cursor-pointer"
              >
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 511.999 511.999"
                  width="24"
                  height="24"
                >
                  <circle
                    style={{ opacity: "0.2" }}
                    cx="316.026"
                    cy="311.219"
                    r="187.964"
                  />
                  <path
                    style={{ opacity: "0.2" }}
                    d="M308.016,499.002c2.657,0.111,5.325,0.182,8.01,0.182
	s5.353-0.069,8.01-0.182v-74.598h-16.02V499.002z M177.578,184.098l52.75,52.752l11.328-11.328l-52.75-52.751
	C184.972,176.384,181.192,180.163,177.578,184.098z M202.841,303.208h-74.598c-0.111,2.657-0.182,5.325-0.182,8.011
	c0,2.685,0.069,5.352,0.182,8.009h74.598V303.208z M177.576,438.339c3.615,3.936,7.395,7.715,11.328,11.328l52.751-52.75
	l-11.328-11.329L177.576,438.339z M454.473,184.098c-3.614-3.934-7.394-7.714-11.328-11.327l-52.751,52.751l11.329,11.328
	L454.473,184.098z M503.809,303.208l-74.598-0.002v16.02l74.598,0.002c0.111-2.657,0.182-5.324,0.182-8.009
	S503.921,305.866,503.809,303.208z M308.016,123.437v74.597h16.02v-74.597c-2.657-0.111-5.325-0.182-8.01-0.182
	C313.342,123.255,310.673,123.325,308.016,123.437z M390.396,396.916l52.752,52.751c3.934-3.615,7.714-7.395,11.328-11.328
	l-52.752-52.752L390.396,396.916z"
                  />
                  <circle
                    style={{ fill: "#333E48" }}
                    cx="316.026"
                    cy="311.219"
                    r="135.548"
                  />
                  <path
                    style={{ fill: "#FFFFFF" }}
                    d="M318.51,197.849c7.573,0,13.587,6.002,13.587,13.581v3.654c14.102,2.092,26.646,6.27,37.879,12.543
	c4.961,2.874,9.398,7.829,9.398,15.672c0,9.927-7.836,17.5-17.766,17.5c-3.136,0-6.264-0.78-9.141-2.353
	c-7.311-3.914-14.625-7.047-21.68-8.874v39.703c39.704,10.709,56.686,26.91,56.686,56.161c0,29.254-22.467,48.065-55.378,51.725
	v13.842c0,7.578-6.014,13.586-13.587,13.586c-7.576,0-13.584-6.007-13.584-13.586V396.9c-18.547-2.353-36.054-8.88-51.463-18.285
	c-5.488-3.4-8.887-8.623-8.887-15.673c0-10.19,7.839-17.77,18.029-17.77c3.4,0,7.057,1.311,10.191,3.402
	c10.971,7.051,21.425,12.015,33.438,14.628v-41.535c-37.622-10.19-56.168-24.556-56.168-55.642c0-28.736,21.944-48.068,54.86-51.468
	v-3.127C304.927,203.851,310.935,197.849,318.51,197.849z M306.235,282.48v-35.265c-12.542,1.829-18.026,8.1-18.026,16.455
	C288.208,271.769,291.864,277.257,306.235,282.48z M330.787,328.2v36.305c12.273-1.824,18.549-7.578,18.549-16.977
	C349.337,338.907,344.891,333.16,330.787,328.2z"
                  />
                  <circle
                    style={{ fill: "#FF9E16" }}
                    cx="195.974"
                    cy="200.78"
                    r="187.964"
                  />
                  <path
                    style={{ opacity: "0.2" }}
                    d="M57.527,73.658l52.75,52.752l11.328-11.328L68.856,62.33
	C64.92,65.944,61.141,69.724,57.527,73.658z M187.964,388.562c2.657,0.111,5.325,0.182,8.01,0.182s5.353-0.069,8.01-0.182v-74.599
	h-16.02V388.562z M57.525,327.898c3.615,3.936,7.395,7.715,11.328,11.328l52.752-52.751l-11.328-11.328L57.525,327.898z
	 M82.79,192.769H8.191c-0.112,2.657-0.182,5.325-0.182,8.011c0,2.685,0.069,5.352,0.182,8.009H82.79V192.769z M187.964,12.997
	v74.597h16.02V12.997c-2.657-0.111-5.325-0.182-8.01-0.182S190.622,12.886,187.964,12.997z M383.757,192.769l-74.598-0.002v16.02
	l74.598,0.002c0.111-2.657,0.182-5.324,0.182-8.009C383.939,198.094,383.869,195.426,383.757,192.769z M334.422,73.658
	c-3.614-3.934-7.394-7.714-11.328-11.327l-52.751,52.751l11.328,11.328L334.422,73.658z M270.344,286.476l52.751,52.752
	c3.934-3.615,7.714-7.395,11.328-11.329l-52.751-52.751L270.344,286.476z"
                  />
                  <circle
                    style={{ fill: "#333E48" }}
                    cx="195.974"
                    cy="200.78"
                    r="135.548"
                  />
                  <path
                    style={{ fill: "#FFFFFF" }}
                    d="M198.458,87.409c7.573,0,13.587,6.002,13.587,13.581v3.654c14.102,2.092,26.646,6.27,37.879,12.543
	c4.961,2.874,9.398,7.829,9.398,15.672c0,9.927-7.836,17.5-17.766,17.5c-3.136,0-6.264-0.78-9.141-2.353
	c-7.311-3.914-14.625-7.047-21.68-8.874v39.703c39.704,10.709,56.686,26.91,56.686,56.161c0,29.255-22.467,48.065-55.378,51.725
	v13.842c0,7.578-6.014,13.586-13.587,13.586c-7.576,0-13.584-6.007-13.584-13.586V286.46c-18.547-2.353-36.054-8.88-51.463-18.285
	c-5.488-3.4-8.887-8.623-8.887-15.673c0-10.19,7.839-17.77,18.029-17.77c3.4,0,7.057,1.311,10.191,3.402
	c10.971,7.051,21.424,12.015,33.438,14.628v-41.535c-37.622-10.19-56.168-24.556-56.168-55.642c0-28.736,21.944-48.068,54.86-51.468
	v-3.127C184.875,93.411,190.882,87.409,198.458,87.409z M186.183,172.04v-35.265c-12.542,1.829-18.026,8.1-18.026,16.455
	C168.157,161.33,171.812,166.817,186.183,172.04z M210.736,217.759v36.305c12.273-1.824,18.549-7.578,18.549-16.977
	C229.286,228.467,224.838,222.72,210.736,217.759z"
                  />
                  <g>
                    <path
                      style={{ fill: "#1E252B" }}
                      d="M195.974,396.754C87.913,396.754,0,308.841,0,200.78S87.913,4.805,195.974,4.805
		S391.948,92.718,391.948,200.78S304.036,396.754,195.974,396.754z M195.974,20.825c-99.227,0-179.955,80.727-179.955,179.955
		s80.727,179.955,179.955,179.955s179.954-80.727,179.954-179.955S295.201,20.825,195.974,20.825z"
                    />
                    <path
                      style={{ fill: "#1E252B" }}
                      d="M195.974,344.33c-79.155,0-143.552-64.397-143.552-143.551c0-79.155,64.397-143.554,143.552-143.554
		s143.552,64.398,143.552,143.554C339.527,279.933,275.13,344.33,195.974,344.33z M195.974,73.245
		c-70.322,0-127.533,57.211-127.533,127.534c0,70.321,57.211,127.532,127.533,127.532S323.507,271.1,323.507,200.779
		C323.507,130.455,266.296,73.245,195.974,73.245z"
                    />
                    <path
                      style={{ fill: "#1E252B" }}
                      d="M316.026,507.194c-40.009,0-78.489-11.98-111.284-34.641c-32.03-22.134-56.538-52.884-70.876-88.926
		l14.884-5.922c13.166,33.097,35.677,61.337,65.099,81.669c30.105,20.804,65.438,31.8,102.178,31.8
		c99.227,0,179.955-80.727,179.955-179.955c0-39.382-12.485-76.778-36.107-108.146c-22.856-30.351-55.353-53.108-91.506-64.081
		l4.651-15.33c39.377,11.951,74.768,36.731,99.651,69.773c25.73,34.168,39.329,74.896,39.329,117.782
		C512,419.281,424.087,507.194,316.026,507.194z"
                    />
                    <path
                      style={{ fill: "#1E252B" }}
                      d="M316.026,454.77c-46.971,0-91.051-23.048-117.912-61.653l13.15-9.148
		c23.869,34.303,63.032,54.783,104.763,54.783c70.322,0,127.533-57.211,127.533-127.532c0-45.326-24.386-87.63-63.642-110.401
		l8.039-13.857c44.178,25.626,71.623,73.24,71.623,124.258C459.578,390.373,395.18,454.77,316.026,454.77z"
                    />
                  </g>
                </svg>
                {amount
                  ? amount > 0
                    ? amount
                    : 0
                  : 0}
              </button>
            </div>

            <button
              onClick={() => {
                localStorage.clear();
                navigate("/sign_in");
              }}
              className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => navigate("/sign_in")}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
