'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from 'lucide-react';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Navigation',
		links: [
			{ title: 'About', href: '#about' },
			{ title: 'Experience', href: '#experience' },
			{ title: 'Skills', href: '#skills' },
			{ title: 'Education', href: '#education' },
			{ title: 'Contact', href: '#contact' },
		],
	},
	{
		label: 'Connect',
		links: [
			{ title: 'LinkedIn', href: 'https://linkedin.com/in/ram-surya', icon: LinkedinIcon },
			{ title: 'GitHub', href: 'https://github.com/ramsurya', icon: GithubIcon },
			{ title: 'Twitter', href: 'https://twitter.com/ramsurya', icon: TwitterIcon },
			{ title: 'Email', href: 'mailto:ram.surya@example.com', icon: MailIcon },
		],
	},
];

export function Footer() {
	return (
		<footer className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16">
			<div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

			<div className="grid w-full gap-8 md:grid-cols-3 md:gap-12">
				<AnimatedContainer className="space-y-4">
					<h2 className="text-2xl font-bold">Ram Surya CH</h2>
					<p className="text-muted-foreground text-sm mt-4">
						© {new Date().getFullYear()} Ram Surya Chelluboyina. All rights reserved.
					</p>
				</AnimatedContainer>

				{footerLinks.map((section, index) => (
					<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
						<div>
							<h3 className="text-xs font-semibold mb-4">{section.label}</h3>
							<ul className="text-muted-foreground space-y-2 text-sm">
								{section.links.map((link) => (
									<li key={link.title}>
										<a
											href={link.href}
											className="hover:text-foreground inline-flex items-center transition-all duration-300"
										>
											{link.icon && <link.icon className="me-1 size-4" />}
											{link.title}
										</a>
									</li>
								))}
							</ul>
						</div>
					</AnimatedContainer>
				))}
			</div>
		</footer>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export default Footer;