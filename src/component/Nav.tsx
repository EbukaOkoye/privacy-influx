import { images } from "@/utils/image";
import Image from "next/image";

export default function Navbar() {
    return (
        <div className={`bg-[#59B5F7] p-3`}>
            <Image src={images.logo_white} alt="logo" className="" />
        </div>
    )
}