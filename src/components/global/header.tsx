"use client";

import { navigationData } from "@/shared/data";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Separator } from "../ui/separator";
import { Fragment } from "react";

export const Header = () => {
	return (
		<header className=''>
			<div className='container py-4 flex items-center justify-between border-b'>
				<div className='flex items-center gap-4'>
					<img src={"/favicon.svg"} alt={"Logo"} height={72} width={72} />
					<div className=''>
						<h1 className='text-2xl'>United Academy</h1>
						<p className='text-lg'>Samsi, Malda</p>
					</div>
				</div>
				<div>
					<NavigationMenu>
						<NavigationMenuList>
							{navigationData.map((item) => (
								<NavigationMenuItem key={item.href}>
									<NavigationMenuTrigger>
										<span className='text-base'>{item.title}</span>
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<ul className='p-6 w-96'>
											{item.child?.map((child, index) => (
												<Fragment key={child.href}>
													<li className='p-2'>
														<NavigationMenuLink asChild>
															<a
																href={item.href + "/" + child.href}
																className='capitalize'
															>
																{child.title}
															</a>
														</NavigationMenuLink>
													</li>

													{index < item.child!.length - 1 && (
														<Separator className='my-2' />
													)}
												</Fragment>
											))}
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>
							))}
						</NavigationMenuList>
					</NavigationMenu>
				</div>
			</div>
		</header>
	);
};
