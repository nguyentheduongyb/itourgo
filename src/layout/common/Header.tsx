import Link from "next/link";

import Search from "~/components/Search";
import Navbar from "./Navbar";
import Cart from "~/components/popper/Cart";
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md"
import { BsSearch } from "react-icons/bs"
import { FaUser, FaSignOutAlt, FaUserCircle } from "react-icons/fa"
import { IoMdWallet, IoIosSettings } from "react-icons/io"
import { AiOutlineUser } from "react-icons/ai"
import { CgShoppingCart } from "react-icons/cg"

const Header = () => {
        const userMenu1 = [
                {
                        icon: <FaUser />,
                        title: 'Xem Profile',
                        to: '/account/profile',
                },
                {
                        icon: <IoMdWallet />,
                        title: 'Ví',
                        to: '/account/wallet',
                },
                {
                        icon: <IoIosSettings />,
                        title: 'Cài đặt',
                        to: '/settings',
                },
                {
                        icon: <FaSignOutAlt />,
                        title: 'Đăng xuất',
                        separate: true,
                },
        ];
        return (
                <div className="w-full bg-white sticky top-0 z-[40]">
                        <Navbar />
                        <div className="w-full h-[64px]">
                                <div className="flex items-center h-full container justify-between">
                                        <Link href="/"><img className="h-[64px]" src="/itourgo-logo.png" alt="" /></Link>
                                        <div className="flex gap-4 text-[15px]">
                                                <div className="dropdown-hover uppercase flex items-center gap-1 relative py-3 text-[color:var(--primary-color)]">Trang chủ<MdKeyboardArrowDown fontSize={22} />
                                                        <ul className="dropdown-menu hidden w-60 absolute top-[100%] bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)] text-black">
                                                                <li className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] hover:text-white "><Link className="block" href="/tour">Tour</Link></li>
                                                                <li className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] hover:text-white"><Link className="block" href="/hotel">Khách sạn</Link></li>
                                                                <li className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] hover:text-white"><Link className="block" href="/restaurant">Nhà hàng</Link></li>
                                                                <li className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] hover:text-white dropdown-subhover relative">
                                                                        <div className="flex items-center justify-between">
                                                                                <span>Phương tiện di chuyển</span>
                                                                                <MdOutlineKeyboardArrowRight fontSize={22} />
                                                                        </div>
                                                                        <div className="dropdown-submenu hidden w-48 absolute left-[100%] top-0 bg-white">
                                                                                <div className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] text-black hover:text-white"><Link className="block" href="">Xe Bus</Link></div>
                                                                                <div className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] text-black hover:text-white"><Link className="block" href="">Xe Khách</Link></div>
                                                                                <div className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] text-black hover:text-white"><Link className="block" href="">Tàu Thuyền</Link></div>
                                                                                <div className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] text-black hover:text-white"><Link className="block" href="/airline-ticket">Vé Máy Bay</Link></div>
                                                                        </div>
                                                                </li>
                                                        </ul>
                                                </div>
                                                <div className="dropdown-hover uppercase flex items-center gap-1 relative py-3">Địa điểm<MdKeyboardArrowDown fontSize={22} />
                                                        <ul className="dropdown-menu w-52 hidden overflow-hidden absolute top-[100%] bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)] rounded-sm text-">
                                                                <li className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] hover:text-white"><Link className="block" href="/tour/search/tour-viet-nam">Miền Bắc</Link></li>
                                                                <li className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] hover:text-white"><Link className="block" href="/tour/search/tour-viet-nam">Miền Trung</Link></li>
                                                                <li className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] hover:text-white"><Link className="block" href="/tour/search/tour-viet-nam">Miền Nam</Link></li>
                                                                <li className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] hover:text-white"><Link className="block" href="/tour/search/tour-viet-nam">Du lịch nước ngoài</Link></li>
                                                        </ul>
                                                </div>
                                                <Link href="/about" className="dropdown-hover uppercase flex items-center gap-1 relative py-3">Về chúng tôi</Link>

                                                <Link href="/blog" className="dropdown-hover uppercase flex items-center gap-1 relative py-3">blog</Link>
                                                {/* <Link href="/" className="dropdown-hover uppercase flex items-center gap-1 relative py-3">Mã giảm giá</Link> */}
                                                <button className="p-2">
                                                        <BsSearch className="hover:" />
                                                </button>

                                        </div>
                                        <div className="flex items-center">
                                                <Cart items={userMenu1}>
                                                        <Link href="/user/cart">
                                                                <CgShoppingCart className="text-[color:var(--secondary-color)]" fontSize={32} />
                                                        </Link>

                                                </Cart>
                                                <Link href="/auth/login" className="flex items-center bg-transparent py-3 px-8 uppercase text-[#777777] gap-1">
                                                        <AiOutlineUser />
                                                        <span>Đăng ký / Đăng nhập</span>
                                                </Link>
                                                {/* <Link href="/account/profile" className="rounded-xl px-6 py-3 text-white bg-[color:var(--primary-color)]">Book now</Link> */}
                                        </div>
                                </div>
                        </div>
                </div >
        )
}
export default Header;