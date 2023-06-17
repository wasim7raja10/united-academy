import Image from "next/image";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className='text-neutral'>
					<div className='relative h-60 w-full'>
						{/* background image */}
						<Image
							className='-z-20'
							fill
							src='/footer-img.png'
							alt='background image'
						/>
						<div className='absolute top-0 bottom-0 left-0 right-0 bg-primary bg-opacity-80 -z-10'></div>
						<div className='z-10 p-5 flex flex-col justify-center h-full'>
							<div className='space-y-6'>
								<div className='flex items-center gap-4'>
									<MdLocationOn className=' text-2xl text-secondary' />
									<div className=' text-xl tracking-wide'>
										<p>United Academy School</p>
										<p className='text-base'>Motiganj, Samsi, Malda</p>
									</div>
								</div>
								<div className='flex items-center gap-4'>
									<MdPhone className=' text-2xl text-secondary' />
									<a
										className=' text-xl tracking-wide'
										href='tel:+919735904503'
									>
										9735904503
									</a>
								</div>
								<div className='flex items-center gap-4'>
									<MdEmail className=' text-2xl text-secondary' />
									<a
										className=' text-xl tracking-wide'
										href='mailto: unitedacademy@gmail.com'
									>
										unitedacademy@gmail.com
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* copyright */}
					<p className='text-dark bg-secondary py-4 text-center'>
						© 2023 United Academy, Motiganj, Samsi. <br /> All rights reserved.
					</p>
				</footer>
  )
}