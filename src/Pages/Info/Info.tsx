import verify from "Assets/verify.png";
import { RootState } from "configStore";
import moment from "moment";
import { useSelector } from "react-redux";

const Info = () => {
    const { user } = useSelector((state: RootState) => state.auth);
    return (
        <div className="container mx-auto px-10">
            <div className="h-28"></div>
            <div className="flex">
                {/* left  */}
                <div className="w-1/4">
                    <div className="w-full border rounded-lg p-5">
                        <div>
                            <img
                                className="w-1/2 mx-auto rounded-full"
                                src="https://a0.muscache.com/defaults/user_pic-50x50.png?v=3"
                            />
                            <button className="text-center text-sm text-gray-600 underline hover:text-black duration-150 block mx-auto">
                                Cập nhật ảnh
                            </button>
                        </div>

                        <div className="mt-2">
                            <div className="flex items-center">
                                <img
                                    src={verify}
                                    width="30px"
                                    className="text-green-600"
                                />
                                <span className="ml-2 font-semibold text-lg">
                                    Xác minh danh tính
                                </span>
                            </div>
                            <div className="">
                                <p className="text-gray-600 py-1 text-base">
                                    Xác minh danh tính của bạn với huy hiệu xác
                                    minh danh tính.
                                </p>
                                <button className="border px-5 py-2.5 rounded-lg hover:bg-gray-200 duration-200 font-semibold text-gray-800 my-1">
                                    Nhận huy hiệu
                                </button>
                            </div>
                        </div>

                        <div className="mt-2 border-t py-2">
                            <div className="font-semibold text-lg text-gray-800">
                                Đã xác nhận
                            </div>
                            <div className="mt-2">
                                <i className="fa-solid fa-check" />
                                <span className="ml-2 text-sm italic">
                                    Địa chỉ email
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* right  */}
                <div className="w-3/5">
                    <div className="px-10">
                        <div className=" border-b py-5">
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="text-base tracking-wide">
                                        Tên pháp lý
                                    </div>
                                    <div className="text-sm tracking-wide text-gray-500">
                                        {user?.name}
                                    </div>
                                </div>
                                <div>
                                    <button className="underline font-medium text-sm tracking-wide text-gray-700 hover:text-black duration-150">
                                        Thay đổi
                                    </button>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder={user?.name}
                                />
                                <button className="px-5 py-3 mt-2 bg-gray-600 text-white hover:bg-black duration-200 rounded-lg">
                                    Lưu
                                </button>
                            </div>
                        </div>
                        <div className=" border-b py-5">
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="text-base tracking-wide">
                                        Giới tính
                                    </div>
                                    <div className="text-sm tracking-wide text-gray-500">
                                        {user?.gender ? "Nam" : "Nữ"}
                                    </div>
                                </div>
                                <div>
                                    <button className="underline font-medium text-sm tracking-wide text-gray-700 hover:text-black duration-150">
                                        Thay đổi
                                    </button>
                                </div>
                            </div>
                            <div className="mt-2">
                                <select
                                    id="countries"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                >
                                    <option selected disabled>
                                        Choose a country
                                    </option>
                                    <option value="true">Nam</option>
                                    <option value="false">Nữ</option>
                                </select>

                                <button className="px-5 py-3 mt-2 bg-gray-600 text-white hover:bg-black duration-200 rounded-lg">
                                    Lưu
                                </button>
                            </div>
                        </div>
                        <div className=" border-b py-5">
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="text-base tracking-wide">
                                        Ngày sinh
                                    </div>
                                    <div className="text-sm tracking-wide text-gray-500">
                                        {moment(user?.birthday)
                                            .format("DD-MM-YYYY")
                                            .toString()}
                                    </div>
                                </div>
                                <div>
                                    <button className="underline font-medium text-sm tracking-wide text-gray-700 hover:text-black duration-150">
                                        Thay đổi
                                    </button>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    type="date"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                />

                                <button className="px-5 py-3 mt-2 bg-gray-600 text-white hover:bg-black duration-200 rounded-lg">
                                    Lưu
                                </button>
                            </div>
                        </div>
                        <div className=" border-b py-5">
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="text-base tracking-wide">
                                        Địa chỉ email
                                    </div>
                                    <div className="text-sm tracking-wide text-gray-500">
                                        {user?.email}
                                    </div>
                                </div>
                                <div>
                                    <button className="underline font-medium text-sm tracking-wide text-gray-700 hover:text-black duration-150">
                                        Thay đổi
                                    </button>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    type="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder={user?.email}
                                />
                                <button className="px-5 py-3 mt-2 bg-gray-600 text-white hover:bg-black duration-200 rounded-lg">
                                    Lưu
                                </button>
                            </div>
                        </div>
                        <div className=" border-b py-5">
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="text-base tracking-wide">
                                        Số điện thoại
                                    </div>
                                    <div className="text-sm tracking-wide text-gray-500">
                                        {user?.phone}
                                    </div>
                                </div>
                                <div>
                                    <button className="underline font-medium text-sm tracking-wide text-gray-700 hover:text-black duration-150">
                                        Thay đổi
                                    </button>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder={user?.phone}
                                />
                                <button className="px-5 py-3 mt-2 bg-gray-600 text-white hover:bg-black duration-200 rounded-lg">
                                    Lưu
                                </button>
                            </div>
                        </div>
                        <div className=" border-b py-5">
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="text-base tracking-wide">
                                        Địa chỉ
                                    </div>
                                    <div className="text-sm tracking-wide text-gray-500">
                                        {user?.address}
                                    </div>
                                </div>
                                <div>
                                    <button className="underline font-medium text-sm tracking-wide text-gray-700 hover:text-black duration-150">
                                        Thay đổi
                                    </button>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder={user?.address}
                                />
                                <button className="px-5 py-3 mt-2 bg-gray-600 text-white hover:bg-black duration-200 rounded-lg">
                                    Lưu
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;
